import { createRouter, createWebHistory } from 'vue-router'

import PageMain from './views/PageMain.vue';
import PageGallery from './views/PageGallery.vue';
import PageSelect from './views/PageSelect.vue';
import PageModel from './views/PageModel.vue';

export default createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'main',
			component: PageMain,
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: PageGallery
		},
		{
			path: '/select-model',
			name: 'select',
			component: PageSelect
		},
		{
			path: '/model/:name',
			name: 'model',
			component: PageModel
		}
	]
})