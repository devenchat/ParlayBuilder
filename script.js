// JavaScript source code
/*var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "7be5d537660c0415f6c112114d7cbdad");
myHeaders.append("x-rapidapi-host", "v1.baseball.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.baseball.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/

fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?bookmakers=betmgm&markets=spreads&apiKey=5f64d017389463a8158e8d4e0d5150a0")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));