import { publicationDate } from "../utils";

interface INewsProps {
  title: string;
  score: number;
  by: string;
  time: number;
  id: number;
}

export const NewsList = ({ title, score, by, time, id }: INewsProps) => {
  const date = publicationDate(time);

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Rate: {score} | By: {by} | Date: {date}
      </p>
    </div>
  );
};
