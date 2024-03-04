<template>
	<div class="main__wrapper">
		<div class="green__wrapper"></div>
		<div class="blue__wrapper"></div>
		<div class="main__content">
			<FormSubmit />
			<span class="main__span">Hi all. I am</span>
			<h1 class="main__title">Вячеслав Воробьев</h1>
			<span class="main__descr">> Front-end developer</span>
			<span class="main__subdescr"
				>// вы можете посмотреть на мою страницу GitHub</span
			>
			<div class="span__wrapper">
				<span class="span__const">const</span
				><span class="span__descr"> githubLink</span
				><span class="span__rav"> = </span
				><a
					class="gh__link"
					href="https://github.com/1Nivellir/"
					target="_blank"
					>“https://https://github.com/1Nivellir”</a
				>
			</div>
		</div>
		<div class="snippets-wrapper__list">
			<ul class="snippets-main__list">
				<li class="snippets-main__item-1"></li>
				<li class="snippets-main__item-2"></li>
				<li class="snippets-main__item-3"></li>
				<li class="snippets-main__item-4"></li>
				<li class="snippets-main__item-5"></li>
			</ul>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap/gsap-core'
import { onMounted, watch } from 'vue'
import FormSubmit from './Form-submit.vue'

export default {
	components: { FormSubmit },
	setup() {
		watch(
			onMounted(() => {
				gsap.from('.snippets-main__list', {
					duration: 3,
					y: -250,
					opacity: 0,
					ease: 'power3.out',
				})
			}),
			onMounted(() => {
				gsap.from('.main__content', {
					duration: 3,
					x: -150,
					y: -150,
					opacity: 0,
					ease: 'power3.out',
				})
			})
		)
	},
}
</script>

<style></style>
