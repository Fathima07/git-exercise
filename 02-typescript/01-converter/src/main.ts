let cel = <HTMLInputElement>document.getElementById("cel");
let fer = <HTMLInputElement>document.getElementById("fer");

let celToFer = (celValue: number) => {
  var outResult = Number(celValue * 1.8 + 32);
  fer.value = outResult.toString();
};

let ferToCel = (celValue: number) => {
  var outResult = Number((celValue-32) * (5/9));
  cel.value = outResult.toString();
};
cel.addEventListener("input", (value) => {
  celToFer(Number(cel.value)); //convert to number and send to compute function
});
fer.addEventListener("input", (value) => {
  ferToCel(Number(fer.value)); //convert to number and send to compute function
});
