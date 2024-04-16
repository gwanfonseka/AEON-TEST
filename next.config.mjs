/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/answers/calculator',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
