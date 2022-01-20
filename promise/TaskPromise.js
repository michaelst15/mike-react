const box = document.getElementById('data');
const search = document.getElementById('Search');
const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-12-20&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2";
axios.get(url)                                         
  .then(response => {
    box.innerHTML = render(response.data);
  })                                          
  .catch(error => {
    box.innerHTML = message(error.message);
  });

         
function render(response) {
let box = '';
response.articles.forEach(data => {
  box +=  `<div class="container bg-dark mt-5">
              <div class="img"><img src="${data.urlToImage}" style="width:100%";/></div><br>
              <div class="title text-white"><u><i>${data.title}</i></u></div><br>
              <div class="publishedAt text-white">${data.publishedAt}</div><br>
              <div class="description text-white">${data.description}</div><br>
           </div>` ;
});
  return box;
};


// const url = "https://newsapi.org/v2/everything?q=apple&from=2022-01-10&to=2022-01-10&sortBy=popularity&apiKey=1e4d7358c26843d98c618391469576e2";
// axios.get(url)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });