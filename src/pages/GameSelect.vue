<template>
	<main class="select">
		<router-link to="/game/spyrogira">
			<div class="select__card">
				<img src="@/assets/spyrogira.png" alt="" class="select__card-img">
				<p class="select__card-text">Клетка спирогиры</p>
			</div>
		</router-link>
	</main>
</template>
	
<script>
	export default {
		name: 'GameSelect',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: выбор';
				}
			}
		}
	}
</script>
	
<style lang="scss">
	@import '@/scss/select.scss';
</style>