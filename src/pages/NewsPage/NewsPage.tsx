import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchNews } from "../../store/effects";
import { NewsList } from "../../components/NewsList";
import { INews } from "../../store/types";

export const NewsPage = () => {
  const news = useAppSelector((state) => state.news.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      <h1>News list</h1>
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
