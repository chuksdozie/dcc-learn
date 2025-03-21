import { getAllPlaylistVideos } from "@/hooks/fetchCourses";
import React from "react";

const fetch = () => {
  return (
    <div>
      <button
        onClick={async () =>
          await getAllPlaylistVideos().then((videos) => {
            console.log(JSON.stringify(videos, null, 2));
          })
        }
      >
        Fetch
      </button>
    </div>
  );
};

export default fetch;
