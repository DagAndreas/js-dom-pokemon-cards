console.log(data)

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0])

const cardsList = document.querySelector(".cards")

/*
item
    name
    sprites:
        other
            "official-artwork"
                front_default

*/
data.forEach((pokemonItem) => {
  cardsList.appendChild(createCard(pokemonItem))
})

// item.sprites.other["official-artwork"].front_default
function createCard(item) {
  let cardLi = document.createElement("li")
  cardLi.className = "card"

  let liH2 = document.createElement("h2")
  liH2.className = "card--title"
  liH2.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1)
  cardLi.appendChild(liH2)

  // Create the button element
  let h2Button = document.createElement("button")
  h2Button.className = "button"

  // Create the image element
  let h2Img = document.createElement("img")
  h2Img.width = "256"
  h2Img.height = "256"
  h2Img.className = "card--img"
  h2Img.src = item.sprites.other["official-artwork"].front_default


  h2Button.appendChild(h2Img)
  cardLi.appendChild(h2Button)

  h2Button.addEventListener("click", function () {
    const currentSrc = h2Img.src
    const defaultImg = item.sprites.other["official-artwork"].front_default
    const alternateImg = item.sprites.other["dream_world"].front_default

    // Toggle between the default and alternate image
    h2Img.src = currentSrc === defaultImg ? alternateImg : defaultImg
  })

  // Create the stats list
  let liUl = document.createElement("ul")
  liUl.className = "card--text"

  // Iterate over the item.stats array to display stats
  item.stats.forEach((stat) => {
    let statLi = document.createElement("li")
    statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
    liUl.appendChild(statLi)
  })

  cardLi.appendChild(liUl)

  return cardLi
}
