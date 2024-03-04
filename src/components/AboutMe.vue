<template>
	<div class="about__global-wrapper">
		<div class="about__wrapper">
			<aside class="about__aside">
				<ul class="about__list list">
					<li class="list__item list__item-1"></li>
					<li class="list__item list__item-2"></li>
					<li class="list__item list__item-3"></li>
				</ul>
			</aside>
			<nav class="about__nav nav">
				<div class="nav__biografy">
					<h2 class="biografy__title" @click.prevent="bioList = !bioList">
						<span
							class="title__arrow"
							:class="{ rotate__arrow: bioList }"
						></span>
						Биография
					</h2>

					<Transition name="perList">
						<ul class="personal__list" v-show="bioList">
							<RouterLink
								to="/about/aboutMe/"
								class="personal__item"
								:class="{ 'active-link': $route.path === '/about/aboutMe/' }"
							>
								<span
									class="arrow__vector"
									:class="{ arrow__active: $route.path === '/about/aboutMe/' }"
								></span>
								<span class="personal__item-bg1"></span>Обо мне
							</RouterLink>

							<!-- <RouterLink to="/about/interes/" class="personal__item">
                        <span class="personal__item-bg2"></span>Интересы
                    </RouterLink> -->

							<RouterLink
								to="/about/softSkills/"
								class="personal__item"
								:class="{ 'active-link': $route.path === '/about/softSkills/' }"
							>
								<span
									class="arrow__vector"
									:class="{
										arrow__active: $route.path === '/about/softSkills/',
									}"
								></span>
								<span class="personal__item-bg3"></span>Soft__skills
							</RouterLink>

							<RouterLink
								to="/about/hardSkills/"
								class="personal__item"
								:class="{ 'active-link': $route.path === '/about/hardSkills/' }"
							>
								<span
									class="arrow__vector"
									:class="{
										arrow__active: $route.path === '/about/hardSkills/',
									}"
								></span>
								<span class="personal__item-bg4"></span>Hard__skills
							</RouterLink>
						</ul>
					</Transition>
					<h2
						class="contacts__title"
						@click.prevent="contactsList = !contactsList"
					>
						<span
							class="title__arrow"
							:class="{ rotate__arrow: contactsList }"
						></span>
						Контакты
					</h2>
					<Transition name="perList">
						<ul class="contacts__list" v-show="contactsList">
							<li class="contacts__item contacts__item-tg">@slavavorobey</li>
							<li class="contacts__item contacts__item-mail">
								slavavorobey@vk.com
							</li>
							<li class="contacts__item contacts__item-number">
								+7-9138415347
							</li>
						</ul>
					</Transition>
				</div>
			</nav>
		</div>
		<div class="about-wrapper__descr">
			<router-view v-slot="{ Component }" name="aboutContent">
				<transition name="about" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>

		<div class="wrapper__snippets">
			<h2 class="snippets__title">// Code snippet showcase:</h2>
			<div class="snippets-right__wrapper">
				<div class="user__wrapper">
					<span class="user__photo"></span>
					<div class="oldest__wrapper">
						<span class="user__title">@username</span>
						<span class="user__descr">Created 5 months ago</span>
					</div>
					<div class="user__details">
						<span class="details__comment"></span>
						<span class="details__text">details</span>
						<span class="details__star"></span>
						<span class="details__text">3 starts</span>
					</div>
				</div>
				<p class="snippets-right__descr descr">
					<span style="color: #e99287">function</span> initializeModelChunk<span
						style="color: #5565e8"
						>&lt;</span
					><span style="color: #43d9ad">T</span
					><span style="color: #5565e8">&gt;</span>(chunk: ResolvedModelChunk):
					T {<br />
					<span style="color: #e99287">const</span> value:
					<span style="color: #e99287">T</span>
					<span style="color: #5565e8">=</span>
					<span style="color: #c98bdf">parseModel</span>(chunk.<span
						style="color: #5565e8"
						>_response</span
					>, chunk.<span style="color: #5565e8">_value</span>);<br />
					<span style="color: #e99287">const</span> initializedChunk:
					<span style="color: #e99287">InitializedChunk</span
					><span style="color: #5565e8">&lt;</span
					><span style="color: #e99287">T</span
					><span style="color: #5565e8">&gt;</span>
					<span style="color: #5565e8">=</span> (chunk: any);
					initializedChunk.<span style="color: #5565e8">_status</span>
					<span style="color: #5565e8">=</span>
					<span style="color: #5565e8">INITIALIZED;</span><br />
					initializedChunk.<span style="color: #5565e8">_value</span>
					<span style="color: #5565e8">=</span> value;<br />
					<span style="color: #e99287">return</span> value;<br />
					}
				</p>

				<div class="user__wrapper">
					<span class="user__photo"></span>
					<div class="oldest__wrapper">
						<span class="user__title">@username</span>
						<span class="user__descr">Created 9 months ago</span>
					</div>
					<div class="user__details">
						<span class="details__comment"></span>
						<span class="details__text">details</span>
						<span class="details__star"></span>
						<span class="details__text">0 starts</span>
					</div>
				</div>
				<p class="snippets-right__descr descr">
					<span style="color: #e99287">export function</span> parseModelTuple(
					response: Response, value: {+[key: string]: JSONValue} |
					<span style="color: #e99287">$ReadOnlyArray</span
					><span style="color: #5565e8">&lt;</span
					><span style="color: #43d9ad">JSONValue</span
					><span style="color: #5565e8">&gt;</span>, ): any { const tuple:
					[mixed, mixed, mixed, mixed] = (value: any);
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap/gsap-core'
import { onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
	setup() {
		const bioList = ref(false)
		const contactsList = ref(false)
		watch(
			onMounted(() => {
				gsap.from('.wrapper__snippets', {
					duration: 3,
					scale: 0.1,
					y: -250,
					opacity: 0,
					ease: 'power3.out',
				})
			}),
			onMounted(() => {
				gsap.from('.about__nav', {
					duration: 3,
					y: -250,
					opacity: 0,
					ease: 'power3.out',
				})
			}),
			onMounted(() => {
				gsap.from('.about__list', {
					duration: 3,
					x: 250,
					opacity: 0,
					ease: 'power3.out',
				})
			})
		)
		return {
			contactsList,
			bioList,
		}
	},

	components: { RouterLink, RouterView },
}
</script>

<style lang="scss"></style>
