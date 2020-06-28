//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

//designing the element
var element = document.createElement('div');
element.innerHTML = 'Hello Bharat!';
element.style.margin = '50px 20px 10px 20px'
//element.style.backgroundColor = '#f9f9f9';
element.style.borderWidth = 'thick';
element.style.borderColor = 'rgb(50,50,50)';
element.style.fontSize = '20px'

document.body.appendChild(element);
element.style.textAlign = 'center';

//creating an unordered list
var ul = document.createElement('ul');
element.appendChild(ul);
for (let i = 0; i < 4; i++) {
  var li = document.createElement('li');
  li.innerHTML = (i+1).toString();
  li.id = (i+1).toString();
  ul.appendChild(li);
}
ul.style.margin = '20px'
ul.style.textAlign = 'left'
ul.style.listStyleType = 'square'
ul.style.listStylePosition = 'inside'
ul.style.borderWidht = 'thick';
ul.style.borderColor = 'rgb(50,50,50)';
ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();
