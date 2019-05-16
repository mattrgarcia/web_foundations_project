const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};



const renderCustomers = () => {

const customerDiv = document.querySelector('#customers');

const customers = data.customers;

const prizes = Object.keys(customers);

let prize = '';
let arr = [];

const names = prizes.forEach( (el) => {
   prize = (data.customers[el]);
});
  for (let key in prize){
    arr.push(key);
  }

const html = `
${Object.keys(customers).map( key =>
`<div>
${ key }
<ul>
${arr.map( key => `<li><button>-</button> ${key} <button>+</button></li>`).join('')}
</ul>
</div>` ).join('')}
`
customerDiv.innerHTML = html;
}

renderCustomers();

const renderPrizes = () => {

  const prizeDiv = document.querySelector('#prizes');

  const prizes = data.prizes;

  const html = `${Object.keys(prizes).map ( key => `<div> ${ key }</div>`).join('')}`

  prizeDiv.innerHTML = html;
}

renderPrizes();

