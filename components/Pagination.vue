<template>
  <div class="el-pagination">

      <div @click="prevPage" class="el-pagination__item">
        <el-icon name="arrow"></el-icon>
      </div>

      <div
        :class="`el-pagination__item ${current == page ? 'el-pagination__item--active' : ''}`"
        :key="page"
        @click="pageClick(page)"
        v-for="page in pages"
      >
        {{page}}
      </div>

      <div @click="nextPage" class="el-pagination__item el-pagination__item--right">
        <el-icon name="arrow"></el-icon>
      </div>

  </div>
</template>

<script>
	import ElIcon from '~/components/ElIcon'
	export default {
		name: 'Pagination',
		components: { ElIcon },
		props: ['pages', 'current', 'pageClick'],
		methods: {
			prevPage () {
				if (this.current <= 1) {
					return
				}
				this.pageClick(this.current - 1)
			},
			nextPage () {
				if (this.current >= this.pages) {
					return
				}
				this.pageClick(this.current + 1)
			}
		}
	}
</script>

<style scoped>
  .el-pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }

  .el-pagination__item {
    display: flex;
    width: 32px;
    height: 32px;
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 3px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .5s;
  }

  .el-pagination__item--right {
    transform: rotate(180deg);
  }

  .el-pagination__item--active {
    color: #FF008A;
    border: 1px solid #FF008A;
  }

</style>
