import { parse } from "qs"; //字符串化为参数对象格式

export function separateByThousand(number, precision) {
  if (!number) return 0;
  if (typeof number === "number") {
    /*number.toLocaleString([locales [, options]])：返回这个数字在特定语言环境下的表示字符串
      array.toLocaleString([locales [, options]])：返回一个字符串表示数组中的元素
      date.toLocaleString([locales [, options]])：方法返回该日期对象的字符串，该字符串格式因不同语言而不同*/
    return number.toLocaleString("en-US", { maximumFractionDigits: precision }); //使用小数位数最大
  }
  if (typeof number === "string") {
    const [integer, fraction] = number.split(".");
    const regx = /(?=(\d{3})+(?!\d))\B/g; //千分位转换正则
    const integerResult = integer.replace(regx, ",");
    if (fraction !== undefined) {
      return `${integerResult}.${fraction}`;
    }
    return integerResult;
  }
}

export function getPageQuery() {
  return parse(window.location.href.split("?")[1]);
}

//浏览器类型及版本
export function getBrowserInfo() {
  const agent = navigator.userAgent.toLowerCase();
  const regStr_ff = /firefox\/[\d.]+/gi;
  const regStr_chrome = /chrome\/[\d.]+/gi;
  const regStr_saf = /safari\/[\d.]+/gi;
  const isIE = agent.indexOf("compatible") > -1 && agent.indexOf("msie" > -1); //判断是否IE<11浏览器
  const isIE11 = agent.indexOf("trident") > -1 && agent.indexOf("rv:11.0") > -1;
  if (isIE) {
    const reIE = new RegExp("msie (\\d+\\.\\d+);");
    reIE.test(agent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion === 7) {
      return "IE/7";
    }
    if (fIEVersion === 8) {
      return "IE/8";
    }
    if (fIEVersion === 9) {
      return "IE/9";
    }
    if (fIEVersion === 10) {
      return "IE/10";
    }
  } //isIE end
  if (isIE11) {
    return "IE/11";
  }
  //firefox
  if (agent.indexOf("firefox") > 0) {
    return agent.match(regStr_ff);
  }
  //Safari
  if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    return agent.match(regStr_saf);
  }
  //Chrome
  if (agent.indexOf("chrome") > 0) {
    return agent.match(regStr_chrome);
  }
}

export function arrayMove(arr, form, to) {
  const item = arr.splice(form, 1);
  arr.splice(to, 0, item);
}
