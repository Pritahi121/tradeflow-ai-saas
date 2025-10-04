import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97ef0cc56ed4c916931a4219c7dd35c7b7daa48e
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
<<<<<<< HEAD
=======
=======
  devIndicators: false,
};

export default nextConfig;

>>>>>>> fbdce7b09de94b6ed4fcf01bf664975e802541b5
>>>>>>> 97ef0cc56ed4c916931a4219c7dd35c7b7daa48e
