module.exports = {
    apps: [{
      name: "my-app",              // Название вашего приложения
      script: "./index.js",        // Путь к вашему индексному файлу
      env: {
        NODE_ENV: "production",     // Переменная окружения для режима
        API_KEY: "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",      // Ваш API токен
      },
      // Дополнительные опции
      instances: "max",            // Использовать все доступные CPU
      exec_mode: "cluster",        // Режим кластеризации
    }],
  };
