import React from 'react';
import './QuoteMachine.css'
import { FiTwitter,FiArrowRight } from "react-icons/fi"

export class QuoteMachine extends React.Component {
    constructor(){
      super()
    }
  render(){
    return(
     
        <GetsQuote />
    
    )
  }
  
  }
  
  let quotesList = [
    {quote: 'No hay que ir para atrás ni para darse impulso',
    author:  "Lao Tse"
    },
    {quote: 'No hay caminos para la paz; la paz es el camino',
    author:  "Mahatma Gandhi"
    },
    {quote: 'Haz el amor y no la guerra',
    author:  "John Lennon"
    },
    {quote: 'Lo peor que hacen los malos es obligarnos a dudar de los buenos',
    author:  "Jacinto Benavente"
    },
    {quote: 'Aprende a vivir y sabrás morir bien',
    author:  "Steve Jobs"
    },
      {quote: 'El dinero no es la clave del éxito; la libertad para poder crear lo es',
    author:  "Nelson Mandela"
    },
      {quote: 'Cuanto más duramente trabajo, más suerte tengo',
    author:  "Gary Player"
    },
      {quote: 'Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan',
    author:  "Elon Musk"
    },
      {quote: 'Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro',
    author:  "Colin Powell"
    },
      {quote: 'Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso',
    author:  "Bill Cosby"
    }, 
    ]
    
    let getRandomNumber = () => Math.floor(Math.random() * 10)
  
  
    
  let firstQuote = () => {
    let num = getRandomNumber()
    return [quotesList[num].quote,quotesList[num].author]
  }
  
  
  
  class GetsQuote extends QuoteMachine {
    constructor(props){
      super(props)
        this.state = {
          quote: firstQuote()[0],
          author: firstQuote()[1],
   }
     this.setQuote = this.setQuote.bind(this)
    }
    
      setQuote()  {
        let num = getRandomNumber()
        this.setState(state => {
         return {quote: quotesList[num].quote,
                 author: quotesList[num].author,} 
          
        })
      }
      
   
    
  
    render(){
      return(
         <div id='quote-box'>
          
         <span id="text">{this.state.quote.trim()}.</span>     
         <span id="author">~{this.state.author}</span>
          <div id='footer-box'>
          <a href={`https://twitter.com/intent/tweet?text="${this.state.quote.trim()}." ${this.state.author} `} 
              target='_blank' id='tweet-quote'><FiTwitter/>  ¡Twittealo!</a>
              <button id="new-quote" onClick={this.setQuote}>Nueva cita  <FiArrowRight /></button>

            
          </div>
          
        </div>
        
      )
    }
    
  }
