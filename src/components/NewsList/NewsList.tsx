import { publicationDate } from "../../utils";
import "./style.css";

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
      <div className="line">
       <h2 className="title-color">{title}</h2>
        <p>
        Rate: {score} | By: {by} | Date: {date}
        </p>
      </div>
    </div>
  );
};
