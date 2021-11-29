// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let nbeDeCoups = 0; // Enregistre le nombre de coups du joueur
let nombreChoisi; // Enregistre le nombre choisi par le joueur

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  let instruction = document.createElement('div');
  if (nombre < nombreAleatoire) {
    // c'est plus
    instruction.textContent =
      '#' + nbeDeCoups + ' (' + nombreChoisi + ') ' + "C'est plus !";
    instruction.className = 'instruction plus';
  } else if (nombre > nombreAleatoire) {
    // c'est moins
    instruction.textContent =
      '#' + nbeDeCoups + ' (' + nombreChoisi + ') ' + "C'est moins !";
    instruction.className = 'instruction moins';
  } else {
    // Félicitations, vous avez trouvé le juste prix !
    instruction.textContent =
      '#' +
      nbeDeCoups +
      ' (' +
      nombreChoisi +
      ') ' +
      'Félicitations, vous avez trouvé le juste prix !';
    instruction.className = 'instruction fini';
    input.disabled = true;
  }
  // Ajout de l'élément devant les autres
  document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if (isNaN(input.value)) {
    error.style.display = 'inline';
  } else {
    error.style.display = 'none';
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == '') {
    input.style.borderColor = 'red';
  } else {
    nbeDeCoups++;
    input.style.borderColor = 'silver';
    nombreChoisi = input.value;
    input.value = '';
    verifier(nombreChoisi);
  }
});
