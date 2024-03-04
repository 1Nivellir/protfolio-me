
import { gsap } from 'gsap/gsap-core'

export function onBeforeEnter1(el) {
	gsap.set(el, {
		scaleX: 0.25,
		scaleY: 0.25,
		opacity: 1,
	})
}

export function onEnter1(el, done) {
	gsap.to(el, {
		duration: 1,
		scaleX: 1,
		scaleY: 1,
		opacity: 1,
		ease: 'power2.inOut',
		onComplete: done,
	})
}

export function onLeave1(el, done) {
	gsap.to(el, {
		duration: 0.7,
		scaleX: 0.5,
		scaleY: 0.5,
		y: -300,
		ease: 'power2.inOut',
	})
	gsap.to(el, {
		duration: 0.2,
		delay: 0.5,
		opacity: 0,
		onComplete: done,
	})
}

export function onBeforeEnter(el) {
	gsap.set(el, {
		duration: 0.5,
		opacity: 1,
		top: '-100%',
		ease: 'power2.inOut',
	})
}
export function onEnter(el, done) {
	gsap.to(el, {
		duration: 1,
		opacity: 1,
		top: '0%',
		ease: 'power2.inOut',
		onComplete: done,
	})
}
export function onLeave(el, done) {
	gsap.to(el, {
		duration: 0.7,
		scaleX: 1,
		scaleY: 1,
		top: '-100%',
		ease: 'power2.inOut',
	})
	gsap.to(el, {
		duration: 0.2,
		delay: 0.5,
		opacity: 0,
		onComplete: done,
	})
}

//
// onBeforeEnter(el) {
// 	gsap.set(el, {
// 		duration: 0.5,
// 		opacity: 1,
// 		ease: 'power2.inOut',
// 	})
// },
// onEnter(el, done) {
// 	gsap.to(el, {
// 		duration: 1,
// 		opacity: 1,
// 		ease: 'elastic.inOut(2.5, 1)',
// 		onComplete: done,
// 	})
// },
// onLeave(el, done) {
// 	gsap.to(el, {
// 		duration: 0.7,
// 		scaleX: 1,
// 		scaleY: 1,
// 		ease: 'power2.inOut',
// 	})
// 	gsap.to(el, {
// 		duration: 0.2,
// 		delay: 0.5,
// 		opacity: 0,
// 		onComplete: done,
// 	})
// },