<script>

</script>

<template>
	<header class="header-container">
        <div class="row row-container col">
            <h1 class="title">
                <router-link to="/">Microbiomir</router-link>
            </h1>
            <nav class="links-list">
                <router-link class="form-link link" :class="{'active': $route.name == 'main'}" to="/">Главная</router-link>
                <router-link class="form-link link" :class="{'active': $route.name == 'gallery'}" to="/gallery">Галерея</router-link>
            </nav>
            <div class="button-container link-container">
                <router-link class="button" to="/select-model">3D-модели</router-link>
            </div>
        </div>
    </header>
</template>

<style>

</style>