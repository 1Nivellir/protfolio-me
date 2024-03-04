<template>
	<form @submit.prevent="submitForm" class="form__submit">
		<input
			type="text"
			placeholder="Ваше имя"
			class="form__input"
			v-model="yourName"
		/>
		<input
			type="text"
			placeholder="Ваш email"
			class="form__input"
			v-model="yourEmail"
		/>
		<textarea
			placeholder="Ваше сообщение"
			class="form__input"
			v-model="yourMessage"
		></textarea>
		<button type="submit" class="bn39">
			<span class="bn39span">Отправить</span>
		</button>
	</form>
</template>

<script setup lang="js">
import axios from 'axios';
import { ref } from 'vue';

const yourName = ref('')
const yourEmail = ref('')
const yourMessage = ref('')

const submitForm = async () => {
	const url = 'https://protfolio-me.vercel.app/api/submit-form';
	try {
		const response = await axios.post(url, {
			name: yourName.value, // Исправлено на 'name'
			email: yourEmail.value, // Исправлено на 'email'
			message: yourMessage.value, // Исправлено на 'message'
		});
		console.log(response.data); // Добавлено .data для доступа к данным ответа
	} catch (error) {
		console.error(error);
	}
}
</script>

<style lang="scss" scoped></style>
