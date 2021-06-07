let cel = <HTMLInputElement>document.getElementById("cel");
let fer = <HTMLInputElement>document.getElementById("fer");

let compute = (celValue: number) => {
  var outResult = Number(celValue * 1.8 + 32);
  fer.value = outResult.toString();
};
cel.addEventListener("input", (value) => {
  compute(Number(cel.value)); //convert to number and send to compute function
});
