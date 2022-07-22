import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import { doc, deleteDoc } from "firebase/firestore";

import "./Post.css";
import db from "../../firebase";

const Post = forwardRef(
  (
    { displayName, username, verified, text, avatar, image, id },
    ref
  ) => {
    const onClickDelete = (id) => {
      if(alert("Are you sure you want to delete this post?")){
        deleteDoc(doc(db, "posts", id));
      }
    }

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} alt={username} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                {verified && <VerifiedUser className="post__badge" />}
                <span className="post__headerSpecial">@{username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
              {/* <p>{id}</p> */}
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <DeleteOutlinedIcon onClick={()=>onClickDelete(id)} fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
