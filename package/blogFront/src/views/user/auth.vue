<template>
  <div class="login-box">
    <div class="login-img"></div>
    <div class="login-content flex-column">
      <div class="title flex-column animate__animated animate__bounce" >
        <img src="../../assets/typeface.png">
        <h2>WELCOME</h2>
      </div>
      <div class="form flex-column">
        <div class="login-body flex-column">
          <router-view />
        </div>
      </div>
      <footer class="footer">
        <span>©copyright 2024-2025 KaFeiY版权所有</span>
        <span>未经许可 严谨转载</span>
      </footer>
    </div>
  </div>
</template>

<script lang="js" setup>

</script>

<style scoped>


.flex-column{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-box{
  display: flex;
}

.login-img{
  width: 500px;
  height: 100vh;
  background-image: url("../../assets/registerBg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.login-content{
  flex: 1;
  position: relative;
}
.login-body{
  margin-top: 30px;
}

.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  background-color: rgba(207,204,204,.7);
  backdrop-filter: bulr(10px);
  flex-wrap: wrap;
}
.footer>span{
  text-align: center;
  padding: 0 10px 0 10px;
}
</style>