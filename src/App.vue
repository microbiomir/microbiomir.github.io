<template>
	<div class="container">
		<PageHeader v-if="isShow"/>
		<router-view/>
		<PageFooter v-if="isShow"/>
	</div>
</template>

<script>
	import PageHeader from '@/components/Header.vue';
	import PageFooter from '@/components/Footer.vue';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageFooter
		},
		computed: {
			isShow() {
				return this.$route.name === 'main' || this.$route.name === 'gallery';
			}
		}
	}
</script>

<style lang="scss">
	@import '@/scss/variables';

	* {
		scrollbar-width: thin;
		scrollbar-color: $color-three $color-two;
		font-family: $font;
	}

	*::-webkit-scrollbar {
		height: 12px;
		width: 6px;
	}

	*::-webkit-scrollbar-track {
		background: $color-two;
	}

	*::-webkit-scrollbar-thumb {
		background-color: $color-three;
		border-radius: $radius;
		border: 1px solid $color-two;
	}

	@font-face {
		font-family: 'Roboto';
		src: url('fonts/roboto.ttf');
		font-weight: normal;
		font-style: normal;
	}

	body, a, p, h1, h2, h3, h4, h5, h6 {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
</style>
