import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/u/157680673?v=4'), 
      new URL("https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"), 
      new URL("https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png"),
      new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png"),
      new URL("https://miro.medium.com/v2/resize:fit:720/format:webp/1*Bww_FLJE0RUQhHRMaLrgXg.png"),
      new URL("https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-500x281.jpg"),
      new URL("https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"),
      new URL("https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"),
      new URL("https://cdn.iconscout.com/icon/free/png-512/free-codeigniter-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-language-pack-logos-icons-1175201.png?f=webp&w=256"),
      new URL("https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg"),
      new URL("https://kafka.apache.org/logos/kafka_logo--simple.png"),
      new URL("https://cdn-icons-png.flaticon.com/128/3536/3536505.png")
    ],
  },
};

export default nextConfig;
