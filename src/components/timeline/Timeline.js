import React, { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

import Post from "./Post";
import "./Timeline.css";
import { TweetBox } from "./TweetBox";
import db from "../../firebase";

function Timeline() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          id={post.id}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
