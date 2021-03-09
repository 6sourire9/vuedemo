<template>
  <el-row class="nav">
    <el-col :span="8">
      <i v-if="!noBack" class="el-icon-back" @click="goBack"></i>
    </el-col>
    <el-col :span="8" class="center">
      {{title}}
    </el-col>
    <el-col :span="8">
        <slot name="right"></slot>
    </el-col>
  </el-row>
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
    padding: 0px 8px;
  }
  .center{
    text-align: center;
  }
</style>
