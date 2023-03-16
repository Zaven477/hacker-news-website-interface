import axios from "axios";

export const getNews = async () => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`
  );
  return response.data.slice(0, 100);
};

export const getNewsById = async (id: number) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return response;
};

export const getCommentsById = async (id: number) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.json();
};
