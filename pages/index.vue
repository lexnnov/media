<template>
  <div class="el-page">

    <page-header>
      <template slot="right">

        <div class="el-page__search">
          <input class="el-page__search-input" placeholder="Поиск" v-model="search"/>
          <el-icon class="el-page__search-icon" name="search"></el-icon>
        </div>

      </template>
    </page-header>

    <div class="el-page__posts" v-if="isPosts">
      <post :key="post.id" :post="post" style="margin-bottom: 30px" v-for="post in posts"></post>
    </div>

    <div v-else>
      По вашему запросу ничего не найдено
    </div>

    <div class="el-page__pagination" v-if="totalCount > 0">
      <pagination :current="currentPage" :pageClick="pageChange" :pages="pagesCount"></pagination>
    </div>
  </div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import Post from '~/components/Post'
	import Pagination from '~/components/Pagination'
	import ElIcon from '~/components/ElIcon'
	import PageHeader from '~/components/PageHeader'

	export default {
		components: {
			PageHeader,
			ElIcon,
			Pagination,
			Post
		},
		computed: {
			...mapGetters({
				posts: 'posts/items',
				totalCount: 'posts/totalCount',
				currentPage: 'posts/page'
			}),
			search: {
				get () {
					return this.$store.getters['posts/search']
				},
				set (val) {
					this.$store.dispatch('posts/updateSearch', val)
				}
			},
			isPosts () {
				return this.posts.length > 0
			},
			pagesCount () {
				return Math.ceil(this.totalCount / 10)
			}
		},
		methods: {
			...mapActions({
				setPage: 'posts/setPage'
			}),
			pageChange (page) {
				this.setPage(page)
			}
		},
		mounted () {
			this.$store.dispatch('posts/getAll')
		}
	}
</script>

<style>
  .el-page {
    max-width: 100%;
    font-family: Manrope;
  }

  .el-page__search {
    position: relative;
    display: flex;
    align-items: center;
  }

  .el-page__search-input {
    background: rgba(60, 60, 67, 0.1);
    border-radius: 10px;
    height: 50px;
    outline: none;
    border: none;
    width: 310px;
    box-sizing: border-box;
    padding: 0 40px;
  }

  .el-page__posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px
  }

  .el-page__search-icon {
    position: absolute;
    left: 10px;
  }

  .el-page__pagination {
    float: right;
    margin-top: 30px;
  }

  @media only screen and (max-width: 768px) {
    .el-page {
      max-width: 100%;
    }

    .el-page__search-input {
      width: 100%;
      height: 36px;
    }

    .el-page__pagination {
      float: none;
      display: flex;
      justify-content: center;
    }

    .el-page__search {
      width: 100%;
    }
  }
</style>
