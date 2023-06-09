import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentsItem } from "../../components/CommentsItem/CommentsItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchNewsItem } from "../../store/effects";
import { publicationDate } from "../../utils";
import { Link } from 'react-router-dom';
import "./style.css";

export const NewsItem = () => {
  const params = useParams();
  const id = Number(params.id);
  const newsItem = useAppSelector((state) => state.newsItem.newsItem);
  const loading = useAppSelector((state) => state.newsItem.loading);
  const error = useAppSelector((state) => state.newsItem.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewsItem(id));
  }, [id, dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <p className="error">Loading error</p>;
  }

  if (!newsItem) {
    return null;
  }

  const date = publicationDate(newsItem.time);

  return (
    <div className="indent">
      <h1 className="newsItem">{newsItem.title}</h1>
      <Link to="/"><button className="back">Go back</button></Link>
      <a href={newsItem.url} className="size">
        {newsItem.url}
      </a>
      <p className="date">Date: {date}</p>
      <p className="by">By: {newsItem.by}</p>
      <p className="descendants">Descendants: {newsItem.descendants}</p>
      <div>
        <p className="comments">Comments:</p>{" "}
        {newsItem.kids?.map((id) => (
          <CommentsItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
