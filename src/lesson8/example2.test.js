const fs = require('fs');
const html = fs.readFileSync('./index.html')

describe('Loading an HTML File', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('document node exists', () => {
    expect(document).not.toBeUndefined();
  });

  test('document element exists', () => {
    const docElm = document.documentElement;
    expect(docElm).not.toBeUndefined();
    expect(docElm.nodeName).toMatch(/html/i);
  });

  test('access element by id', () => {
    const p1 = document.getElementById('hello');
    expect(p1.innerHTML).toBe(`paragraph says <b>hello</b>`);
  });

  test('access element by CSS selector', () => {
    const p2 = document.querySelector('#goodbye');
    expect(p2.innerHTML).toBe('paragraph says <i>goodbye</i>')
  });
});