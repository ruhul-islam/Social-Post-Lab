import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
}
const PostForm = ({ onAdd }: Props) => {
  return <div className="PostForm">PostForm works</div>;
};

export default PostForm;
