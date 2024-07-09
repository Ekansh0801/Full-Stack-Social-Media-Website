/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"im.rediff.com"
      },
      {
        protocol:"https",
        hostname:"t4.ftcdn.net"
      },
      {
        protocol:"https",
        hostname:"pbs.twimg.com"
      },
      {
        protocol:"https",
        hostname:"c.ndtvimg.com"
      },
      {
        protocol:"https",
        hostname:"images.firstpost.com"
      },
      {
        protocol:"https",
        hostname:"kalingatv.com"
      },
      {
        protocol:"https",
        hostname:"cdn.shopify.com"
      },
      {
        protocol:"https",
        hostname:"upload.wikimedia.org"
      },
      {
        protocol:"https",
        hostname:"ss-i.thgim.com"
      },
      {
        protocol:"https",
        hostname:"pbs.twimg.com"
      }
    ]
  }
};

export default nextConfig;
