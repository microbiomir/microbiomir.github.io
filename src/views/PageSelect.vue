<script>
	export default {
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: выбор 3D-модели';
				}
			}
		},
		methods: {
			goToModel(name) {
				this.$router.push({
                    name: 'model', 
                    params: {
                        name: name
                    }
                });
			}
		}
	}
</script>

<template>
	<main class="select-container">
		<div class="cards-container">
			<div class="select-card">
				<img src="@/assets/images/model-spirogira.jpg" alt="Фотография 3D-модели клетки спирогиры" class="card-img">
				<div class="card-description">
					<p class="card-text">Клетка спирогиры</p>
					<div class="card-buttons">
						<button class="card-button" @click="goToModel('spirogira-s')">
							Упрощённая модель (48 мб)
						</button>
						<button class="card-button" @click="goToModel('spirogira-u')">
							Обычная модель (162 мб)
						</button>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style>

</style>