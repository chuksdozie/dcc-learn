import SectionLayout from "@/layout/SectionLayout";
import React from "react";
import DefaultAccordion from "../accordion/DefaultAccordion";
import { coursesData } from "@/data/coursesData";

const Stacks = () => {
  return (
    <>
      <SectionLayout header="Learning Stacks">
        <DefaultAccordion data={coursesData} />
      </SectionLayout>
    </>
  );
};

export default Stacks;
