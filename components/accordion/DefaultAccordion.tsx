import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

// Define the types for better structure
interface Course {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
  code?: string;
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
  return (
    <div className="w-full">
      <Accordion allowZeroExpanded>
        {data.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.path}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex flex-col gap-4 bg-red-500 p-4">
                {item.courses.map((course) => (
                  <div key={course.id} className="border p-2 rounded-md">
                    <p className="text-lg font-semibold">{course.title}</p>
                    <p className="text-sm text-gray-700">
                      {course.description}
                    </p>
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
