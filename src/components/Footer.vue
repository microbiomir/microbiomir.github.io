<template>
	<header class="footer">
		<h3 class="footer__title-txet">Контакты:</h3>
		<nav class="footer__links-container">
			<a href="https://t.me/krippergo" target="_blank" class="contact-link">
				<img src="@/assets/telegram.png" alt="Иконка Telegram" class="footer__contact-img">
			</a>
			<a href="mailto:microbiomir@gmail.com" target="_blank" class="contact-link last">
				<img src="@/assets/gmail.png" alt="Иконка Gmail" class="footer__contact-img">
			</a>
		</nav>
		<h3 class="footer__title-txet">Список литературы:</h3>
		<nav class="footer__links-container">
			<a href="https://ru.wikipedia.org/" target="_blank" class="main__res-link">
				<img src="@/assets/wikipedia.png" alt="Иконка Wikipedia" class="footer__contact-img">
			</a>
			<a href="https://github.com/" target="_blank">
				<img src="@/assets/github.png" alt="Иконка GitHub" class="footer__contact-img">
			</a>
			<a href="https://www.figma.com/" target="_blank">
				<img src="@/assets/figma.png" alt="Иконка Figma" class="footer__contact-img">
			</a>
			<a href="https://threejs.org/" target="_blank">
				<img src="@/assets/threejs.png" alt="Иконка ThreeJS" class="footer__contact-img">
			</a>
			<a href="https://code.visualstudio.com/" target="_blank">
				<img src="@/assets/vscode.png" alt="Иконка Visual Studio Code" class="footer__contact-img">
			</a>
			<a href="https://www.blender.org/" target="_blank">
				<img src="@/assets/blender.jpg" alt="Иконка Blender" class="footer__contact-img">
			</a>
			<a href="https://www.microsoft.com/ru-ru/microsoft-365/word/" target="_blank">
				<img src="@/assets/word.png" alt="Иконка World" class="footer__contact-img">
			</a>
			<a href="https://git-scm.com" target="_blank">
				<img src="@/assets/git.png" alt="Иконка Git" class="footer__contact-img">
			</a>
		</nav>
	</header>
</template>
<script>
	export default {
		name: 'PageFooter'
	}
</script>

<style lang="scss">
	@import '@/scss/footer.scss';
</style>