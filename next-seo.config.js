// next-seo.config.js
const title = "DCC Learn | Curated Tech Courses to Build Your Career";
const description =
  "Discover handpicked tech courses for all levels — from software development to UI/UX and data. Learn, grow, and thrive with DCC Learn: a community-driven platform committed to building lives through tech.";

export default {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learn.devchuks.com", // Replace with your actual DC Community URL
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
    site_name: "Learn - DC Community",
  },
  twitter: {
    // handle: "@dc_community", // Replace with the DC Community Twitter handle
    // site: "@dc_community",
    // cardType: "summary_large_image",
  },
};
