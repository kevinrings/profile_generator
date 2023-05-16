const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  answers.name = name;

  rl.question("What's an activity you like doing? ", (activity) => {
    answers.activity = activity;

    rl.question("What do you listen to while doing that? ", (music) => {
      answers.music = music;

      rl.question("Which meal is your favorite (e.g., dinner, brunch, etc.)? ", (meal) => {
        answers.meal = meal;

        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          answers.food = food;

          rl.question("Which sport is your absolute favorite? ", (sport) => {
            answers.sport = sport;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              answers.superpower = superpower;

              console.log("Thank you for your valuable feedback:");
              console.log(answers);

              rl.close();
            });
          });
        });
      });
    });
  });
});