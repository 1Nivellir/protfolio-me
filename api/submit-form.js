
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'mail.ru',
	host: 'smtp.mail.ru',
	port: 465,
	secure: true,
	auth: {
		user: 'slava.vorobev.1995@mail.ru',
		pass: process.env.password,
	},
});

export default async (req, res) => {
	// Обработка предварительного запроса OPTIONS
	if (req.method === 'OPTIONS') {
		// Установка заголовков CORS для предварительного запроса
		res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешает запросы с любого источника
		res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.status(200).end(); // Завершаем ответ без тела
		return;
	}

	const mailOptions = {
		from: 'slava.vorobev.1995@mail.ru',
		to: 'slavavorobey@vk.com',
		subject: 'Новая заявка с формы',
		text: `Имя: ${req.body.name}\nEmail: ${req.body.email}\nСообщение: ${req.body.message}`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: ' + info.response);

		// Добавьте заголовки CORS
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

		res.status(200).send('Форма успешно отправлена!');
	} catch (error) {
		console.error(error);
		res.status(500).send('Ошибка при отправке письма');
	}
};
