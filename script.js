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

 prizes.forEach( (el) => {
   prize = (data.customers[el]);
});
  for (let key in prize){
    arr.push(key);
  }

const bob = `${Object.keys(customers).map( key => `<div> ${ key }</div><div> ${ data.customers[key] }</div>`).join('')}`

const html = `
${Object.keys(customers).map( key =>
`<div>
${ key }
<ul>
<li><button>-</button> Foo ${data.customers[key].Foo} <button>+</button></li>
<li><button>-</button> Bar ${data.customers[key].Bar} <button>+</button></li>
<li><button>-</button> Bazz ${data.customers[key].Bazz} <button>+</button></li>
</ul>
</div>` ).join('')}
`
customerDiv.innerHTML = html;
}

renderCustomers();

const renderPrizes = () => {

  const prizeDiv = document.querySelector('#prizes');

  const prizes = data.prizes;

  const html = `${Object.keys(prizes).map( key => `<div> ${ key }</div><div> ${ data.prizes[key] }</div>`).join('')}`

  prizeDiv.innerHTML = html;
}

renderPrizes();

