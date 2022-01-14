let cards = [];
const renderCards = (employees) =>{
    if (employees !== undefined){
    for (let i = 0; i < employees.length; i++) {
        const e = employees[i];
        let values = Object.values(e);
        let keys = Object.keys(e);
        let uniqueValue = '';
        if (keys[4]=== 'github'){
          uniqueValue = `<a href="https://github.com/${values[4]}">${values[4]}</a>`;
        }
        else{
          uniqueValue = values[4];
        }
        let card = `<div class="card text-center my-3" style="width: 18rem;">
        <div class="card-body bg-primary text-light">
          <h3 class="card-title">${values[0]}</h3>
          <p class="card-text">${values[3]}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${values[1]}</li>
          <li class="list-group-item">Email: <a href="mailto: ${values[2]}">${values[2]}</a></li>
          <li class="list-group-item">${keys[4]}: ${uniqueValue}</li>
        </ul>
      </div>`;
         cards.push(card);
        }} 
    return cards.join(" ")
};
    module.exports = renderCards;