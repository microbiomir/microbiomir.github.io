<script>
	// Компоненты
	import AppHeader from './components/AppHeader.vue';
	import { RouterView } from 'vue-router'
	import AppFooter from './components/AppFooter.vue';

	// Главная страница
	export default {
		components: {
			AppHeader,
			RouterView,
			AppFooter
		},
		computed: {
			isNotModel() {
				return this.$route.name !== 'model';
			}
		}
	};
</script>

<template>
	<div class="app">
		<app-header v-if="isNotModel"></app-header>

		<router-view></router-view>

		<app-footer v-if="isNotModel"></app-footer>
	</div>
</template>

<style>

</style>