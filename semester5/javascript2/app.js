import { add, multiply } from "./math.js";

function hitung() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  let sum = add(number1, number2);
  let kali = multiply(number1, number2);

  document.getElementById("result").innerHTML = `
        <p>Hasil penjumlahan dari ${number1} + ${number2} = ${sum}</p>
        <p>Hasil perkalian dari ${number1} * ${number2} = ${kali}</p>
    `;
}

document.getElementById("hitung").addEventListener
("click", hitung);
