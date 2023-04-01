import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from '@/App.vue';
import MainPage from '@/pages/MainPage.vue';
import GalleryPage from '@/pages/GalleryPage.vue';
import GameLoading from '@/pages/GameLoading.vue';
import GameSelect from '@/pages/GameSelect.vue';
import GameSpyrogira from '@/pages/GameSpyrogira.vue';

const routes = [
	{
		path: '/',
		name: 'main',
		component: MainPage
	},
	{
		path: '/gallery',
		name: 'gallery',
		component: GalleryPage
	},
	{
		path: '/game/loading',
		name: 'gameLoading',
		component: GameLoading
	},
	{
		path: '/game/select',
		name: 'gameSelect',
		component: GameSelect
	},
	{
		path: '/game/spyrogira',
		name: 'GameSpyrogira',
		component: GameSpyrogira
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/'
	}
];

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(),
	routes
});

app.use(router).mount('#app');