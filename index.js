const inquirer = require("inquirer");

// ..Primer ejercicio
const min = 0;
const max = 100;

function BuzzBazz() {
  let result = [];
  for (let i = min; i < max; i++) {
    if (i % 2 == 0) {
      result.push("buzz(" + i + ")");
    } else if (i % 5 == 0) {
      result.push("bazz(" + i + ")");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

// ..Segundo ejercicio
// ...


var questions = [
  {
    type: "input",
    name: "name",
    message:
      "Bienvenido!\nSelecciona el ejercicio que deseas ejecutar:\na. BuzzBazz\nb. Pokemon Names\n",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(BuzzBazz());
});
