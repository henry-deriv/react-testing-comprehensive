function init() {
  display('document', document);

  const docElm = document.documentElement;
  display('document.documentElement', docElm);

  for(let i = 0; i < docElm.childNodes.length; i++)
    display(`documentElement child[${i}]`, docElm.childNodes[i]);

  const hello = document.getElementById('hello');
  display('hello', hello);

  const goodbye = document.getElementById('goodbye');
  display('goodbye', goodbye);
}

function display(msg, node) {
  console.log('\n------------------');
  console.log(`Node info for ${msg}`);
  console.log(`NodeType: ${node.nodeType}`);
  console.log(`NodeName: ${node.nodeName}`);
  console.log(`innerHTML: ${node.innerHTML}`);
  console.log(`innerText: ${node.innerText}`);
}