const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]



function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  ['kitten',...kittens];
    return kittens;
}

function prependKitten(name){

}

function removeLastKitten() {
  kittens.slice(0, kittens.length -1);
  return kittens;
}
