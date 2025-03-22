// project-data.tsx

export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

// Локализированные данные для проектов
export const projects = {
  en: [
    {
      title: "Kolibri — dating bot",
      year: 2024,
      description: "Dating platform, any user can use a unique search. Kolibri will help you find new acquaintances without leaving Telegram, there is a choice by interests, an intuitive interface for any user, a safe mode for children.",
      url: "https://t.me/DatyBot",
    },
    {
      title: "To Voice Converter — audio-to-voice message converter",
      year: 2024,
      description: "Non-commercial development, the bot converts audio format into voice message and vice versa. The principle of operation: it receives audio in any format, sends it for conversion using a special technology and returns a ready-made voice message, completely free.",
      url: "https://t.me/ToVoiceConverterBot",
    },
  ],
  ru: [
    {
      title: "Колибри — бот знакомств",
      year: 2024,
      description: "Платформа для знакомств, любой пользователь может воспользоваться уникальным поиском. Колибри поможет тебе в поиске новых знакомств не выходя из Телеграм, присутствует выбор по интересам, интуитивно понятный интерфейс для любого пользователя, безопасный режим для детей.",
      url: "https://t.me/DatyBot",
    },
    {
      title: "To Voice Converter — конвертер аудио в голосовое сообщение",
      year: 2024,
      description: "Некомерчиская разработка, бот конвертирует аудио формат в голосовое сообщение и наоборот. Принцип работы: получает аудио любого формата, отправляет на преобразование по специальной технологии и возвращает уже готовое сообщение голосового формата, полностью бесплатный.",
      url: "https://t.me/ToVoiceConverterBot",
    },
  ],
};
