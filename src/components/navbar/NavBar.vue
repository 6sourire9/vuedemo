<template>
  <div class="nav">
    <div class="left" v-if="!noBack">
      <i class="el-icon-back" @click="goBack"></i>
    </div>
    <div class="center">
      {{title}}
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: "NavBar",
    props:{
        title:{
          type:String,
          default:'',
        },
        back:{
            type:String,
            default:''
        },
        noBack:{
            type:Boolean,
            default:false
        }
    },
    setup(props){
      const router=useRouter();
      const goBack=()=>{
        if(!props.back){
          router.go(-1);
        }else{
          router.push('/home')
        }
      };
      return {goBack};
    }
};
</script>

<style scoped>
.nav {
  background-color: #ff8a9d;
  color: white;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
