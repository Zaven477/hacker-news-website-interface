import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchNews } from "../../store/effects";
import { NewsList } from "../../components/NewsList/NewsList";
import { INews } from "../../store/types";
import "./style.css";

export const NewsPage = () => {
  const news = useAppSelector((state) => state.news.news);
  const loading = useAppSelector((state) => state.news.loading);
  const error = useAppSelector((state) => state.news.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    setInterval(() => dispatch(fetchNews()), 60000)
  }, [dispatch])

  return (
    <div className="indent">
      {loading && <p className="size">Loading...</p>}
      {error && <p className="color">Loading error</p>}
      {!loading && !error && <h1>News list</h1>}
      <button className="btn-news" onClick={() => dispatch(fetchNews())}>Update news</button>
      {news.map((item: INews) => (
        <NewsList
          key={item.id}
          title={item.title}
          score={item.score}
          by={item.by}
          time={item.time}
          id={item.id}
        />
      ))}
    </div>
  );
};
