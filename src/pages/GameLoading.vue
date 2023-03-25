<template>
	<main class="loading">
		<video src="@/assets/video1.mp4" class="loading__video" autoplay muted></video>
		<router-link to="/game/select" id="next-page-router"></router-link>
	</main>
</template>
	
<script>
	export default {
		name: 'GameLoading',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: загрузка';
				}
			}
		},
		mounted() {
			let linkNextPage = document.querySelector(`#next-page-router`);

			setTimeout(function () {
				linkNextPage.click();
			}, 18000);
		}
	}
</script>
	
<style lang="scss">
	@import '@/scss/loading.scss';
</style>