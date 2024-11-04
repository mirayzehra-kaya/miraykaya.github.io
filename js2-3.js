var items = document.getElementsByClassName('grid-container');
console.log(items);

var odd = items[0].querySelectorAll(':scope > :nth-child(odd)');

var even = items[0].querySelectorAll(':scope > :nth-child(even)');

for(var i = 0; i< odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

//console.log(items[0].children); the other way to get every child
console.log(odd);
console.log(even);

//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'introEnd';

//add id
newDiv.id = 'end';

//create text node
var newDivText = document.createTextNode('Lorem Ipsum');

//add text to div
newDiv.appendChild(newDivText);

//var newContainer = document.querySelector('main .newContainer');
//var h2 = document.querySelector('main h2');

//console.log(newDiv);

//newContainer.insertBefore(newDiv, h2);