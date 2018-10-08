import React, { Component } from 'react';
import backcard from '../assets/cardback.png'
import '../App.css'

export default class Game extends Component {
    constructor(){
        super();

        this.state = {
            cards: [],
            opened: [],
            newCards: []
        }
        this.start = this.start.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.check = this.check.bind(this)
        this.newGame = this.newGame.bind(this)
    }

    componentDidMount(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then( res => res.json())
            .then( data => {
                console.log(data.cards)
                
                this.setState({
                    cards: data.cards
                })
                console.log(this.state.cards)
                this.start()
        })
    }
    
    handleClick(value, code){
        if(this.state.opened.length === 2){
            setTimeout(() => this.check(), 750)
        } else {
            let index = 0;
            let card = {value, code}
            let opened = this.state.opened
            let newCards = this.state.newCards

            console.log("state", this.state)

            for(let i = 0; i < this.state.newCards.length; i++){
                if(this.state.newCards[i].card.code === code){
                    index = i;
                    console.log("index:", index)
                }
            }

            newCards[index].close = false;
            opened.push(card)

            this.setState({
                opened: opened
            })
        }

        if(this.state.opened.length === 2){
            setTimeout(() => this.check(), 750)
        }
    }

    check(){
        let opened = this.state.opened;
        let newCards = this.state.newCards;
        let index1 = 0;
        let index2 = 0;

        console.log(opened)

        if(opened[0].value === opened[1].value && opened[0].code !== opened[1].code){
            for(let i = 0; i < newCards.length; i++){
                if(newCards[i].card.code === opened[0].code){
                    index1 = i;
                } else if (newCards[i].card.code === opened[1].code){
                    index2 = i
                } 
            }
            console.log("they match!!!")
                console.log("index1:::::", index1, "index2:::::", index2)
                newCards[index1].complete = true
                newCards[index2].complete = true
        } else {

            let index1 = 0;
            let index2 = 0;
            
            for(let i = 0; i < newCards.length; i++){
                if(newCards[i].card.code === opened[0].code){
                    index1 = i;
                } else if (newCards[i].card.code === opened[1].code){
                    index2 = i
                } 
            }
            console.log("no match :(")
            console.log("Index 1 & 2 ::::::", index1, index2)
            
            newCards[index1].close = true
            newCards[index2].close = true
        }

        this.setState({
            opened: [],
            newCards
        })
    }

    start(){
        let newCards = []
        
        this.state.cards.map( card => {
            console.log("value:", card.value)
            newCards.push({
                card,
                close: true,
                complete: false,
                fail: false
            })
        });
    
        this.setState({
            newCards: newCards
        })
        console.log(this.state.newCards)
    }    

    newGame(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then( res => res.json())
            .then( data => {
                console.log(data.cards)
            
                this.setState({
                    cards: data.cards
                })
        })       
    }

    render() { 
        let mapped = this.state.newCards.map( card => {
            return (
                <div key={card.card.code} className = {'card' + (!card.close ? ' opened' : '') + (card.completed ? ' matched' : '')} onClick={()=> this.handleClick(card.card.value, card.card.code)}>         
                    <img src={backcard} alt='backcard' className='back'/>
                    <img src={card.card.image} className="front" alt=''/>              
                </div>
            )
        })
      return (
        <div>

            <button onClick={() => this.newGame()}>Restart the Game!</button>
          
            <div className='game'>
                <div className='cards'>
                    {mapped}
                </div>
            </div>

        </div>
      );
    }
  }

