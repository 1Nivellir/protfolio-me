import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	service: 'mail.ru',
	host: 'smtp.mail.ru',
	port: 465,
	secure: true,
	auth: {
		user: 'slava.vorobev.1995@mail.ru',
		pass: process.env.password,
	},
})

export default async (req, res) => {
	const mailOptions = {
		from: 'slava.vorobev.1995@mail.ru',
		to: 'slavavorobey@vk.com',
		subject: 'Новая заявка с формы',
		text: `Имя: ${req.body.name}\nEmail: ${req.body.email}\nСообщение: ${req.body.message}`,
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		console.log('Email sent: ' + info.response)
		res.status(200).send('Форма успешно отправлена!')
	} catch (error) {
		console.error(error)
		res.status(500).send('Ошибка при отправке письма')
	}
}
