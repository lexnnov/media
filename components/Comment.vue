<template>
  <div class="el-comment">

    <div class="el-comment__left">
      <img
        class="el-comment__avatar"
        src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
      />
    </div>

    <div class="el-comment__right">
      <div class="el-comment__username">{{comment.name}}</div>
      <div class="el-comment__content">{{comment.body}}</div>
    </div>

  </div>
</template>

<script>
	export default {
		name: 'Comment',
    props: ['comment']
	}
</script>

<style scoped>

  .el-comment {
    max-width: 375px;
    display: flex;
    padding: 8px 16px;
    font-family: Manrope;
  }

  .el-comment__avatar {
    width: 36px;
    height: 36px;
  }

  .el-comment__right {
    margin-left: 12px;
  }

  .el-comment__username {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }

  .el-comment__content {
    margin-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: rgba(60, 60, 67, 0.6);
  }

  @media only screen and (max-width: 768px) {
    .el-comment {
      max-width: 375px;
      display: flex;
      padding: 8px 0;
      font-family: Manrope;
    }
  }

</style>
