import { testPinata, uploadFile } from "./scripts/pinata.js";

document.addEventListener("DOMContentLoaded", () => {
  // Teste la connexion à Pinata lors du chargement de la page
  testPinata();
  });
  
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Merci d’avoir cliqué !');
  });  