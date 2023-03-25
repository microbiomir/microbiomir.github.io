<template>
	<main class="menu">
		<h1 class="menu__game-title">Microbiomir</h1>
		<router-link to="/game/loading" class="menu__router-link">Старт</router-link>
		<router-link to="/" class="menu__router-link">Выход</router-link>
	</main>
</template>
	
<script>
	export default {
		name: 'GameMenu',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: меню';
				}
			}
		}
	}
</script>
	
<style lang="scss">
	@import '@/scss/menu.scss';
</style>