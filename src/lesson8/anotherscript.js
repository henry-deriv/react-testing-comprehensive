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