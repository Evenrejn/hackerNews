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
    // .catch(error => console.log(error))}
  },

  getTargetNews(news) {
    //debugger;
    return axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${news}.json?print=pretty`
      )
      .then((response) => response.data)
      .then((data) => {
        let arrKids = [data];
debugger;
        if (data.hasOwnProperty("kids")) {
          let getAllComments = (id) => {
            //if (data.hasOwnProperty("kids")) {
              arrKids.push(
                axios.get(
                  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
                ).then((response) => {
                                      if (response.hasOwnProperty("kids")) {
                                        arrKids.push(response)
                                      }})
                                    //}
              )
              //getAllComments(id)
              // if (data.hasOwnProperty("kids")) {
              //   getAllComments(id)
          }
          

        //if (data.hasOwnProperty("kids")) {
          for (let i = 0; i < data.kids.length; i++) {
            getAllComments(data.kids[i]);
            //  arrKids.push(getComments(data.kids[i]));
          }

        }
           return Promise.all(arrKids).then((response) => {
             return response;

            // return response.map((newsWithComments) => {
            //   return [arrKids, data];
            // });
           });
      })
  },

  // getComments(id) {
  //   debugger;
  //   return axios
  //     .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  //     .then((response) => response);
  // },
};
