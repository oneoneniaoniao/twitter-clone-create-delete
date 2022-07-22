import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input
          type="text"
          className="widgets__inputField"
          placeholder="Search Twitter"
        />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1475764828208009220"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Shin_Engineer"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/Shin_Engineer"}
          options={{ text: "#reactjs is awesome", via: "Shin_Engineer" }}
        />
      </div>
    </div>
  );
};
