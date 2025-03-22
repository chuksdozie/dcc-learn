import { useRouter } from "next/router";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdKeyboardArrowRight } from "react-icons/md";

// Define the types for better structure
interface Course {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
  code?: string;
  playlist: string;
}

interface CoursePath {
  id: number;
  path: string;
  image: string;
  courses: Course[];
}

interface DefaultAccordionProps {
  data: CoursePath[];
}

const DefaultAccordion: React.FC<DefaultAccordionProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <Accordion allowZeroExpanded>
        {data.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton
                className={
                  "accordion__button text-sm max-lg:text-xs text-gray500 font-light"
                }
              >
                {item.path}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex flex-col gap-4 p-4">
                {item.courses.map((course) => (
                  <div
                    key={course.id}
                    className="border-b p-2 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm max-lg:text-xs font-semibold text-left">
                        {course.title}
                      </p>
                      <p className="text-sm max-lg:text-xs text-gray-700">
                        {course.description}
                      </p>
                    </div>
                    <div
                      className="flex justify-end gap-2 items-center cursor-pointer w-[120px] bg-gray-200 rounded-lg"
                      onClick={() =>
                        router.push({
                          pathname: `/courses/${course.code}`,
                          query: {
                            playlist: course.playlist,
                            title: course.title,
                          },
                        })
                      }
                    >
                      <p className="text-xs text-brand950">Open Course</p>
                      <MdKeyboardArrowRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DefaultAccordion;
