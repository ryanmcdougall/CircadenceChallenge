import React, { Component } from 'react';
import backcard from '../assets/cardback.png'
import $ from 'jquery'
import '../App.css'

export default class Game extends Component {
    constructor(){
        super();

        this.state = {
            cards: [],
            staged: [],
            finished: []

        }
    }

    componentDidMount(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then( res => res.json())
            .then( data => {
                console.log(data.cards)
                
                this.setState({
                    cards: data.cards
                })
        })
    }
    
    flipCard(id){
        for(let i = 0; i < this.state.cards.length; i++){
            if(this.state.cards[i].code === id){
                $(`.back`).toggleClass('flip')
                $('.front').toggleClass('flip')
            }
        }
        
        
       
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
        
        // const cards = document.querySelectorAll('.back')
        // cards.forEach(card => card.addEventListener('click', this.flipCard()))


        let mapped = this.state.cards.map( card => {
            return (
                <div key={card.code}>
                    <input type='checkbox' />          
                    <img src={backcard} onClick={() => this.flipCard(card.code)} alt='backcard' className={`back`}/>
                    <img src={card.image} onClick={() => this.flipCard(card.code)} alt='frontcard' className='front'/>
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