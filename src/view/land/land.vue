<template>
  <body>
  <div class="backgroud">
    <form action="" class="login">
      <p>CSI语音技术吧</p>
      <p id="warn">&nbsp;</p>
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <br>
      <br>
      <a  class="btn2" href="#" > 人脸识别 </a>
      <el-button type="submit" class="btn" @click="func1"> 登  录 </el-button>
      <el-button type="submit" class="btn btn1" @click="func2"> 注  册 </el-button>
    </form>
  </div>
  </body>
</template>

<script>
//import {request} from "@/api/api";

import request from "request";
export default {
  name: "land",

  methods: {
    getMsg() {
      request({
        method: 'post',
        url: ''
      })
    },
    func1() {
      alert("登录成功");
      this.$router.push('/menu');
    },

    func2() {
      this.$router.push('/login');
    },
  }
}
</script>

<style scoped>
*{
  user-select: none;
  /* 无法选中，整体感更强 */
}
body{
  background: #353b65 url("../../assets/img.png") no-repeat;
  background-size: 66%;
  min-height: 279px;
   margin-top: -100px;
  margin-left: -20px;
  margin-right: -25px;
  height: 630px;
  width:2000px;
}
#yu{
  margin-left: -544px;
  width: min-content;
  height: min-content;
}
.login{
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -200px;
  /* absolute居中的一种方法 */
  background-color: rgba(255,255,255,0.7);
  width: 400px;
  height: 400px;
  border-radius: 25px;
  text-align: center;
  padding: 5px 40px;
  box-sizing: border-box;
  /* 这样padding就不会影响大小 */
}
p{
  font-size: 42px;
  font-weight: 600;
}

input{
  background-color: rgba(0,0,0,0);
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid silver;
  /* 下面的会覆盖上面的步伐 */
  outline: none;
  font-size: 22px;
}

.btn{
  display: block;
  background-color:#3399CC ;
  width: 42%;
  height: 52px;
  border-radius: 23px;
  margin-top: 30px;
  font-size: 31px;
  color: rgba(255,255,255,0.6);
  float:left;
}
.btn1
{
  margin-left: 40px;
  margin-top: 30px;
}
.btn2
{
  margin-top:10px;
  margin-left:-560px;
}
.btn:hover{
  background-color:#17D3AD;
  color: rgba(255,255,255,1);
}
#warn{
  font-size: small;
  color:red;
}
</style>