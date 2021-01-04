console.log('connected');

function rpsGame(yourChoice) {
  //console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  var botChoice = numberToChoice(randomInt());

  // var refresh = document.getElementById('refrest_div');
  // refresh.innerHTML = "<button onClick='window.location.reload();' class='btn-success mybtn'>Refresh Page</button>"
  // // console.log(humanChoice + '\n' + botChoice);
  results = decideWinner(humanChoice, botChoice);
  message = finalmessage(results[0]);
  // console.log(message);
  rpsFrontEnd(yourChoice, botChoice, message);
}

function randomInt() {
  return (Math.floor(Math.random() * 3));
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
  var rpsdatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
  };

  var humanScore = rpsdatabase[humanChoice][botChoice];
  var botScore = rpsdatabase[botChoice][humanChoice];

  return [humanScore, botScore];
}

function finalmessage(yourScore) {
  if (yourScore === 0) {
    return { 'message': 'You Lost!', 'color': 'red' };
  }
  else if (yourScore === 0.5) {
    return { 'message': 'You Tied!', 'color': 'yellow' };
  }
  else {
    return { 'message': 'You Won!', 'color': 'Green' };
  }
}

function rpsFrontEnd(yourChoice, botChoice, message) {
  var imageDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  };

  // Remove previous elements
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  // create new div elements
  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  var temp = yourChoice.src;
  var temp1 = imageDatabase[botChoice];
  // console.log(temp1);

  // console.log(temp);
  //console.log(temp1);
  console.log(message['color']);

  humanDiv.innerHTML = "<img src='" + temp + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)' >";

  messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>";

  botDiv.innerHTML = "<img src='" + temp1 + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)' >";


  //console.log(humanDiv);
  //console.log(botDiv);

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}