<template>
  <button :class="`el-button ${ghost ? 'el-button--ghost' : ''}`" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
	export default {
		name: 'ElButton',
		props: {
			onClick: {
				type: Function,
				required: false
			},
			ghost: {
				type: Boolean,
				required: false
			}
		}
	}
</script>

<style lang="css" scoped>

  .el-button {
    background: #FF008A;
    border: 1px solid #FF008A;
    color: white;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 14px;
    width: 325px;
    outline: none;
    cursor: pointer;
    font-family: Manrope;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    text-align: center;
    transition: .2s;
  }

  .el-button:hover {
    background: #db0074;
  }

  .el-button--ghost {
    color: #FF008A;
    background: white;
  }

  .el-button--ghost:hover {
    color: #FF008A;
    background: #f8f8f8;
  }

</style>
