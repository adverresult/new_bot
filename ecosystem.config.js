module.exports = {
    apps: [{
      name: "my-app",              // Название вашего приложения
      script: "./index.js",        // Путь к вашему индексному файлу
      env: {
        NODE_ENV: "production",     // Переменная окружения для режима
        API_KEY: "sk-H5dPJAeafk4MSo_LdR0N12Um8iDnu2H21gfbLICa_1T3BlbkFJMsC5MsDNvBRB35-5Wjjcm5rlSlP6piELLemyPlGUwA",      // Ваш API токен
      },
      // Дополнительные опции
      instances: "max",            // Использовать все доступные CPU
      exec_mode: "cluster",        // Режим кластеризации
    }],
  };
