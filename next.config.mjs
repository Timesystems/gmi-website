/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      '127.0.0.1',
      'assets.gendermobile.org',
      'd3ew05z1jesrjr.cloudfront.net',
    ],
  },
};

export default nextConfig;
