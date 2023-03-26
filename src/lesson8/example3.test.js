import { screen, userEvent } from '@testing-library/react';
import { totalPrice, addProduct } from './anotherscript';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './another.html'), 'utf8');

describe('somehting', () => {
  beforeEach(() => { 
    document.documentElement.innerHTML = html.toString();
    document.getElementById('add').onclick = addProduct;
  });
  
  test('add product', () => {
    document.getElementById('description').value = 'Skis';
    document.getElementById('price').value = '800';
    document.getElementById('add').click();

    const table = document.getElementById('products');
    const trs = table.getElementsByTagName('tr');
    expect(trs.length).tobe(1);

    const td0 = trs[0].getElementsByTagName('td')[0];
    expect(td0).toBe('skis');

    const td1 = trs[0].getElementsByTagName('td')[1];
    expect(td1).toBe('800');
  });
});

test('getbyrole example', () => {
  document.body.innerHTML = `<button>Submit form</button>`;
  const el = screen.getByRole('button', { name: /submit/i});
  expect(el).toBeTruthy();
  expect(el.innerHTML).toBe('Submit form');
});

test('getbyrole example 2', () => {
  document.body.innerHTML= `
    <table>
      <caption>Products table</caption>
      <tr><td>Skis</td><td>800</td></tr>
      <tr><td>Boots</td><td>300</td></tr>
    </table>
  `;

  const el = screen.getByRole('table', {name: /products/i});
  expect(el.getElementsByTagName('tr').length).toBe(2);
});

test('getByLabelText', () => {
  document.body.innerHTML = `
    <label for="price">Price:</label>
    <input id="price" value="300"/>
  `;

  const el = screen.getByLabelText(/price/i);
  expect(el.value).toBe('300');
});

test('getByPlaceholderText', () => {
  document.body.innerHTML = `
    <label for="price">Price:</label>
    <input id="price" placeholder="Enter price" value="25/>
  `;

  const el = screen.getByPlaceholderText(/enter price/i);
  expect(el.value).toBe('25');
});

test('getByText', () => {
  document.body.innerHTML = `
    <div>Wales win the world cup in 2022</div>
  `;

  const el = screen.getByText(/2022/i);
  expect(el.innerHTML).toMatch(/wales/i);
});

describe('Handle events', () => {
  beforeEach(() => {
    document.body.innerHtml = 
      `<h1>Products</h1>
      <p>
        <label for='description'>Description</label>
        <input id='description' type='text' />
      </p>
      <p>
        <label for='price'>Price</label>
        <input id='price' type='text' />
      </p>
      <p>
        <button id='add'>Add Product</button>
      </p>
    <table id='products'>
      <caption>Products</caption>
    </table>`
    const addButton = screen.getByRole('button', {name: /add product/i});
    addButton.onClick = addProduct;
  });
  
  test('add product', () => {
    //Mimic user input
    const inputDescription = screen.getByLabelText('Description');
    const inputPrice = screen.getByLabelText('Price');
    inputDescription.value = 'skis';
    inputPrice.value = '800';

    //Mimic button click
    const addButton = screen.getByRole('button', {name: /add product/i});
    userEvent.click(addButton);

    //Verify<tr. has been added to table
    const table = screen.getByRole('table', {name: /products/i});
    const rows = screen.getAllByRole(table, 'row');
    expect(rows.length).toBe(1);

    // Verify the <tr> has a <td class="description">skis</td>
    const tds = screen.getAllByRole(rows[0], 'cell');
    expect(tds.length).toBe(2);
    expect(tds[0]).toHaveClass('description');
    expect(tds[0]).toHaveTextContent('skis');
    expect(tds[1]).toHaveClass('price');
    expect(tds[1]).toHaveTextContent('800');

    // Verify input boxes are empty and description text box has a focus
    expect(inputDescription).toHaveValue('');
    expect(inputPrice).toHaveValue('');
    expect(inputDescription).toHaveFocus();
  })
});

