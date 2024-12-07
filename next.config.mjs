/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_LOCAL_BASE_URL: process.env.DOMAIN_LOCAL_API,
        CHECK_IMAGE: process.env.CHECK_IMAGE
    },
};

export default nextConfig;
