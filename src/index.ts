let btn = document.getElementById("btn");
let dato1: string = document.getElementById("dato1");
let dato2: string = document.getElementById("dato2");

btn.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let altura: number = Number(dato2.value);
  let area = base * altura;
  console.log("el area es", area);
});
