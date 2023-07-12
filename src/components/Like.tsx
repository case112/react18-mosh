import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color="red" onClick={toggle}></AiFillHeart>;
  return <AiOutlineHeart color="red" onClick={toggle}></AiOutlineHeart>;
};
