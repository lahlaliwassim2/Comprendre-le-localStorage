//localStorage.setItem("clé","valeur")
// localStorage.getItem("clé")
// localStorage.clear()
//json.stringify(objet)
//json.parse(string)

const local = JSON.parse(localStorage.getItem("user")); 
if (local != null) {
    h1.textContent = `Bonjour ${local.nom}, votre age est ${local.age}`;
}

bouton.onclick = () => {
    const user = {
        nom : nom.value,
        age : age.value
    }
    localStorage.setItem("user",JSON.stringify(user));
    document.location.reload();
}
clear.onclick = () => {
    localStorage.clear()
    document.location.reload();
}