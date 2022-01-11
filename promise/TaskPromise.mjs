import { get } from "./axios";
get(
    "https://newsapi.org/v2/everything?q=apple&from=2022-01-10&to=2022-01-10&sortBy=popularity&apiKey=1e4d7358c26843d98c618391469576e2"
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
