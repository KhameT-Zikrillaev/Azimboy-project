/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Включаем App Router
      turbo: true,  // Включаем Turbopack
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': __dirname, // Алиас для корневой папки
      };
      return config;
    },
    images: {
      domains: ['example.com'], // Разрешенные домены для изображений
    },
    env: {
      API_URL: process.env.API_URL, // Переменные окружения
    },
  };
  
  export default nextConfig;