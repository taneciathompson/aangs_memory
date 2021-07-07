// Worked with House Gardener

//reset button
document.querySelector('button').addEventListener('click', reset)
//grid array
document.addEventListener('DOMContentLoaded', () =>{
    const cardArray = [
        {
            name: 'Aang' ,
            img: '../img/Aang.png'
        },
        {
            name: 'Aang' ,
            img: '../img/Aang.png'
        },
        {
            name: 'Zuko' ,
            img: '../img/Zuko.webp'
        },
        {
            name: 'Zuko' ,
            img: '../img/zuko.webp'
        },
        {
            name: 'Katara' ,
            img: '../img/katara.jpg' 
        },
        {
            name: 'Katara' ,
            img: '../img/katara.jpg'
        },
        {
            name: 'Sokka' ,
            img: '../img/sokka.jpg'
        },
        {
            name: 'Sokka' ,
            img: '../img/sokka.jpg'
        },
        {
            name: 'Toph' ,
            img: '../img/Toph.jpg'
        },
        {
            name: 'Toph' ,
            img: '../img/Toph.jpg'
        }
    ]
    //shuffles cards
    cardArray.sort(() => 0.5 - Math.random())

    
//grid
    const grid = document.querySelector('.grid')
    const winningDisplay = document.querySelector('#result') //doesn't work
    let cardsChosen = []
    let cardsChosenId = []
    let matchesWon = []
    function makeBoard() {
       for (let i = 0; i < cardArray.length; i++) {
           let match = document.createElement('img')
       match.setAttribute('src', '../img/appa.png')
       match.setAttribute('data-id', i)
       match.addEventListener('click', flipCard)
        grid.appendChild(match)
       }
       //looks for matches
    }
     function checkForMatch() {
         let matches = document.querySelectorAll('img')
         const optionOneId = cardsChosenId[0]
         const optionTwoId = cardsChosenId[1]
         if (cardsChosen[0] === cardsChosen[1]) {
             alert('You have a match!')
             matches[optionOneId].classList.add("hidden")
             matches[optionTwoId].classList.add("hidden")
             matchesWon.push(cardsChosen)

         }else{
             matches[optionOneId].setAttribute('src', '../img/appa.png')
             matches[optionTwoId].setAttribute('src', '../img/appa.png')
             alert('Not a Match, Try Again!')
         }
         cardsChosen = []
         cardsChosenId = []
         winningDisplay.textcontent = matchesWon.length
         if (matchesWon.length === cardArray.length/2)
            alert('Hooray! You found all the matches!!')
     }
//flips cards

      function flipCard() {
          let cardId = this.getAttribute('data-id')
          cardsChosen.push(cardArray[cardId].name)
          cardsChosenId.push(cardId)
          this.setAttribute('src', cardArray[cardId].img)
          if (cardsChosen.length === 2) {
              setTimeout(checkForMatch, 1500)
          }
        }
    
    
     
    makeBoard ()


})
//reset function
 function reset() {
     location.reload()
 }

