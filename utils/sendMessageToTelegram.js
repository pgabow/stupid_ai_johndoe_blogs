import axios from 'axios'

export const sendMessageToTelegram = async (message) => {
  const telegramBotToken = process.env.NEXT_PUBLIC_PUBLIC_BOT_TOKEN
  const chatId = process.env.NEXT_PUBLIC_PUBLIC_BOT_CHAT_ID
  // const telegramBotToken = '6200489602:AAGneSqqiVH4B1PLCWfzi1ezS0Wd20s4_as'
  // const chatId = '1615629003'
  let isSend = false

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`
  const params = {
    chat_id: chatId,
    text: message,
  }

  try {
    await axios.post(url, params)
    console.log('Сообщение успешно отправлено в Telegram!')
  } catch (error) {
    console.error('Ошибка отправки сообщения в Telegram:', error)
  }
}
