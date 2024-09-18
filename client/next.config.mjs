/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
            }
        ],
        domains: [
            "images.pexels.com",
            "c1.wallpaperflare.com",
            "c0.wallpaperflare.com",
            "c4.wallpaperflare.com",
            "media.istockphoto.com",
            "images.mid-day.com",
            "cdn.pixabay.com",
            "img.freepik.com",
            "okcredit-blog-images-prod.storage.googleapis.com",
            "iimaventures.com",
            "static.vecteezy.com"
        ],
    },
    env: {
        SERVER : "https://agri-vision-production.up.railway.app"
    }
};

export default nextConfig;
