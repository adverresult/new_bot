module.exports = {
    apps: [{
      name: "my-app",              // Название вашего приложения
      script: "./index.js",        // Путь к вашему индексному файлу
      env: {
        NODE_ENV: "production",     // Переменная окружения для режима
        API_KEY: "may_token",      // Ваш API токен
      },
      // Дополнительные опции
      instances: "max",            // Использовать все доступные CPU
      exec_mode: "cluster",        // Режим кластеризации
    }],
  };
