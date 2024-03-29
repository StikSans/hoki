import pkg from 'next-pwa'
/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPWA = pkg({
  dest: "public",
})

export default withPWA(nextConfig)
