import imageCoeurVide from './images/Heartvide.png'
import imageCoeurRemplis from './images/HeartRemplis.png'

export function favorite(containerName, counter, carte){

    const filtre = document.querySelector(".filtreFavoris")

    filtre.innerText = `Favoris (${counter.value})`

    let bouton = document.createElement('button')
    bouton.className = "boutonFavoris"

    let img = document.createElement("img")
    img.src = imageCoeurVide   // plus de chaîne de caractères, on utilise la variable importée
    img.alt = "favoris"
    img.className = "heart"

    bouton.appendChild(img)
    containerName.appendChild(bouton)

    bouton.addEventListener("click", () =>{
        if(img.src.includes("Heartvide")){   // ← on adapte aussi ce check
            img.src = imageCoeurRemplis
            counter.value ++
            carte.dataset.favori = "true"
        } else {
            img.src = imageCoeurVide
            counter.value --
            carte.dataset.favori = "false"
        }
        filtre.innerText = `Favoris (${counter.value})`
    })
}
