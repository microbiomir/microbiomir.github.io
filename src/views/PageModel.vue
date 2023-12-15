<script>
	export default {
		data() {
			return {
				menuIsOpened: false
			}
		},
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Microbiomir: 3D-модель';
				}
			}
		},
		methods: {
			openMenu() {
				this.menuIsOpened = !this.menuIsOpened;
			}
		}
	}
</script>

<template>
	<main class="model-container">
		<img src="@/assets/images/arrow.png" alt="меню" class="menu-button" @click="openMenu()">
		<iframe :src="'https://microbiomir.github.io/3d-models/' + $route.params.name + '.html'" class="model-canvas">
			К сожалению в этом браузере мы не можем загрузить 3D-модель
		</iframe>
		<div :class="{'menu-container': true, 'transformed-menu': menuIsOpened}">
			<header class="menu-header">
				<p class="close-button" @click="openMenu()">Cкрыть</p>
				<p>
					<router-link to="/">Главная страница</router-link>
				</p>
			</header>
			<div class="description-container">
				<h3>Спирогира</h3>
				<p>
					Спирогира - род нитчатых харофитовых водорослей из семейства зигнемовых. Тело спирогиры - неветвящаяся нить, свободноплавающая или прикрепленная к субстрату ризоидами, состоящая из одного ряда цилиндрических клеток. Оболочкой каждой клетки является целлюлозная клеточная стенка, покрытая снаружи слизью. Большую часть клетки занимает вакуоль с клеточным соком. На цитоплазматических тяжах, проходящих через вакуоль, подвешено одно ядро. Оно крупное и округлое. В каждой клетке имеется по одному и более спирально закрученных хлоропластов, напоминающих ленты, расположенные в пристеночном слое цитоплазмы. Вследствие большой величины клеток спирогиры, достигающей у некоторых её видов 0,01 мм, а также вследствие простоты их строения, эта водоросль является одной из наиболее изученных и служит классическим объектом при изучении анатомии клетки водоросли.
				</p>
				<h4>Фотографии</h4>
				<div class="images-container">
					<div class="img-container" @click="openImage('spirogira1')">
						<img src="@/assets/images/spirogira1.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira2')">
						<img src="@/assets/images/spirogira2.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira3')">
						<img src="@/assets/images/spirogira3.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira4')">
						<img src="@/assets/images/spirogira4.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira5')">
						<img src="@/assets/images/spirogira5.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira6')">
						<img src="@/assets/images/spirogira6.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira7')">
						<img src="@/assets/images/spirogira7.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira8')">
						<img src="@/assets/images/spirogira8.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira9')">
						<img src="@/assets/images/spirogira9.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira10')">
						<img src="@/assets/images/spirogira10.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira11')">
						<img src="@/assets/images/spirogira11.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira12')">
						<img src="@/assets/images/spirogira12.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira13')">
						<img src="@/assets/images/spirogira13.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira14')">
						<img src="@/assets/images/spirogira14.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira15')">
						<img src="@/assets/images/spirogira15.jpg" alt="Фотография спирогиры">
						<p>Спирогира</p>
					</div>
					<div class="img-container" @click="openImage('spirogira16')">
						<img src="@/assets/images/spirogira16.jpg" alt="Фотография разрушенной клетки спирогиры">
						<p>Разрушенная клетка</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
	
<style>

</style>