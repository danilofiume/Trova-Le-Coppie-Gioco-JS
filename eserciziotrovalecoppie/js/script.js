document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.memory-container');
  const message = document.querySelector('.message');
  

  

  // array di immagini
  const cards = [
    './img/memory-1.jpg',
    './img/memory-2.jpg',
    './img/memory-3.jpg',
    './img/memory-4.jpg',
    './img/memory-1.jpg',
    './img/memory-2.jpg',
    './img/memory-3.jpg',
    './img/memory-4.jpg',
    './img/memory-5.jpg',
    './img/memory-6.jpg',
    './img/memory-7.jpg',
    './img/memory-8.jpg',
    './img/memory-5.jpg',
    './img/memory-6.jpg',
    './img/memory-7.jpg',
    './img/memory-8.jpg',
  ]

  function random() {
    // Math.random() genera un numero casuale tra 0 e 1 eliminando -0.5 abbiamo un numero casuale tra -0.5 e 0.5
    return Math.random() - 0.5
  }
  
  // sort ordina un array usando una nostra funzione
  cards.sort(random);

  // array che conterrà gli elementi del DOM
  const cardDOM = []





  let cardSelected = undefined

  let counter = 0

  

  // creiamo gli elementi nel DOM
  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = '<img src="' + element + '" alt="">';
    container.append(card);

    //salviamo gli elementi del DOM nell'array per riutilizzarli
    cardDOM.push(card);


    const timeout = setTimeout(function(){

      card.classList.add('active')

      const timeout2 = setTimeout(function(){

        card.classList.remove('active')

        message.innerHTML = ''
        checkcard()
  
        
  
      },3000)
  
    },3000)

    

    function checkcard() {

      card.addEventListener('click', function () {


        if(this.classList.contains('active') === false) {
          

          //se è un primo click nella verifica di una coppia di carte assegno a cardSelected il suo valore
            if(cardSelected === undefined) {
                cardSelected = this;
                this.classList.add('active');
              } 
            
            //se è un secondo click nella verifica e le carti sono uguali, aumento il contatore e resetto la carta selezionata  
            else if (cardSelected.innerHTML === this.innerHTML){
                console.log('nice');
                this.classList.add('active');
                cardSelected = undefined
                counter++
                console.log(counter);
                //se ho scoperto tutte le coppie ho vinto
                if (counter == 8) {
                  message.innerHTML = 'Complimenti! Hai vinto!'
                }
                
              } 
              
             //se le carte selezionate sono diverse gli diamo un messaggio con il counter, poi dopo 3 secondi si resetta tutto
            else if ( cardSelected.innerHTML !== this.innerHTML) {
      
                console.log('none');
                this.classList.add('active');

                message.innerHTML = 'Hai perso! Coppie trovate:' + counter


                for (let index = 0; index < cardDOM.length; index++) {
                  const element = cardDOM[index]
                  element.style.pointerEvents = 'none'
                }
                
                const timeout3 = setTimeout(function(){

                  for (let index = 0; index < cardDOM.length; index++) {
                    const element = cardDOM[index];
                    element.classList.remove('active')
                    element.style.pointerEvents = 'auto'
                    
                  
                  }

                  counter = 0
                  message.innerHTML = 'Riprova'
                

                  //resetta variabile d appoggio diventa indefnita in modo tale dal prossimo click rientri nel primo if
                  cardSelected = undefined

                

                },3000)
                

              
                
                
              
              }
        }    
      })

    }

  }



});





  







