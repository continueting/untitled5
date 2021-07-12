<template>
  <body>
  <div @click="func3">
    <form action="" class="login" >
      <p id="tilt">注册</p>
      <p id="warn">&nbsp;</p>
      <input type="text" id="username" placeholder="用户名">
      <input type="email" id="youxiang" placeholder="邮箱">
      <input type="text" id="age" placeholder="年龄">
      <label><input type="radio" name="sex" class="ti" >女</label>
      <label><input type="radio" name="sex" class="ti" checked>男</label>
      <br>
      <input type="password" id="password1" placeholder="密码">
      <input type="password" id="password2" placeholder="确认密码">
      <el-button type="submit" class="btn" @click="func1"> 验 证 </el-button>
      <el-button type="submit" class="btn btn1" @click="func2"> 返  回 </el-button>
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
   func3() {
  var ag = document.getElementById("age").value;
  if (ag - (ag | 0) != 0) {
    document.getElementById("warn").innerHTML = "年龄必须为整数，注册失败";
  }
  if(ag - (ag | 0) == 0){
    document.getElementById("warn").innerHTML = "&nbsp";
  }
   },
    func1() {
      var word1 = document.getElementById("password1").value;
      var word2 = document.getElementById("password2").value;
      var user = document.getElementById("username").value;
      var youx = document.getElementById("youxiang").value;
      if (user.length == 0 | youx.length == 0 | word1.length == 0 | word2.length == 0) {
        document.getElementById("warn").innerHTML = "填写不完整，注册失败";
      } else if (word1 != word2) {
        document.getElementById("warn").innerHTML = "密码不相同，注册失败";
      } else if (word1.length < 6) {
        document.getElementById("warn").innerHTML = "密码不足6位，注册失败";
      } else {
        alert("邮箱验证");
        this.$router.push('/check');
      }
    },
    func2() {
      this.$router.push('/land');
    },
  }
}
</script>

<style scoped>
*{
  user-select: none;
  /* 无法选中，整体感更强 */
}
#yui{
  margin-left: -470px;
  width: min-content;
  height: min-content;
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
#warn{
  color:red;
}
.ti{
  margin-left: -160px;
  margin-top: 8px;
  width: max-content;
  height: max-content;
}
.login{
  position: absolute;
  top: 50%;
  margin-top: -281px;
  left: 50%;
  margin-left: -200px;
  /* absolute居中的一种方法 */
  background-color: rgba(255,255,255,0.7);
  width: 400px;
  height: 570px;
  border-radius: 25px;
  text-align: center;
  padding: 5px 40px;
  box-sizing: border-box;
  /* 这样padding就不会影响大小 */
}
#tilt{
  font-size: 42px;
  font-weight: 600;
}

input{
  background-color: rgba(255,255,255,0);
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
  margin-top: 24px;
  font-size: 31px;
  font-weight: 600;
  color: white;
  float:left;
}
.btn1
{
  margin-left: 40px;
}
.btn:hover{
  background-color:#17D3AD
}
</style>
