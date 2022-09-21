//localStorage.setItem("clé","valeur")
// localStorage.getItem("clé")
// localStorage.clear()


if (localStorage.getItem("nom") != null) {
    h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;
}

bouton.onclick = () => {
    localStorage.setItem("nom", nom.value);

}