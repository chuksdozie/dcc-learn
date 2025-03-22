import { getAllPlaylistVideos } from "@/hooks/fetchCourses";
import React from "react";

const fetch = () => {
  return (
    <div>
      <button
        onClick={async () =>
          await getAllPlaylistVideos("PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw").then(
            (videos) => {
              console.log(JSON.stringify(videos, null, 2));
            }
          )
        }
      >
        Fetch
      </button>
    </div>
  );
};

export default fetch;
