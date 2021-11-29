<template>
  <div>
    <div class="el-wrapper">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'

export default {
	name: 'Default',
	components: {
		Footer
	}
}
</script>

<style>
  @font-face {
    font-family: "Inter";
    src: local("Inter"),
    url(~assets/fonts/Inter.ttf) format("truetype");
  }

  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
    url(~assets/fonts/Manrope.ttf) format("truetype");
  }

  .el-ml20 {
    margin-left: 20px;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    display: contents;
  }

  .el-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1150px;
    margin: 0 auto 100px auto;
    padding: 0 90px;
    box-sizing: border-box;
    min-height: calc(100vh - 207px);
  }

  @media only screen and (max-width: 768px) {
    .el-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 auto;
      padding: 0 16px;
      box-sizing: border-box;
      margin-bottom: 100px;
    }
  }

</style>
