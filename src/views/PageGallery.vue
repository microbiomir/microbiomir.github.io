<script>
	export default {
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
				openedImage: '',
				imageIsOpen: false
			};
		},
		methods: {
			openImage(imageName) {
				this.openedImage = './src/assets/images/' + imageName + '.jpg';
				this.imageIsOpen = true;
			},
			closeImage() {
				this.openedImage = 'work1';
				this.imageIsOpen = false;
			}
		}
	}
</script>

<template>
	<main class="gallery-container">
		<div class="content-container">
			<h3>Фотографии подготовки к работе</h3>
			<div class="images-container">
				<div class="img-container" @click="openImage('work1')">
					<img src="@/assets/images/work1.jpg" alt="Фотография подготовки пробы">
					<p>Подготовка пробы</p>
				</div>
				<div class="img-container" @click="openImage('work2')">
					<img src="@/assets/images/work2.jpg" alt="Фотография подготовки пробы">
					<p>Подготовка пробы</p>
				</div>
				<div class="img-container" @click="openImage('work3')">
					<img src="@/assets/images/work3.jpg" alt="Фотография подготовки пробы">
					<p>Подготовка пробы</p>
				</div>
				<div class="img-container" @click="openImage('work4')">
					<img src="@/assets/images/work4.jpg" alt="Фотография настройки микроскопа">
					<p>Настройка микроскопа</p>
				</div>
				<div class="img-container" @click="openImage('work5')">
					<img src="@/assets/images/work5.jpg" alt="Фотография микроскопа">
					<p>Микроскоп</p>
				</div>
			</div>
			<h3>Фотографии микромира</h3>
			<h4>Инфузория-туфелька</h4>
			<div class="images-container">
				<div class="img-container" @click="openImage('infusoria1')">
					<img src="@/assets/images/infusoria1.jpg" alt="Фотография инфузории-туфельки">
					<p>Инфузория-туфелька</p>
				</div>
				<div class="img-container" @click="openImage('infusoria2')">
					<img src="@/assets/images/infusoria2.jpg" alt="Фотография инфузории-туфельки">
					<p>Инфузория-туфелька</p>
				</div>
				<div class="img-container" @click="openImage('infusoria3')">
					<img src="@/assets/images/infusoria3.jpg" alt="Фотография инфузории-туфельки">
					<p>Инфузория-туфелька</p>
				</div>
			</div>
			<h4>Дафния</h4>
			<div class="images-container">
				<div class="img-container" @click="openImage('daphnia1')">
					<img src="@/assets/images/daphnia1.jpg" alt="Фотография дафнии">
					<p>Дафния</p>
				</div>
				<div class="img-container" @click="openImage('daphnia2')">
					<img src="@/assets/images/daphnia2.jpg" alt="Фотография дафнии">
					<p>Дафния</p>
				</div>
				<div class="img-container" @click="openImage('daphnia3')">
					<img src="@/assets/images/daphnia3.jpg" alt="Фотография дафнии">
					<p>Дафния</p>
				</div>
			</div>
			<h4>Спирогира</h4>
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
			<h4>Диатомовые водоросли</h4>
			<div class="images-container">
				<div class="img-container" @click="openImage('diatoma1')">
					<img src="@/assets/images/diatoma1.jpg" alt="Фотография диатомовой водоросли">
					<p>Диатомовая водоросль</p>
				</div>
				<div class="img-container" @click="openImage('diatoma2')">
					<img src="@/assets/images/diatoma2.jpg" alt="Фотография диатомовой водоросли">
					<p>Диатомовая водоросль</p>
				</div>
			</div>
			<div :class="{'opened-image-container': imageIsOpen, 'd-none': !imageIsOpen}">
				<img src="@/assets/images/close.png" class="close-button" @click="closeImage()">
				<img :src="openedImage" alt="Картинка" class="opened-image">
			</div>
		</div>
	</main>
</template>
	
<style>

</style>