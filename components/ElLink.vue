<template>
  <div class="el-link" @click="onClick">
    <div class="el-link__icon">
      <slot name="icon" />
    </div>

    <div class="el-link__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
	name: 'ElLink',
	props: {
		onClick: {
			type: Function,
			required: false,
			default: () => {
				return false
			}
		}
	}
}
</script>

<style>
  .el-link {
    display: flex;
    color: #db0074;
    cursor: pointer;
    align-items: center;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .el-link:hover {
    color: #cb006d;
  }

  .el-link__icon svg path {
    fill: #db0074;
  }

  .el-link__content {
    margin-left: 15px;
  }

</style>
