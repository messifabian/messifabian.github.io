// VScode automatically uses copilot for inline code generation and used ChatGPT for getting the moves and adding pokemon to team
document.querySelector('#searchButton').addEventListener('click', function() {

    var input = document.querySelector('#nameInput').value
    input = input.toLowerCase()
    input = input.trim()

    if (input == '') {
        alert('Please enter a pokemon name or number!')
        return
    }

    fetch('https://pokeapi.co/api/v2/pokemon/' + input)
    .then(function(response) {
        if (response.ok == false) {
            throw new Error('Pokemon not found')
        }
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        showPokemon(data)
    })
    .catch(function(error) {
        console.log(error)
        alert('Pokemon not found! Check your spelling and try again')
    })

})

var currentPokemon = null;

function showPokemon(data) {
  currentPokemon = data;

  var img = document.querySelector('#pokeImage')
  img.src = data.sprites.front_default
  img.style.display = 'block'


  var audio = document.querySelector('#pokeAudio')
  audio.src = data.cries.latest
  audio.style.display = 'block'
  audio.load()

  var allMoves = []
  for (var i = 0; i < data.moves.length; i++) {
      allMoves.push(data.moves[i].move.name)
  }

  var move1 = document.querySelector('#move1')
  var move2 = document.querySelector('#move2')
  var move3 = document.querySelector('#move3')
  var move4 = document.querySelector('#move4')

  var allDropdowns = [move1, move2, move3, move4]

  for (var i = 0; i < allDropdowns.length; i++) {
      allDropdowns[i].innerHTML = ''

      for (var j = 0; j < allMoves.length; j++) {
          var option = document.createElement('option')
          option.value = allMoves[j]
          option.textContent = allMoves[j]
          allDropdowns[i].appendChild(option)
      }
  }

}

document.querySelector('#addButton').addEventListener('click', function() {
    if (currentPokemon == null) {
        alert('Search for a pokemon first!')
        return
    }
    var move1 = document.querySelector('#move1').value
    var move2 = document.querySelector('#move2').value
    var move3 = document.querySelector('#move3').value
    var move4 = document.querySelector('#move4').value
    var newRow = document.createElement('tr')

    var imgCell = document.createElement('td')
    var img = document.createElement('img')
    img.src = currentPokemon.sprites.front_default
    img.width = 80
    imgCell.appendChild(img)

    var movesCell = document.createElement('td')
    var moveList = document.createElement('ul')

    var allSelectedMoves = [move1, move2, move3, move4]

    for (var i = 0; i < allSelectedMoves.length; i++) {
        var selectedMove = document.createElement('li')
        selectedMove.textContent = allSelectedMoves[i]
        moveList.appendChild(selectedMove)
    }

    movesCell.appendChild(moveList)
    newRow.appendChild(imgCell)
    newRow.appendChild(movesCell)

    var table = document.querySelector('#teamTable')
    table.appendChild(newRow)

})