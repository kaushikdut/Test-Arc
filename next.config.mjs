/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.pixabay.com",
      "lh3.googleusercontent.com",
      "via.placeholder.com",
      "avatars.githubusercontent.com",
    ], // Add the allowed domain here
  },
};

export default nextConfig;
