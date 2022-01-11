const url = "https://newsapi.org/v2/everything?q=apple&from=2022-01-10&to=2022-01-10&sortBy=popularity&apiKey=1e4d7358c26843d98c618391469576e2";
axios.get(url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
