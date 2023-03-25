<template>
	<header class="header">
		<div class="header__main-header">
			<router-link to="/">
				<h1 class="header__site-title">Microbiomir</h1>
			</router-link>
		</div>
		<div class="header__sub-header" :class="{'padding-bottom-null': !bgIsClose}">
			<div class="header__bg-icon-container">
				<div class="header__bg-icon" @click="openBg()">
					<div class="header__bg-line"></div>
					<div class="header__bg-line"></div>
					<div class="header__bg-line"></div>
				</div>
			</div>
			<div class="header__links-container" :class="{'d-none': bgIsClose}">
				<div class="header__left-links">
					<router-link to="/" class="header__button-container">
						<div class="header__link-container" :class="{'link-active': getActiveStateMain}">Главная</div>
					</router-link>
					<router-link to="/gallery" class="header__button-container">
						<div class="header__link-container" :class="{'link-active': getActiveStateGallery}">Галерея</div>
					</router-link>
				</div>
				<router-link to="/game/menu" class="header__button-container">
					<div class="header__button-start">3D-модели</div>
				</router-link>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'PageHeader',
		data() {
			return {
				bgIsClose: false
			};
		},
		computed: {
			getActiveStateMain() {
				return this.$route.name === 'main';
			},
			getActiveStateGallery() {
				return this.$route.name === 'gallery';
			}
		},
		methods: {
			openBg() {
				this.bgIsClose = !this.bgIsClose;
			}
		}
	}
</script>

<style lang="scss">
	@import '@/scss/header.scss';
</style>