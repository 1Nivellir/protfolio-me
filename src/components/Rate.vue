<template>
	<div class="rate__wrapper">
		<h2 class="rate__title">
			Данные предоставлены "Центральным Банком России"
		</h2>
		<h2 class="rate__subtitle">Актуально на {{ dateRate }}</h2>
		<div class="rate__form-wrapper">
			<form>
				<select
					name=""
					id=""
					v-model="rateId"
					class="rate__form-select"
					@change="getValue"
				>
					<option :value="item.ID" v-for="(item, index) in rate" :key="item.ID">
						{{ item.Name }}
					</option>
				</select>
			</form>
			<div class="rate__wrapper-descr">
				<h2 class="rate__card-title">{{ oneValue.CharCode }}</h2>
				<div style="display: flex; gap: 30px">
					<span class="rate__value"
						>{{ oneValue.Nominal }} {{ oneValue.Name }} =
						{{ realValue }} российского рубля</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			rate: [],
			dateRate: '',
			rateId: 'R01235',
			oneValue: {},
			getOld: null,
			realValue: null,
		}
	},
	methods: {
		async fetchRate() {
			try {
				const response = await axios.get(
					'https://www.cbr-xml-daily.ru/daily_json.js'
				)
				console.log(response)
				this.dateRate = this.formatDate(response.data.Date)
				const valuteData = response.data.Valute
				this.rate = Object.values(valuteData)
				this.getValue()
			} catch (e) {
				console.log('Ошибка:', e)
			}
		},
		formatDate(dateString) {
			const date = new Date(dateString)
			const year = date.getFullYear()
			const month = String(date.getMonth() + 1).padStart(2, '0')
			const day = String(date.getDate()).padStart(2, '0')
			return `${year}-${month}-${day}`
		},
		getValue() {
			const rateId = this.rate.find(item => item.ID === this.rateId)
			this.oneValue = rateId
			this.getCorrValue()
		},
		getCorrValue() {
			const obj = this.oneValue
			const value = parseFloat(obj.Value).toFixed(2)
			const previous = parseFloat(obj.Previous).toFixed(2)
			const result = (parseFloat(value) - parseFloat(previous)).toFixed(2)
			this.realValue = value
			this.getOld = result
		},
	},
	mounted() {
		this.fetchRate()
	},
}
</script>

<style lang="scss" scoped>
.rate__form-select {
	font-size: 20px;
	background-color: #011627;
	border-radius: 10px;
	color: #607b96;
	border: none;
	padding: 10px 20px;
	outline: 1px solid #1e2d3d;
}
.rate__form-wrapper {
	display: flex;
	gap: 30px;
}
.rate__form-select:focus-visible {
	outline: 1px solid #1e2d3d;
	border: none;
}
.rate__wrapper {
	display: flex;
	flex-direction: column;
	padding-left: 30px;
	padding-top: 30px;
}
.rate__nominal {
	color: #607b96;
}
.rate__wrapper-descr {
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 10px rgb(136, 130, 130);
	width: 400px;
	border-radius: 10px;
	padding: 20px;
}
.rate__value {
	color: #607b96;
	font-size: 24px;
}
.rate__subtitle {
	color: #607b96;
	font-size: 24px;
	margin-bottom: 20px;
}
.rate__title {
	color: #607b96;
	font-size: 36px;
	margin-bottom: 10px;
}
.rate__wrapper-descr {
	color: #607b96;
}
.rate__charcode {
	color: #607b96;
}
.rate__card-title {
	color: #607b96;
	margin-bottom: 15px;
}
</style>
