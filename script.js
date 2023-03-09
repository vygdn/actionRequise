function demandeAge() {
    var age = prompt("Quel est votre âge en années ?");
    if (age >= 18) {
      alert("Bravo! Tu peux accéder à notre site de campagne!");
    } else {
      alert("Désolé, vous devez avoir au moins 18 ans pour accéder à notre site.");
      window.location.href = "https://www.google.com/"; // redirige l'utilisateur vers Google
    }
  }
