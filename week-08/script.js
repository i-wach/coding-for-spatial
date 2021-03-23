let one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let two = [
    "a pack of dogs",
    "a clowder of cats",
    "a gaze of raccoons",
    "a mischief of rats",
    "a flight of pidgeons"
  ];
  
  let three = [
    "on a beach",
    "in the forest",
    "on a mountaintop",
    "in the desert",
    "deep in the ocean"
  ];
  
  let four = ["dusk", "dawn", "noon", "midnight", "the witching hour"];
  
  // console.log(elementOne);
  // console.log(elementTwo);
  // console.log(elementThree);
  
  function randomPoem() {
    //   generate random elements from arrays
    let elementOne = one[Math.floor(Math.random() * one.length)];
    let elementTwo = two[Math.floor(Math.random() * two.length)];
    let elementThree = three[Math.floor(Math.random() * three.length)];
    let elementFour = four[Math.floor(Math.random() * four.length)];
    //   grab div from DOM
    let poem = document.querySelector(".poem");
    //   create new p element
    let paragraph = document.createElement("p");
    //   add text to new element
    paragraph.textContent = `${elementOne} for ${elementTwo} ${elementThree} at ${elementFour}`;
    //   add p element to div
    poem.appendChild(paragraph);
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", randomPoem);