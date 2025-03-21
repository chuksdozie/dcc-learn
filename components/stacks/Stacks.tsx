import SectionLayout from "@/layout/SectionLayout";
import React from "react";
import DefaultAccordion from "../accordion/DefaultAccordion";
import { coursesInfo } from "@/data/coursesData";

const Stacks = () => {
  return (
    <>
      <SectionLayout header="Learning Stacks">
        <DefaultAccordion data={coursesInfo} />
      </SectionLayout>
    </>
  );
};

export default Stacks;
