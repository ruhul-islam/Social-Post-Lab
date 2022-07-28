import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Grand Circus is cool" },
    { title: "React", thought: "React give me power!" },
    {
      title: "Beatrice",
      thought:
        "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!",
    },
  ]);

  const deleteAPost = (index: number): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };

  const addAPost = (post: Post): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.unshift(post);
      return newList;
    });
  };

  return (
    <div className="SocialPosts">
      <PostForm onAdd={addAPost} />
      <ul>
        {posts.map((item, index) => (
          <PostInList
            post={item}
            onDelete={() => deleteAPost(index)}
            key={`${index}${item.title}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
