import { totalPrice } from './anotherscript';
const fs = require('fs');
const path = require('path');
fs.readFileSync(path.resolve(__dirname, './another.html'), 'utf8');

describe('somehting', () => {
  beforeEach(() => totalPrice());
  console.log(totalPrice());
})