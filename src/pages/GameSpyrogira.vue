<template>
	<main class="model">
		<div class="model__model-container">
			<img src="@/assets/arrow.png" alt="меню" class="model__open-menu-button" @click="openModelMenu()">
			<iframe src="https://microbiomir.github.io/3d-models/spyrogira.html" class="model__canvas-container">
				К сожалению в этом браузере мы не можем загрузить 3D модель
			</iframe>
		</div>
		<div class="model__menu-container" :class="{'model__transformed-menu': menuIsOpened}">
			<div class="model__close-menu-button" @click="openModelMenu()"><p>Cкрыть</p><router-link to="/"><p>Главное меню</p></router-link></div>
			<div class="model__menu-content-container main__description-container">
				<h3>Спирогира</h3>
				<p>
					Спирогира - род нитчатых харофитовых водорослей из семейства зигнемовых. Тело спирогиры - неветвящаяся нить, свободноплавающая или прикрепленная к субстрату ризоидами, состоящая из одного ряда цилиндрических клеток. Оболочкой каждой клетки является целлюлозная клеточная стенка, покрытая снаружи слизью. Большую часть клетки занимает вакуоль с клеточным соком. На цитоплазматических тяжах, проходящих через вакуоль, подвешено одно ядро. Оно крупное и округлое. В каждой клетке имеется по одному и более спирально закрученных хлоропластов, напоминающих ленты, расположенные в пристеночном слое цитоплазмы. Вследствие большой величины клеток спирогиры, достигающей у некоторых её видов 0,01 мм, а также вследствие простоты их строения, эта водоросль является одной из наиболее изученных и служит классическим объектом при изучении анатомии клетки водоросли.
				</p>
				<h4>Фотографии</h4>
				<div class="gallery__images-container">
					<div class="gallery__img-container" v-for="(item, index) in imagesSpirogira" :key="index">
						<img :src="require('@/assets/' + (index + 4) + '.jpg')" :alt="item.imageAlt" class="gallery__elem-gallery">
						<p class="gallery__text-on-img">{{ item.imageText }}</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'GameSpyrogira',
		mounted() {
			alert(`На данный момент мельница используется в качестве прототипа, позже вместо мельницы будет клетка спирогиры`)
		},
		data() {
			return {
				menuIsOpened: false,
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
			}
		},
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: 3D модель клетки спирогиры';
				}
			}
		},
		methods: {
			openModelMenu() {
				this.menuIsOpened = !this.menuIsOpened;
			}
		}
	}
</script>
	
<style lang="scss">
	@import '@/scss/model.scss';
</style>