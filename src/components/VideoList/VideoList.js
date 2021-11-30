import React from "react";
import { useSelector } from "react-redux";
import "./VideoList.scss"

import VideoItem from "../VideoItem/VideoItem";
import Flex from "@components/Flex/Flex";

function VideoList() {
  
  const list = useSelector((state) => state.vidList);

  return (
    <div className="vid-list">
      <Flex>
        {list.map((i) =>
          <>{<VideoItem {...i} key={new Date() || i.id.videoId} ></VideoItem>}</>
        )}
      </Flex>

    </div>

  );
};

export default VideoList;