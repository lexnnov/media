<template>
  <div class="el-post">

    <nuxt-link :key="post.id" :to="{path: `post/${post.id}`}">
      <div class="el-post__image">
        <img class="el-post__image--desktop" src="../assets/Saly-9.png">
        <img class="el-post__image--mobile" src="../assets/Saly-9_mobile.png">
      </div>

      <div class="el-post__content">

        <div class="el-post__title">
          {{post.title}}
        </div>

        <div class="el-post__description">
          {{post.body}}
        </div>

        <div class="el-post__footer">

          <div class="el-post__footer-comments">
            <el-icon name="comment"></el-icon>

            <div class="el-post__footer-comments__counter" >
              {{post.comments.length}}
            </div>
          </div>

          <nuxt-link :key="post.id" :to="{path: `post/${post.id}`, query: {isEdit: true }}">
            <div class="el-post__edit">
              <el-icon  name="pen"></el-icon>
            </div>
          </nuxt-link>

        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
	import ElIcon from '~/components/ElIcon'
	export default {
		name: 'Post',
		components: { ElIcon },
		props: ['post'],
		computed: {}
	}
</script>

<style>

  .el-post {
    display: block;
    float: left;
    flex-direction: column;
    width: 310px;
    height: 430px;
    border: 1px solid #E2E2E2;
    border-radius: 20px;
    padding: 16px;
    box-sizing: border-box;
    position: relative;
    font-family: Manrope;
  }

  .el-post__image img {
    height: 100%;
    width: 100%;
  }

  .el-post__image--mobile {
    display: none;
  }

  .el-post__title {
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: bold;
  }

  .el-post__edit {
    margin-left: 35px
  }

  .el-post__edit:hover svg path{
    fill: #FF008A;
  }

  .el-post__description {
    margin-top: 10px;
    font-size: 17px;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: rgba(60, 60, 67, 0.6);
  }

  .el-post__footer {
    margin-top: 15px;
    position: absolute;
    bottom: 10px;
    display: flex;
  }

  .el-post__footer-comments {
    display: flex;
    align-items: center;
  }

  .el-post__footer-comments__counter {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 12px;
    color: rgba(60, 60, 67, 0.6);
  }

  @media only screen and (max-width: 768px) {
    .el-post {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      border: none;
      height: 235px;
      border-bottom: 2px solid #E2E2E2;
      width: 100%;
      padding: 16px 0;
      border-radius: 0;
    }

    .el-post__image img {
      object-fit: none;
    }

    .el-post__image--desktop {
      display: none;
    }

    .el-post__image--mobile {
      display: block;
    }

    .el-post__content {
      width: 50%;
      position: relative;
    }

    .el-post__description {
      -webkit-line-clamp: 3;
    }

    .el-post__footer {
      position: absolute;
      bottom: 0;
    }
  }

</style>
