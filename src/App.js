import "./App.css";
import Products from "./component/product/Products";
import User from "./component/user/User";
import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import UserClass from "./component/user/UserClass";
import Post from "./component/post/Post";
import PostList from "./component/postList/PostList";
import MyFormaInput from "./component/forma/MyFormaInput";


function App() {
  const [post, setPost] = useState([
    { id: 1, title: "javaa", body: "eto javaScript" },
    { id: 2, title: "javaa", body: "eto javaScript" },
    { id: 3, title: "javaa", body: "eto javaScript" },
    { id: 4, title: "javaa", body: "eto javaScript" },
  ]);

  const creatNewPost=(obj)=>{
    setPost([...post,obj])
  }
  const deletePost = (id)=>{
    setPost(post.filter(item=>item.id !== id));
  }


  return (
    <div className="App">
      <MyFormaInput post={post} creatNewPost={creatNewPost}/>
      <PostList post={post} deletePost={deletePost}/>
    </div>
  );
}

export default App;
