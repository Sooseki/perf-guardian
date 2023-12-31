/** @type {import('next').NextConfig} */

module.exports =  {
    transpilePackages: ['@perfguardian/common'],
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/dashboard",
                permanent: true,
            },
        ];
    },
};
