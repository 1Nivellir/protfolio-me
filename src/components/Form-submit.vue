<template>
	<form @submit.prevent="submitForm">
		<input type="text" placeholder="Ваше имя" />
		<input type="text" placeholder="Ваш email" />
		<textarea placeholder="Ваше сообщение"></textarea>
		<button type="submit">Отправить</button>
	</form>
</template>

<script setup lang="js">
import axios from 'axios';
import { ref } from 'vue';

const yourName = ref('')
const yourEmail = ref('')
const yourMessage = ref('')

const submitForm = () => {
	const url = 'https://protfolio-me.vercel.app/api/submit-form';
	try {
		const response = axios.post(url, {
			yourName: yourName.value,
			yourEmail: yourEmail.value,
			yourMessage: yourMessage.value,
		})
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}
</script>

<style lang="scss" scoped></style>
