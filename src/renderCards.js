let cards = [];
const renderCards = (employees) =>{
    if (employees !== undefined){
    for (let i = 0; i < employees.length; i++) {
        const e = employees[i];
        let values = Object.values(e);
        let keys = Object.keys(e);
        let card = `<card class ='card'><h1 id='name'>${values[0]}</h1><h2 id='role'>${values[3]}</h2><p id='id'>ID: ${values[1]}</p><p id='email'>Email: ${values[2]}</p><p id='unique'>${keys[4]}: ${values[4]}</p></card>`;
         cards.push(card);
        }} 
    return cards
};
    module.exports = renderCards;