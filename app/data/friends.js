// Friends (DATA)
// =============================================================
var friends = [
  {
    name: "Bethany",
    photo: "https://i.pinimg.com/736x/dd/53/86/dd538655d02876ea6e9c73db8777ebca--black-betta-fish.jpg",
    scores: [
      2,
      2,
      4,
      4,
      2,
      5,
      1,
      5,
      1,
      4
    ]
  },
  {
    name: "BB8",
    photo: "http://vignette2.wikia.nocookie.net/starwars/images/6/68/BB8-Fathead.png/revision/latest",
    scores: [
      5,
      1,
      3,
      5,
      3,
      1,
      5,
      3,
      1,
      1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;