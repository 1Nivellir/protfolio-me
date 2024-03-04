<template>
	<div class="header__burger burger">
		<div class="burger__wrapper">
			<router-link to="/" class="burger__link" @click.prevent="toggleBtn"
				>_hello<span :class="{ active: $route.path === '/' }"></span>
			</router-link>
			<router-link to="/about/" class="burger__link" @click.prevent="toggleBtn"
				>_about-me<span :class="{ active: $route.path === '/about' }"></span>
			</router-link>
			<router-link
				to="/projects"
				class="burger__link"
				@click.prevent="toggleBtn"
				>_projects<span :class="{ active: $route.path === '/projects' }"></span>
			</router-link>
		</div>
	</div>
</template>

<script lang="js">
import { inject } from 'vue';


export default {
	setup () {
		const burgerBtn = inject('burgerBtn');
		const toggleBtn = () => {
			burgerBtn.value = !burgerBtn.value
		}
		return {toggleBtn}
	}
}
</script>

<style scoped></style>
