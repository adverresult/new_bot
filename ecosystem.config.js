module.exports = {
    apps: [{
      name: "my-app",              // Название вашего приложения
      script: "./index.js",        // Путь к вашему индексному файлу
      env: {
        NODE_ENV: "production",     // Переменная окружения для режима
        API_KEY: "sk-idh-P_B2CbgbYP3LVVHvotKJ90x20FVF3_6FAAxNlMT3BlbkFJyXALiJDPbf5D7v50CgqjLVU_4DKnjsBRamwOf1MwUA",      // Ваш API токен
      },
      // Дополнительные опции
      instances: "max",            // Использовать все доступные CPU
      exec_mode: "cluster",        // Режим кластеризации
    }],
  };
