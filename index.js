const chalk = require('chalk');
var readlineSync = require('readline-sync');
var username = readlineSync.question('Enter Your Name: ');


console.log("Hi ",chalk.green(username))
console.log(chalk.red(' Lets see how well you know Manav.'));
console.log('Points:  Correct: +3   Incorrect: -1')
console.log('');



var questions = [
   {question: `What is the last name of Manav?`,A: 'Gupta', B:
   'Sharma', C:'Thakur',answer: 'a'},
   {question: `In which city Manav lives?`,A: 'Shimla', B:
   'Manali', C:'Chamba',answer: 'c'},
   {question: `What is Manav's Profession?`,A: 'Programmer', B:'Marketing Executive', C:'Data Scientist',answer: 'a'},
   {question: `In the following seasons which one is Manav's favorite?`,A: 'Summer', B:
   'Winter', C:'Monsoon',answer: 'b'},
   {question: `Manav is a huge supporter of..`,A: 'MS Dhoni', B:
   'Gautam Gambhir', C:'Rohit Sharma',answer: 'c'},

 ];
var score = 0;
var best = 5;

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.bgBlue(n+'. '+questions[i].question));
  console.log('[a,b,c]');
  console.log(chalk.cyan('A: '+questions[i].A));
  console.log(chalk.cyan('B: '+questions[i].B));
  console.log(chalk.cyan('C: '+questions[i].C));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen('Correct'));
    score = score + 3;
  }else{
    console.log(chalk.bgRed('Incorrect'));
    score = score -1;
    console.log("write answer is: ",questions[i].answer.toUpperCase())
  }
}
if(score > best){
    console.log(chalk.yellow('Congratulations ! This is the best score. Send us screenshot so that we can update it for other players. '))
    best = score
  }
console.log(chalk.red(username +' your final score is: '+ score));



