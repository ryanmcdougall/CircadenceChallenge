export const add = (x, y) => x + y

export const cards = () => {
    const deck = 52; 
    
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then( res => {
        res.json()
    })
    .then( data => {
        deck = data.cards.length
    })
    return deck
}

export const handleClick = (value, code) => {
    let index = 0;
    let card = { value, code }
    let opened = []

    opened.push(card)

    return opened[0].value
}

export const handleClick2 = (value, code) => {
    let index = 0;
    let card = { value, code }
    let opened = []

    opened.push(card)

    return opened[0].code
}

export const check = (x, y, z, q) => {
    let opened = [{value: x, code: y}, {value: z, code: q}]

    if(opened[0].value === opened[1].value && opened[0].code !== opened[1].code){
        return "they match!"
    } else {
        return "they do not match..."
    }
}


