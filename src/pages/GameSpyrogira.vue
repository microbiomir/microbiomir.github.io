<template>
	<main class="model">
		<div class="model__model-container">
			
		</div>
		<div class="model__menu-container">

		</div>
	</main>
</template>
	
<script>
	export default {
		name: 'GameSpyrogira',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: 3D модель клетки спирогиры';
				}
			}
		}
	}
</script>
	
<style lang="scss">
	@import '@/scss/model.scss';
</style>