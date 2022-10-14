import Post from "../post/Post";

const PostList = ({ post,deletePost }) => {
  console.log(post);
  return (
    <>
     {post.length
     ? <h1 style={{ textAlign: "center" }}>Список постов</h1>
     :<h1 style={{ textAlign: "center" }}>Нет постов</h1>}

      {post.map((item, index) => {
        return <Post number={index + 1} key={item.id} post={item} deletePost={deletePost}/>;
      })}
    </>
  );
};

export default PostList;
