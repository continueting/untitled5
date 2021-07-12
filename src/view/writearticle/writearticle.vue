<template>
  <body @click="yu">
  <button type="button" onclick="dianwo()">点我</button>
  <div class="zhezhao" id='zhezhao'>
    <div class="tankuang">
      <div id="header">
        <span>我是弹窗</span>
        <div id="header-right" onclick="hidder()">x</div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "writearticle",
  methods:{
    yu(){
      document.getElementById('zhezhao').style.display="none";
    },
      dianwo(){
  document.getElementById('zhezhao').style.display="";
},
     hidder(){
  document.getElementById('zhezhao').style.display="none";
}
  }
}

</script>

<style scoped>
body{
  margin: 0px;
}
.zhezhao{
  position: fixed;
  left: 0px;
  top: 0px;
  background: #000;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
.tankuang{
  position: relative;
  background: #fff;
  width: 50%;
  height: 80%;
  border-radius: 5px;
  margin: 5% auto;
}
#header{
  height: 40px;
}
#header-right{
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: red;
  color: #fff;
  right: 5px;
  top: 5px;
  text-align: center;
}
</style>