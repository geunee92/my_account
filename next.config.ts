import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    emotion: true, // ✅ SWC 기반 Emotion 활성화!
  },
  /* config options here */
  reactStrictMode: true,
}

export default nextConfig
