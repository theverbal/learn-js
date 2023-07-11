// get username
let userName = 'Casey';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// get question to answer
let userQuestion = 'Am I Michael Jackson?'

// repeat question depending on whether a name was supplied
userName ? console.log(`${userName}, you asked ${userQuestion}`) : console.log(`You asked ${userQuestion}`);

// calculate 8-ball response
let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber); // testing random number
let eightBall = ''

// 8-ball responses
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Invalid response');
    break;
}

// print response
console.log(eightBall);
