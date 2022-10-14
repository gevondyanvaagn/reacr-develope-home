import React from "react";
import MyButton from "../UI/button/MyButton";
import './style.css'

const Post=(props)=>{
    const {id,title,body} = props.post;

    return <div className='post'>
    <div className='post_content'>
      <div className="postBlock2"><strong> {props.number}. {title}</strong></div>
      <div>
        <h3>{body}</h3>
      </div>
      <div className='post_btns'>
        <MyButton onClick={()=>props.deletePost(id)}>удалить</MyButton>
      </div>
    </div>
  </div>
} 

export default Post;