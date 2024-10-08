// eslint-disable-next-line @typescript-eslint/no-var-requires
// @next/bundle-analyzer是一个Next.js插件，用于分析和可视化项目的bundle大小，帮助开发者优化打包。
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isProd = process.env.NODE_ENV === 'production'

// next.config.js
const nextConfig = {
  // 其他配置项
  assetPrefix: isProd ? 'https://blog.chizhang.love' : '',
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'chizhang.love',
      'chizhang.tech',
      'chi-notion-blog.vercel.app'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true
  }
}

module.exports = withBundleAnalyzer(nextConfig)
