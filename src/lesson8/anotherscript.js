export function totalPrice() {
  const table = document.getElementById('productsTable');
  console.log(table);
  const priceElems = table.querySelectorAll('td.price');

  let total = 0;
  for(let priceElem of priceElems) {
    const price = Number(priceElem.innerHTML);
    total += price;
  }
  return total;
}

export function addProduct() {
  const d = document.getElementById('description').value;
  const tdDescription = document.createElement('td');
  tdDescription.innerHTML = d;

  const p = document.getElementById('price').value;
  const tdPrice = document.createElement('td');
  tdPrice.innerHTML = p;

  const tr = document.createElement('tr');
  tr.appendChild(tdDescription);
  tr.appendChild(tdPrice);

  const table = document.getElementById('products');
  table.appendChild(tr);
}