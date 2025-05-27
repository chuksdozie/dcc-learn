import { courseCategory } from "@/constants/course";
import { backend } from "./stacks/backend";
import { frontend_web } from "./stacks/frontend";
import { ai } from "./stacks/ai";
import { ui_ux } from "./stacks/ui_ux";
import { mobile } from "./stacks/mobile";
import { base_language } from "./stacks/base_language";

export const coursesInfo = [
  {
    id: 0,
    path: courseCategory.BASE_LANGUAGE, // Start with HTML, CSS, JavaScript, Python, etc.
    image: "/assets/courses/react.png",
    courses: base_language,
  },
  {
    id: 1,
    path: courseCategory.UI_UX, // Learn design principles & how to make good-looking, user-friendly interfaces.
    image: "/assets/courses/react.png",
    courses: ui_ux,
  },
  {
    id: 2,
    path: courseCategory.FRONTEND_WEB, // Learn how to build websites (React, Vue, etc.).
    image: "/assets/courses/react.png",
    courses: frontend_web,
  },
  {
    id: 3,
    path: courseCategory.BACKEND, // Learn how to build servers, APIs, and databases.
    image: "/assets/courses/react.png",
    courses: backend,
  },
  {
    id: 4,
    path: courseCategory.MOBILE, // Learn how to build apps for iOS & Android.
    image: "/assets/courses/react.png",
    courses: mobile,
  },
  {
    id: 5,
    path: courseCategory.AI, // Explore AI and ML once programming fundamentals are strong.
    image: "/assets/courses/react.png",
    courses: ai,
  },
];
