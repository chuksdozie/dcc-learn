import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdAirlineSeatFlat, MdKeyboardArrowRight } from "react-icons/md";
import CenterModal from "../modal/CenterModal";
import LessonView from "../lesson/LessonView";

// Define the types for better structure
interface Course {
  id: number;
  image: string;
  title: string;
  link: string;
  description: string;
  path?: string;
  code?: string;
}

interface CoursePath {
  id: string | number;
  level: string;
  content: Course[];
}

interface DefaultAccordionProps {
  data: CoursePath[];
}

const CourseAccordion: React.FC<DefaultAccordionProps> = ({ data }) => {
  const [closeModal, setCloseModal] = React.useState(false);
  const [seletectedCourse, setSelectedCourse] = React.useState<Course | null>();
  return (
    <div className="w-full">
      <Accordion allowZeroExpanded>
        {data.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.level}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex flex-col gap-4 p-4">
                {item.content.map((course) => (
                  <div
                    key={course.id}
                    className="border-b p-2 rounded-md flex justify-between items-center"
                  >
                    <div className="w-[80%]">
                      <p className="text-lg font-semibold text-left">
                        {course.title}
                      </p>
                      <p className="text-sm text-gray-700">
                        {course.description}
                      </p>
                    </div>
                    <div
                      className="flex justify-end gap-2 items-center cursor-pointer w-[120px] bg-gray-200 rounded-lg"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedCourse(course);
                        setCloseModal(true);
                      }}
                    >
                      <p className="text-xs">Start Lesson</p>
                      <MdKeyboardArrowRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {closeModal && (
        <CenterModal
          toggleModal={() => setCloseModal((prev) => !prev)}
          width="500px"
        >
          <LessonView
            closeModal={() => setCloseModal((prev) => !prev)}
            data={seletectedCourse}
          />
        </CenterModal>
      )}
    </div>
  );
};

export default CourseAccordion;
