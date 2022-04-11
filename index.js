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
const arrNames = [
  "audino",
  "bagon",
  "baltoy",
  "banette",
  "bidoof",
  "braviary",
  "bronzor",
  "carracosta",
  "charmeleon",
  "cresselia",
  "croagunk",
  "darmanitan",
  "deino",
  "emboar",
  "emolga",
  "exeggcute",
  "gabite",
  "girafarig",
  "gulpin",
  "haxorus",
  "heatmor",
  "heatran",
  "ivysaur",
  "jellicent",
  "jumpluff",
  "kangaskhan",
  "kricketune",
  "landorus",
  "ledyba",
  "loudred",
  "lumineon",
  "lunatone",
  "machamp",
  "magnezone",
  "mamoswine",
  "nosepass",
  "petilil",
  "pidgeotto",
  "pikachu",
  "pinsir",
  "poliwrath",
  "poochyena",
  "porygon2",
  "porygonz",
  "registeel",
  "relicanth",
  "remoraid",
  "rufflet",
  "sableye",
  "scolipede",
  "scrafty",
  "seaking",
  "sealeo",
  "silcoon",
  "simisear",
  "snivy",
  "snorlax",
  "spoink",
  "starly",
  "tirtouga",
  "trapinch",
  "treecko",
  "tyrogue",
  "vigoroth",
  "vulpix",
  "wailord",
  "wartortle",
  "whismur",
  "wingull",
  "yamask",
];


function PokemonNames() {
  let result = [];
  var sorted = arrNames.sort(function (a, b) {
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    else if (a[a.length - 1] < b[b.length - 1]) return -1;
    return 0;
  });
  for (let i = 0; i < sorted.length; i++) {
    var first = sorted[i].charAt(0);
    var last = sorted[i].slice(-1);
    for (let j = 1; j < sorted.length; j++) {
      if (sorted[i] != sorted[j] && isNaN(first)) {
        if (first == sorted[j].slice(-1)) {
          result.unshift(sorted[j]);
          result.push(sorted[i]);
          sorted.splice(sorted[i], 1);
        } else if (last == sorted[j].charAt(0)) {
          result.unshift(sorted[i]);
          result.push(sorted[j]);
          sorted.splice(sorted[j], 1);
        }
      }
    }
  }
  return result;
}

var questions = [
  {
    type: "input",
    name: "option",
    message: `\nBienvenido!\nSelecciona el ejercicio que deseas ejecutar:\n(Presiona la letra seguida de la tecla "enter" para iniciar)\n\na. BuzzBazz\nb. Pokemon Names\n\n`,
  },
];

inquirer.prompt(questions).then((answers) => {
  if (answers['option'] == "a") {
    console.log(BuzzBazz());
  } 
  else if(answers['option'] == "b"){
    console.log(PokemonNames());
  }
  else {
    console.log(
      `Debes ingresar la letra 'a' o 'b' dependiendo del ejercicio que vas a ejecutar.
      \nLuego presiona enter para iniciar.`
    );
  }
});
