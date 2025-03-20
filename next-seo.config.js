// next-seo.config.js
const title = "DCC - Building Lives Through Tech";
const description =
  "Join the DC Community to connect, learn, and grow with like-minded tech enthusiasts and professionals.";

export default {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://community.devchuks.com", // Replace with your actual DC Community URL
    title,
    description,
    images: [
      {
        url: "https://ik.imagekit.io/akf2tcskl/DCC/DCC%20Banner%20AI_civhHDMi6.webp", // Replace with your DC Community banner image URL
        width: 1200,
        height: 630,
        alt: "DC Community Banner",
      },
    ],
    site_name: "DC Community",
  },
  twitter: {
    // handle: "@dc_community", // Replace with the DC Community Twitter handle
    // site: "@dc_community",
    // cardType: "summary_large_image",
  },
};
