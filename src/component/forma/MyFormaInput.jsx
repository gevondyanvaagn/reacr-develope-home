import React,{useState} from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";



const MyFormaInput = ({post,creatNewPost}) =>{
    const [inputValue, setInputVlaue] = useState({ title: "", body: "" });

    const addPost = (e) => {
        e.preventDefault();
        let date = new Date();
        let newID = date.getMilliseconds();
        creatNewPost({...inputValue,id:newID});
        setInputVlaue({ title: "", body: "" });
      };

    return (
        <form>
        <MyInput
          value={inputValue.title} 
          onChange={(e) => setInputVlaue({ ...inputValue, title: e.target.value })}
          type="text"
          placeholder="Название пост"
        />
        <MyInput
          value={inputValue.body}
          onChange={(e) => setInputVlaue({ ...inputValue, body: e.target.value })}
          type="text"
          placeholder="Описание пост"
        />
        <MyButton onClick={(e) => addPost(e)}>Создать пост</MyButton>
      </form>
    )
}

export default MyFormaInput;