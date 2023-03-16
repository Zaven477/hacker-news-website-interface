import { useEffect, useState } from "react";
import { getCommentsById } from "../../api";
import { ICommentsItem } from "../../store/types";
import { publicationDate } from "../../utils";
import "./style.css";
import ReactHtmlParser from "react-html-parser";

interface IdProps {
  id: number;
}

export const CommentsItem = ({ id }: IdProps) => {
  const [comments, setComments] = useState<ICommentsItem>({});
  const [loading, setLoading] = useState(false);
  const [commentsClick, setCommentsClick] = useState(false);

  let date = publicationDate(comments.time);

  useEffect(() => {
    setLoading(true);
    getCommentsById(id)
      .then((data) => setComments(data))
      .finally(() => setLoading(false));
  }, [id]);

  const updateComments = async () => {
    setLoading(true);
    await getCommentsById(id).then((data) => setComments(data));
    setLoading(false);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      <button className="style" onClick={updateComments}>
        Сomment update
      </button>
      <div className="interval">
        <p className="comment">
          {comments.text && ReactHtmlParser(comments.text)}
        </p>
        <p>
          Author: {comments.by} | Date: {date}
        </p>
      </div>
      {comments.kids && (
        <button
          className="btn-comments"
          onClick={() => setCommentsClick((prev) => !prev)}
        >
          More comments
        </button>
      )}
      {commentsClick &&
        comments.kids &&
        comments.kids.map((id) => <CommentsItem key={id} id={id} />)}
    </div>
  );
};
