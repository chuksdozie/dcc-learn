import React from "react";
import YouTubeEmbed from "./YoutubeEmbed";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const LessonView = ({
  closeModal,
  data,
}: {
  closeModal: () => void;
  data: any;
}) => {
  console.log({ data });
  return (
    <div>
      <div className="flex justify-between mb-4">
        <p>{data?.title}</p>
        <MdAirlineSeatReclineExtra onClick={closeModal} />
      </div>

      <YouTubeEmbed videoId={data?.link} />
      <div className="flex justify-between my-2">
        <p>{data?.description}</p>
        <div>
          <div>Next</div>
          <div>Previous</div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
