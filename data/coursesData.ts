import { courseCategory } from "@/constants/course";
import { backend } from "./stacks/backend";
import { frontend_web } from "./stacks/frontend";
import { ai } from "./stacks/ai";

export const coursesInfo = [
  {
    id: 0,
    path: courseCategory.FRONTEND_WEB,
    image: "/assets/courses/react.png",
    courses: frontend_web,
  },
  {
    id: 1,
    path: courseCategory.BACKEND,
    image: "/assets/courses/react.png",
    courses: backend,
  },
  {
    id: 2,
    path: courseCategory.AI,
    image: "/assets/courses/react.png",
    courses: ai,
  },
];
