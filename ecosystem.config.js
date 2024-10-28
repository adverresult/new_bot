module.exports = {
  apps: [
    {
      name: 'myApp',
      script: 'index.js', // Ваш главный файл приложения
      env: {
        API_KEY: 'ваш_токен_здесь', // Устанавливаем переменную окружения API_KEY
      },
      env_production: {
        NODE_ENV: 'production',
        API_KEY: 'ваш_производственный_токен', // Можно установить другой токен для продакшена
      },
    },
  ],
};
