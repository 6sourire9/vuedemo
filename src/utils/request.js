import axios from "axios";
import { stringify } from "qs";
import { getBrowserInfo } from "@/utils/utils"; //参数对象格式化为字符串

axios.defaults.baseUrl = process.env.VUE_APP_REQUEST_URL;

//创建axios实例
const service = axios.create({
  timeout: 15000,
  paramsSerializer(params) {
    //序列化
    return stringify(params, { arrayFormat: "repeat" }); //指定数组的编码格式，indices,brackets,repeat
  }
});

const codeMessage = {
  0: "网络异常",
  200: "请求已成功",
  201: "新建或修改数据成功",
  202: "请求已接受,已经进入后台排队(异步任务)",
  204: "请求处理成功,没有返回内容",
  400: "客户端请求错误,服务器没有新建或修改数据",
  401: "用户未通过验证,请登录",
  403: "用户没有权限,访问被禁止",
  404: "请求地址不存在",
  406: "请求的格式不可得",
  410: "请求的资源被永久删除",
  422: "当创建一个对象时，发生一个验证错误",
  500: "服务器发生错误,无法完成请求,请检查服务器",
  502: "网关错误",
  503: "服务暂时不可用，服务器过载或正在维护",
  504: "网关超时"
};

function checkStatus(response) {
  if (!response || !response.status) {
    return alert("网络错误");
  }
  if (response.status === 401) {
    //本地存储清除token并且路由跳转到login页面
    localStorage.removeItem("token");
    // router.replace({path:'/login'})
  }
  const errorText =
    response.data.msg || codeMessage[response.status] || response.statusText;
  return alert(errorText);
}

//请求拦截器(对请求做统一处理，此处给每个请求加上token)
service.interceptors.request.use(
  config => {
    let pathname = location.pathname;
    if (localStorage.getItem("token")) {
      //判断本地存储是否有token,非登录页面的headers都带上token
      if (pathname !== "/" && pathname !== "/login") {
        config.headers.common["token"] = localStorage.getItem("token");
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    checkStatus(error.response);
    return Promise.reject(error.response.data);
  }
);

function checkResult(result) {
  if (result == null)
    return Promise.reject({ msg: "result is null or undefined" });
  if (result.code > 0) {
    return Promise.resolve(result);
  }
  return Promise.reject(result);
}

function get(url, params, config) {
  if (url.startsWith("/")) {
    return service.get(url, { params, ...config });
  }
  return service.get(`/gateWay/redirect?routeId=${url}`, { params, ...config });
}

function getWMessage(url, params, config) {
  return get(url, params, config).then(checkResult);
}

function post(url, params, config) {
  if (url.startsWith("/")) {
    return service.post(url, params, config);
  }
  return service.post(`/gateWay/redirect?routeId=${url}`, params, config);
}

function postWMessage(url, params, config) {
  return post(url, params, config).then(checkResult);
}

function download(url, params, config) {
  return get(url, params, { responseType: "blob", ...config }).then(
    handleDownloadFile
  );
}

function handleDownloadFile({ fileName, content }) {
  const browser = getBrowserInfo();
  const browserName = browser.replace(/[0-9./]/gi, "").toLowerCase();
  if (browserName === "chrome") {
    const blob = new Blob([content]);
    const downloadElement = document.createElement("a");
    const href = window.URL.createObjectURL(blob); //创建一个指向该参数对象的URL
    downloadElement.innerHTML = fileName;
    downloadElement.download = fileName;
    downloadElement.href = href;
    document.body.appendChild(downloadElement);
    downloadElement.click(); //
    // document.getElementsByTagName("body")[0].appendChild(downloadElement);
    document.body.removeChild(downloadElement);
    window.URL.revokeObjectURL(href); //释放
  } else if (window.navigator.msSaveBlob) {
    const blobObj = new Blob([content]);
    window.navigator.msSaveOrOpenBlob(blobObj, fileName);
  }
}

export default {
  get,
  getWMessage,
  post,
  postWMessage,
  download
};
