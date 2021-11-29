<template>
  <header class="el-header">

    <div class="el-header__logo">
      Logo
    </div>

    <div class="el-header__right">
      <slot name="right">
      </slot>
    </div>

  </header>
</template>

<script>
	export default {
		name: 'PageHeader',
		data () {
			return {
				search: ''
			}
		}
	}
</script>

<style scoped>
  .el-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-header__logo {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }

  @media only screen and (max-width: 768px) {
    .el-header__logo {
      display: none;
    }

    .el-header__right {
      width: 100%;
    }
  }
</style>
