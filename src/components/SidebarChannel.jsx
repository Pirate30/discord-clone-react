import React from "react";
import "./SidebarChannel.css";
import { setChannelInfo } from "../features/appSlice";
import { useDispatch } from "react-redux";

function SidebarChannel({ id, channel }) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(setChannelInfo({ channelId: id, channelName: channel }))
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel}
      </h4>
    </div>
  );
}

export default SidebarChannel;
