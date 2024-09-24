
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


const cardsList = document.querySelector(".cards")


/*
item
    name
    sprites:
        other
            "official-artwork"
                front_default

*/
data.forEach(pokemonItem => {
  cardsList.appendChild(createCard(pokemonItem))
});



// item.sprites.other["official-artwork"].front_default
function createCard(item){
    let cardLi = document.createElement('li')
    cardLi.className = "card"

    
    let liH2 = document.createElement('h2')
    liH2.className = "card--title"
    liH2.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    cardLi.appendChild(liH2)

    

    let h2Img = document.createElement('img')
    h2Img.width = 256
    h2Img.className = "card--img"
    h2Img.src = item.sprites.other["official-artwork"].front_default
    cardLi.appendChild(h2Img)

    // Create the stats list
    let liUl = document.createElement('ul')
    liUl.className = "card--text"

    // Iterate over the item.stats array to display stats
    item.stats.forEach(stat => {
        let statLi = document.createElement('li')
        statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        liUl.appendChild(statLi)
    })
    
    cardLi.appendChild(liUl)

    return cardLi
}
/*
<li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li>
*/