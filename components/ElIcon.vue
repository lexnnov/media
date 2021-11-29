<template>
  <div v-html="src" />
</template>

<script>
export default {
	name: 'ElIcon',
	props: {
		name: {
			type: String,
			required: true
		}
	},
	computed: {
		src() {
			const src = require(`assets/svg/${this.name}.svg?raw`)
			return src
		}
	}
}
</script>

<style>
  svg {
    display: block;
  }
</style>
