import { Avatar, Button } from "@mui/material";
import React from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import "./TweetBox.css";
import db from "../../firebase";

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [tweetImage, setTweetImage] = React.useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString(16);
    // addDoc(collection(db, "posts"), {
      setDoc(doc(db, "posts", id),{
      displayName: "frontend-engineer",
      username: "Maru",
      verified: true,
      text: tweetMessage,
      avatar: "https://iconbu.com/wp-content/uploads/2020/06/%E7%8A%AC.jpg",
      // image: tweetImage || "https://source.unsplash.com/EpRAM95thHU",
      image: tweetImage ,
      timestamp: serverTimestamp(),
      id: id,
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://iconbu.com/wp-content/uploads/2020/06/%E7%8A%AC.jpg"/>
          <input
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Paste image URL or random image"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};
