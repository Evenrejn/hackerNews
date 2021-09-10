import axios from "axios";

export const newsAPI = {
  getNews() {
    return axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then((response) => response.data.sort((a, b) => b - a))
      .then((response) => {
        let newsArr = [];
        for (let i = 0; i <= 99; i++) {
          newsArr.push(
            axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${response[i]}.json?print=pretty`
            )
          );
        }
        return Promise.all(newsArr).then((response) => {
          return response.map((news) => {
            return news.data;
          });
        });
      });
  },

  getTargetNews(news) {
    return axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${news}.json?print=pretty`
      )
      .then((response) => response.data);
  },

  getComments(news) {
    return axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${news}.json?print=pretty`
      )
      .then((response) => {
        if (response.data.kids) {
          let kidsArr = [];
          response.data.kids.map((kids) => {
            kidsArr.push(
              axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${kids}.json?print=pretty`
              )
            );
          });
          return Promise.all(kidsArr).then((response) => {
            return response.map((kids) => {
              return kids.data;
            });
          });
        } else {
          return [];
        }
      });
  },

  getMoreComments(news) {
    return axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${news}.json?print=pretty`
      )
      .then((response) => {
        if (response.data.kids) {
          let kidsArr = [];
          response.data.kids.map((kids) => {
            kidsArr.push(
              axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${kids}.json?print=pretty`
              )
            );
          });
          return Promise.all(kidsArr).then((response) => {
            return response.map((kids) => {
              return kids.data;
            });
          });
        } else {
          return response;
        }
      });
  },
};
