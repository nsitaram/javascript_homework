console.log('movies-and-jurassic-park.js is connected! woohoo!');

// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};


// Do the tasks down here!

var meanGirls = {
  title: 'Mean Girls',
  director: 'Mark Waters',
  actors: ['Lindsay Lohan', 'Rachel McAdams', 'Tina Fey'],
  releaseYear: 2004,
  duration: 97
};

console.log(meanGirls.title);
console.log(meanGirls.director);
console.log(meanGirls.releaseYear);

meanGirls.duration = meanGirls.duration + 25;

console.log(meanGirls.duration);

var guestOfHonor = 'Dr. Alan Grant';
var cleverGirl = snakewaterMontana.specimen;



// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!

var nicaraguanSpecimens = ['Tyrannosaurus Rex', 'Stegosaurous', 'Triceratops', 'Velociraptor'];
var favoriteSpecimen = nicaraguanSpecimens[3];

nicaragua.annual_budget = nicaragua.annual_budget + 250000;


// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
};

// Do the tasks down here!

var mexicoMineDepth = hammondsMines.mexico.depth;

var buenosAiresBudget = hammondsMines.buenos_aires.annual_budget;
console.log(buenosAiresBudget);

var buenosAiresSpecimens = hammondsMines.buenos_aires.specimens;

hammondsMines.nicaragua = nicaragua;

var mexicoBudget = hammondsMines.mexico.annual_budget;
var nicaraguaBudget = hammondsMines.nicaragua.annual_budget;

var totalCost = buenosAiresBudget + mexicoBudget + nicaraguaBudget;

console.log(hammondsMines.mexico.specimens[1]);





