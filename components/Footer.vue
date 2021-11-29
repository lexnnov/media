<template>
  <footer class="el-footer">
    <div class="el-footer__copyright">
      2021 copyright all rights reserved
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .el-footer {
    height: 90px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    border-top: 1px solid #E8E8E8;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .el-footer__copyright {
    width: 1150px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 90px;
  }

  @media only screen and (max-width: 768px) {
    .el-footer__copyright {
      width: 100%;
      margin: 0 auto;
      padding: 0 16px;
    }
  }
</style>
