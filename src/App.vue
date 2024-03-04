<template>
	<header class="header">
		<div class="container header__container">
			<span class="header__title">_Вячеслав&nbsp;Воробьев</span>
			<button class="burger__btn" @click="openBurger">
				<component :is="showSvg" />
			</button>
			<div class="header-btn__wrapper">
				<router-link to="/" class="header__link"
					>_hello<span :class="{ active: $route.path === '/' }"></span>
				</router-link>
				<router-link to="/about" class="header__link"
					>_about-me<span :class="{ active: $route.path === '/about' }"></span>
				</router-link>
				<router-link to="/projects" class="header__link"
					>_projects<span
						:class="{ active: $route.path === '/projects' }"
					></span>
				</router-link>
				<!-- <router-link to="/rate" class="header__link"
					>_rate<span :class="{ active: $route.path === '/rate' }"></span>
				</router-link> -->
			</div>
		</div>
	</header>
	<main class="main">
		<Transition
			@before-enter="onBeforeEnter"
			@enter="onEnter"
			@leave="onLeave"
			:css="false"
		>
			<Burger v-if="burgerBtn" />
		</Transition>
		<div>
			<router-view v-slot="{ Component }">
				<component :is="Component" />
			</router-view>
		</div>
	</main>
	<footer class="footer">
		<div class="footer__wrapper">
			<h2 class="footer__title">find me in:</h2>
		</div>
	</footer>
</template>

<script>
import { gsap } from 'gsap/gsap-core'
import { computed, onMounted, provide, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { onBeforeEnter, onEnter, onLeave } from './animation'
import Burger from './components/Burger.vue'
import iconCloseMenu from './components/icons/iconCloseMenu.vue'
import iconMenu from './components/icons/iconMenu.vue'

export default {
	setup() {
		const showSvg = computed(() =>
			burgerBtn.value ? 'iconCloseMenu' : 'iconMenu'
		)
		const burgerBtn = ref(false)
		provide('burgerBtn', burgerBtn)
		const openBurger = () => {
			burgerBtn.value = !burgerBtn.value
			console.log(burgerBtn.value)
		}
		watch(
			onMounted(() => {
				gsap.from('.container', {
					duration: 2,
					y: -50,
					opacity: 0,
					ease: 'power3.out',
				})
			}),

			onMounted(() => {
				gsap.from('.footer__wrapper', {
					duration: 2,
					y: -50,
					opacity: 0,
					ease: 'power3.out',
				})
			})
		)

		return { openBurger, showSvg, burgerBtn, onBeforeEnter, onEnter, onLeave }
	},
	components: {
		iconCloseMenu,
		iconMenu,
		Burger,
	},
}
</script>

<style scoped>
.footer__title {
	color: #607b96;
	font-family: Fira Code;
	font-size: 16px;
	font-style: normal;
	font-weight: 450;
	line-height: normal;
}

.footer__wrapper {
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
