import { unixTime } from "./constants";



export const publicationDate = (time: number) => {
  const timeStamp = time;
  const dateFormat = new Date(timeStamp * unixTime);
  const hours = dateFormat.getHours();
  const minutes = dateFormat.getMinutes();
  const dateString = dateFormat.toDateString();
  const normalizedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const normalizedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${normalizedHours}:${normalizedMinutes} ${dateString}`;
};
