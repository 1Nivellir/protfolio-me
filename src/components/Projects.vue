<template>
	<div class="projects">
		<aside class="projects__aside">
			<ul class="projects-aside__list list">
				<li class="projects-aside__item item">
					<input
						type="checkbox"
						name="option1"
						value="value1"
						id="allView"
						class="item__input"
						v-model="allView"
					/>
					<label class="item__label" for="allView">Показать всё</label>
				</li>
				<li class="projects-aside__item item">
					<input
						type="checkbox"
						name="option1"
						value="value1"
						id="htmlPage"
						class="item__input"
						v-model="htmlPage"
					/>
					<label class="item__label" for="htmlPage">
						<span class="item__logo logo-html"></span>
						HTML
					</label>
				</li>
				<li class="projects-aside__item">
					<input
						type="checkbox"
						name="option1"
						value="value1"
						id="bootstrap"
						class="item__input"
						v-model="bootstrap"
					/>
					<label class="item__label" for="bootstrap">
						<span class="item__logo logo-css"></span>
						Bootstrap
					</label>
				</li>
				<li class="projects-aside__item">
					<input
						type="checkbox"
						name="option1"
						value="value1"
						id="vueApp"
						class="item__input"
						v-model="vueApp"
					/>
					<label class="item__label" for="vueApp">
						<span class="item__logo logo-vue"></span>
						Vue.js
					</label>
				</li>
				<li class="projects-aside__item">
					<input
						type="checkbox"
						name="option1"
						value="value1"
						id="typeScript"
						class="item__input"
						v-model="typeScript"
					/>
					<label class="item__label" for="typeScript">
						<span class="item__logo logo-typescript"></span>
						TypeScript
					</label>
				</li>
				<li class="projects-aside__item">
					<input
						type="checkbox"
						name="option1"
						value="value1"
						id="nuxt"
						class="item__input"
						v-model="nuxt"
					/>
					<label class="item__label" for="nuxt">
						<span class="item__logo logo-nuxt"></span>
						Nuxt 3
					</label>
				</li>
				<li class="projects-aside__item"></li>
			</ul>
		</aside>
		<nav class="projects__nav">
			<h3 class="projects__burger-title" @click="burgerPrj = !burgerPrj">
				<span class="title__arrow" :class="{ rotate__arrow: burgerPrj }"></span>
				_projects
			</h3>
			<Transition
				@before-enter="onBeforeEnter1"
				@enter="onEnter1"
				@leave="onLeave1"
				:css="false"
			>
				<div v-if="burgerPrj" style="top: -100%">
					<ul class="projects-nav__list list">
						<li class="projects-aside__item item">
							<input
								type="checkbox"
								name="option1"
								value="value1"
								id="allView"
								class="item__input"
								v-model="allView"
							/>
							<label class="item__label" for="allView"> Показать всё </label>
						</li>
						<li class="projects-aside__item item">
							<input
								type="checkbox"
								name="option1"
								value="value1"
								id="htmlPage"
								class="item__input"
								v-model="htmlPage"
							/>
							<label class="item__label" for="htmlPage">
								<span class="item__logo logo-html"></span>
								HTML
							</label>
						</li>
						<li class="projects-aside__item">
							<input
								type="checkbox"
								name="option1"
								value="value1"
								id="bootstrap"
								class="item__input"
								v-model="bootstrap"
							/>
							<label class="item__label" for="bootstrap">
								<span class="item__logo logo-css"></span>
								Bootstrap
							</label>
						</li>
						<li class="projects-aside__item">
							<input
								type="checkbox"
								name="option1"
								value="value1"
								id="vueApp"
								class="item__input"
								v-model="vueApp"
							/>
							<label class="item__label" for="vueApp">
								<span class="item__logo logo-vue"></span>
								Vue.js
							</label>
						</li>
						<li class="projects-aside__item">
							<input
								type="checkbox"
								name="option1"
								value="value1"
								id="typeScript"
								class="item__input"
								v-model="typeScript"
							/>
							<label class="item__label" for="typeScript">
								<span class="item__logo logo-typescript"></span>
								TypeScript
							</label>
						</li>
						<li class="projects-aside__item">
							<input
								type="checkbox"
								name="option1"
								value="value1"
								id="nuxt"
								class="item__input"
								v-model="nuxt"
							/>
							<label class="item__label" for="nuxt">
								<span class="item__logo logo-nuxt"></span>
								Nuxt 3
							</label>
						</li>
					</ul>
				</div>
			</Transition>
		</nav>

		<div class="right__wrapper">
			<TransitionGroup class="right-pr__list" name="projects-anim" tag="ul">
				<div
					class="right-pr__item"
					:class="item.gridClass"
					v-for="(item, index) in projectItems"
					:key="item"
					v-show="shouldShowItem(item)"
				>
					<h3 class="pr__title">
						{{ item.descr }} <span>{{ item.subDescr }}</span>
					</h3>
					<div class="pr__wrapper__item">
						<div :class="item.class"></div>
						<div class="pr-wrapper__descr">
							<p class="pr__descr">
								{{ item.text }}
							</p>
							<a :href="item.link" target="_blank" class="pr__link"
								>View project</a
							>
						</div>
					</div>
				</div>
			</TransitionGroup>
		</div>
	</div>
</template>

<script>
import { onBeforeEnter1, onEnter1, onLeave1 } from '@/animation'
import { projectItems } from '@/data/DataProject'
import { gsap } from 'gsap/gsap-core'
import { onMounted, ref, watch } from 'vue'

export default {
	setup() {
		const burgerPrj = ref(true)
		const htmlPage = ref(false)
		const bootstrap = ref(false)
		const vueApp = ref(false)
		const typeScript = ref(false)
		const allView = ref(true)
		const nuxt = ref(false)

		watch(
			onMounted(() => {
				gsap.from('.right-pr__list', {
					duration: 4,
					x: 300,
					opacity: 0,
					ease: 'power3.out',
				})
			}),
			onMounted(() => {
				gsap.from('.projects-aside__list', {
					duration: 4,
					y: 500,
					opacity: 0,
					ease: 'power3.out',
				})
			})
		)

		const shouldShowItem = (item) => {
			if (item.id === 1) {
				return htmlPage.value || allView.value
			} else if (item.id === 2) {
				return bootstrap.value || allView.value
			} else if (item.id === 3) {
				return vueApp.value || allView.value
			} else if (item.id === 4) {
				return typeScript.value || allView.value || vueApp.value
			} else if (item.id === 5) {
				return nuxt.value || allView.value || typeScript.value
			}
			return false
		}

		return {
			projectItems,
			onBeforeEnter1,
			onEnter1,
			onLeave1,
			burgerPrj,
			htmlPage,
			bootstrap,
			vueApp,
			typeScript,
			allView,
			shouldShowItem,
			nuxt,
		}
	},
}
</script>

<style lang="scss"></style>
