<template>
  <div v-if="post" class="el-post-page">
    <page-header>
      <template slot="right">
        <nuxt-link :to="{path: `/`}">
          <el-link>
            <template slot="icon">
              <el-icon name="posts" />
            </template>
            Посты
          </el-link>
        </nuxt-link>
      </template>
    </page-header>

    <div class="el-post-page__image">
      <img class="el-post-page__image--desktop" src="../../assets/Saly-16.png">
      <img class="el-post-page__image--mobile" src="../../assets/Saly-16_mobile.png">
    </div>

    <div class="el-post-page__title">
      {{ post.title }}
    </div>

    <div class="el-post-page__description">
      <pre v-if="!isEdit" v-html="content" />
      <textarea v-else v-model="content" :disabled="!isEdit" class="el-post-page__description-textarea" />
    </div>

    <div class="el-post-page__controls">
      <el-link v-if="!isEdit" :on-click="editPost">
        <template slot="icon">
          <el-icon name="pen" />
        </template>
        Редактировать текст
      </el-link>

      <div v-if="isEdit" class="el-post-page__buttons">
        <el-button :on-click="savePost">
          Сохранить изменения
        </el-button>
        <el-button :on-click="cancelPost" class="el-ml20" ghost>
          Отменить
        </el-button>
      </div>
    </div>

    <div v-if="comments.length > 0">
      <h1>Комментарии</h1>
      <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Comment from '~/components/Comment'
import ElButton from '~/components/ElButton'
import ElLink from '~/components/ElLink'
import ElIcon from '~/components/ElIcon'
import PageHeader from '~/components/PageHeader'

export default {
	name: 'Post',
	components: {
		PageHeader,
		ElIcon,
		ElLink,
		ElButton,
		Comment
	},
	data() {
		return {
			isEdit: false,
			initBody: ''
		}
	},
	async fetch({store, route}) {
		await store.dispatch('posts/getOne', route.params.id)
		await store.dispatch('comments/getAll', {id: route.params.id})
	},
	computed: {
		...mapGetters({
			post: 'posts/item',
			comments: 'comments/items'
		}),
		content: {
			get() {
				return this.$store.getters['posts/item'].body || ''
			},
			set(val) {
				this.$store.dispatch('posts/updateItem', {body: val})
			}
		}
	},
	mounted() {
		this.isEdit = this.$route.query.isEdit
		this.initBody = this.$store.getters['posts/item'].body
	},
	methods: {
		editPost() {
			this.isEdit = true
		},
		savePost() {
			this.isEdit = false
			this.$store.dispatch('posts/updateItem', {body: this.content})
			this.$store.dispatch('posts/savePost')
			this.initBody = this.content
		},
		cancelPost() {
			this.$store.dispatch('posts/updateItem', {body: this.initBody})
			this.isEdit = false
		}
	}
}
</script>

<style scoped>

  .el-post-page {
    font-family: Manrope;
  }

  .el-post-page__image {
    background: #9897F4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 285px;
  }

  .el-post-page__image--mobile {
    display: none;
  }

  .el-post-page__buttons {
    display: flex;
    flex-wrap: wrap;
  }

  .el-post-page__title {
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 46px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    border-bottom: 1px solid #D1D1D6;
    padding: 25px 0;
  }

  .el-post-page__description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    width: 100%;
    border-radius: 8px;
    outline: none;
    box-sizing: border-box;
    resize: vertical;
    margin-top: 30px;
  }

  .el-post-page__description pre {
    white-space: break-spaces;
  }

  .el-post-page__description textarea {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #D1D1D6;
    box-sizing: border-box;
    resize: vertical;
  }

  .el-post-page__controls {
    margin-top: 30px;
    display: flex
  }

  .el-post-page__image img {
    height: 100%;
    width: 100%;
    object-fit: none;
  }

  .el-post-page__description-textarea {
    height: 300px;
  }

  .el-post-page__description-textarea:disabled {
    padding: 0;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    .el-post-page__image--desktop {
      display: none;
    }

    .el-post-page__buttons {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .el-post-page__buttons .el-button {
      margin-bottom: 10px;
      margin-left: 0;
      width: 100%;
    }

    .el-post-page__image--mobile {
      display: block;
    }

    .el-post-page__image img {
      object-fit: cover;
    }
  }

</style>
