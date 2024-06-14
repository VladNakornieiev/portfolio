// Send Message

document.getElementById('orderCallForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартне відправлення форми

    const name = document.querySelector('#orderCallForm input[type="text"]').value;
    const number = document.querySelector('#orderCallForm input[type="tel"]').value;

    const telegramToken = '7495614132:AAEAMmIBXR42MFQ1cJaQfj4kKzNS9yuG-HY'; // Замість YOUR_TELEGRAM_BOT_TOKEN вставте ваш токен
    const chatId = '1089622202'; // Замість YOUR_TELEGRAM_CHAT_ID вставте ваш ID

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: `${name} хоче записатися на урок. Тел. ${number}`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to send the form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});