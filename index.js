let strOne = "Hello World";
let strTwo = "rld";
let arrOne = strOne.split(" ").slice(-1);
let strEdit = arrOne.join("");
console.log(strEdit);
console.log(strTwo);
if (strEdit.slice(strEdit.length - strTwo.length) === strTwo) {
  console.log("valid");
} else {
  console.log("invalid");
}
