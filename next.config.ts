import type {NextConfig} from "next";

const nextConfig: NextConfig = {

    async rewrites() {
        return [
            {
                source: '/api/v1/1/teams',
                destination: 'http://127.0.0.1:1209/api/v1/1/teams',
            },
            {
                source: '/api/v1/1/teams/:slug(\\d{1,})',
                destination: 'http://127.0.0.1:1209/api/v1/1/teams/:slug',
            }
        ]
    },

};

export default nextConfig;

