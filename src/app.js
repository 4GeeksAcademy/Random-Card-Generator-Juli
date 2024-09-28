/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let intervalId;
let customHeigth = 480;
let customWidth = 350;

window.onload = function() {
  //funciones de los botones//
  document.querySelector("button").addEventListener("click", generarCartaNueva);
  document.querySelector("#button-1").addEventListener("click", () => {
    intervalId = setInterval(generarCartaNueva, 10000);
  });

  document.querySelector("#button-2").addEventListener("click", () => {
    clearInterval(intervalId);
  });

  document.querySelector("#input-height").addEventListener("change", event => {
    customHeigth = event.target.value;
    document.querySelector(".card").style.height = customHeigth + "px";
  });

  document.querySelector(".card").style.width = customWidth + "px";
  document.querySelector("#input-width").addEventListener("change", event => {
    customWidth = event.target.value;
    document.querySelector(".card").style.width = customWidth + "px";
  });

  //elementos de las cartas//
  let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

  function generarCartaNueva() {
    let cardPintas = ["♦", "♥", "♠", "♣"];

    // Cartas aleatorias //
    function randomCard(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    const cardAleatorias = randomCard(cardValues);
    document.querySelector(".cardValues").innerHTML = cardAleatorias;

    // Pintas aleatorias //
    const pintasAleatorias = randomCard(cardPintas);
    document.querySelectorAll(".pinta").forEach(elementoPinta => {
      elementoPinta.innerHTML = pintasAleatorias;
      if (pintasAleatorias == "♥" || pintasAleatorias == "♦") {
        // cambiamos los colores con style //
        elementoPinta.style.color = "red";
      } else {
        elementoPinta.style.color = "black";
      }
    });
  }
  generarCartaNueva();
};
