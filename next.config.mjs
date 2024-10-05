/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/cleanstar',
    assetPrefix: '/cleanstar',
    images: {
        unoptimized: true,  // Disable image optimization for static exports
    },
};

export default nextConfig;