<template>
	<main class="gallery">
		<div class="gallery__content-container">
			<div class="gallery__elements-container">
				<h2 class="gallery__description-gallery">Фотографии работы над проектом</h2>
				<div class="gallery__images-container">
					<div class="gallery__img-container" v-for="(item, index) in imagesWork" :key="index" @click="openImage('work', index + 1)">
						<img :src="require('@/assets/work' + (index + 1) + '.jpg')" :alt="item.imageAlt" class="gallery__elem-gallery">
						<p class="gallery__text-on-img">{{ item.imageText }}</p>
					</div>
				</div>
				<h2 class="gallery__description-gallery">Фотографии</h2>
				<div class="gallery__images-container">
					<div class="gallery__img-container" v-for="(item, index) in imagesInfuzoria" :key="index" @click="openImage('', index + 1)">
						<img :src="require('@/assets/' + (index + 1) + '.jpg')" :alt="item.imageAlt" class="gallery__elem-gallery">
						<p class="gallery__text-on-img">{{ item.imageText }}</p>
					</div>
					<div class="gallery__img-container" v-for="(item, index) in imagesSpirogira" :key="index" @click="openImage('', index + 4)">
						<img :src="require('@/assets/' + (index + 4) + '.jpg')" :alt="item.imageAlt" class="gallery__elem-gallery">
						<p class="gallery__text-on-img">{{ item.imageText }}</p>
					</div>
				</div>
				<h2 class="gallery__description-gallery">Видео</h2>
				<div class="gallery__images-container">
					<div class="gallery__img-container" @click="openVideo('video', 1)">
						<video src="@/assets/video1.mp4" class="gallery__elem-gallery" autoplay muted loop></video>
						<p class="gallery__text-on-img">Видео загрузки</p>
					</div>
				</div>
				<div class="gallery__images-open-container" :class="{'d-none': closedImgContainer}" @click="closeAll()">
					<img src="@/assets/x.png" class="gallery__x">
					<img :src="require('@/assets/' + openedImgUrl + '.jpg')" alt="Картинка" class="gallery__open-img" :class="{'d-none': imgCloseNow}">
					<video :src="require('@/assets/' + openedVideoUrl + '.mp4')" class="gallery__open-video" :class="{'d-none': videoCloseNow}" controls></video>
				</div>
			</div>
		</div>
	</main>
</template>
	
<script>
	export default {
		name: 'GalleryPage',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: галерея';
				}
			}
		},
		data() {
			return {
				openedImgUrl: `1`,
				openedVideoUrl: `video1`,
				videoCloseNow: true,
				closedImgContainer: true,
				imgCloseNow: true,
				imagesWork: [
					{
						imageAlt: `Фотография подготовки пробы`,
						imageText: `Подготовка пробы`
					},
					{
						imageAlt: `Фотография подготовки пробы`,
						imageText: `Подготовка пробы`
					},
					{
						imageAlt: `Фотография подготовки пробы`,
						imageText: `Подготовка пробы`
					},
					{
						imageAlt: `Фотография подготовки пробы`,
						imageText: `Подготовка пробы`
					},
					{
						imageAlt: `Фотография микроскопа`,
						imageText: `Микроскоп`
					}
				],
				imagesInfuzoria: [
					{
						imageAlt: `Фотография инфузории туфельки`,
						imageText: `Инфузория туфелька`
					},
					{
						imageAlt: `Фотография инфузории туфельки`,
						imageText: `Инфузория туфелька`
					},
					{
						imageAlt: `Фотография инфузории туфельки`,
						imageText: `Инфузория туфелька`
					}
				],
				imagesSpirogira: [
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					},
					{
						imageAlt: `Фотография спирогиры`,
						imageText: `Спирогира`
					}
				]
			};
		},
		methods: {
			openImage(text, imgIndex) {
				this.openedImgUrl = text + imgIndex;
				this.imgCloseNow = false;

				this.closedImgContainer = false;
			},
			closeAll() {
				this.openedImgUrl = `1`;
				this.openedVideoUrl = `video1`;

				this.imgCloseNow = true;
				this.videoCloseNow = true;

				this.closedImgContainer = true;
			},
			openVideo(text, imgIndex) {
				this.openedVideoUrl = text + imgIndex;
				this.videoCloseNow = false;

				this.closedImgContainer = false;
			}
		}
	}
</script>
	
<style lang="scss">
	@import '@/scss/gallery.scss';
</style>