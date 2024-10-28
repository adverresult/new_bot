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
