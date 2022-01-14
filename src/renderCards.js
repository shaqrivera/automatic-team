let cards = [];
const renderCards = (employees) =>{
    if (employees !== undefined){
    for (let i = 0; i < employees.length; i++) {
        const e = employees[i];
        let values = Object.values(e);
        let keys = Object.keys(e);
        let card = `<div class="card text-center my-3" style="width: 18rem;">
        <div class="card-body bg-primary text-light">
          <h3 class="card-title">${values[0]}</h3>
          <p class="card-text">${values[3]}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${values[1]}</li>
          <li class="list-group-item">Email: ${values[2]}</li>
          <li class="list-group-item">${keys[4]}: ${values[4]}</li>
        </ul>
      </div>`;
         cards.push(card);
        }} 
    return cards.join(" ")
};
    module.exports = renderCards;