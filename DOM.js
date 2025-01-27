//Selectors
    //getElementById
    console.log(document.getElementById('header-title'));
    var headerTitle = document.getElementById('header-title');
    console.log(headerTitle);
    headerTitle.textContent = 'Hello';
    headerTitle.innerText = 'Goodbye';
    console.log(headerTitle.innerText);
    headerTitle.innerHTML = '<h3>Hello</h3>';
    headerTitle.style.borderBottom = 'solid 3px #ccc;'

    //getElementsByClassName
    var items = document.getElementsByClassName('list-group-item');
    console.log(items);
    console.log(items[1]);
    items[1].textContent = 'Hello 2';
    items[1].style.fontWeight = 'bold';
    items[1].style.backgroundColor = 'yellow';

        //gives error
        //items.style.backgroundColor = '#f4f4f4';
for(var i = 0; i< items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

    //getElementsByTag
    var li = document.getElementsByTagName('li');
    console.log(li);
    console.log(li[1]);
    li[1].textContent = 'Hello 2';
    li[1].style.fontWeight = 'bold';
    li[1]. style.backgroundColor = 'yellow';

    //gives error
    //items.style.backgroundColor = '#f4f4f4';
for(var i = 0; i< items.length; i++){
        li[i].style.backgroundColor = '#f4f4f4';
    }

    //querySelector
    var header = document.querySelector('main-header');
    header.style.borderBottom = 'solid 4px #ccc';

    var input = document.querySelector('input');
    input.value = 'Hellow World';

    var submit = document.querySelector ('.list-geoup-item');
    item.style.color = 'red';

    var lastItem = document.querySelector('.list-group-item:last-child');
    lastItem.style.color = 'blue';

    var secondItem = document.querySelector ('.list-group-item:nth-child(2)');
    secondItem.style.color = 'coral';

    //querySelectorAll
    var titles = document.querySelectorAll('.title');

    console.log(titles);
    titles[0].textContent = 'Hello';

    var odd = document.querySelectorAll('li:nth-child(odd)');
    var even = document.querySelectorAll('li:nth-child(even)');

    for(var i = 0; i< odd.length; i++){
        odd[i].style.backgroundColor = '#f4f4f4';
        even[i].style.backgroundColor = '#ccc';
    }
//Traversing The Dom
    var itemList = document.querySelector('#items');
    //parentNode
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = '#f4f4f4';
    console.log(itemList.parentNode.parentNode.parentElement.Node);

    //parentElement
    console.log(itemList.parentElement);
    itemList.parentElement.style.backgroundColor = '#f4f4f4';
    console.log(itemList.parentElement.parentElement.parentElement);

    //childNodes
    console.log(itemList.childNodes);
    console.log(itemList.children);
    console.log(itemList.children[1]);
    itemList.children[1].style.backgroundColor = 'yellow';

    //firstChild
    console.log(itemList.firstChild);

        //firstElementChild
        console.log(itemList.firstElementChild);
        itemList.firstElementChild.textContent = 'Hello 1';

    //lastChild
    console.log(itemList.lastChild);
    //lastElementChild
    console.log(itemList.lastElementChild);
    itemList.lastElementChild.textContent = 'Hello 1';
    
    //nextSibling
    console.log(itemList.nextSibling);
        //nextElementSibling
        console.log(itemList.nextElementSibling);

    //previousSibling
    console.log(itemList.previousSibling);

        //previousElementSibling
        console.log(itemList.previousElementSibling);
        itemList.previousElementSibling.style.color = 'green';

//Create Element
    //create a div
    var newDiv = document.createElement('div');

    //add class
    newDiv.className = 'hello';

    //add id
    newDiv.id = 'hello1';

    //add attribute
    newDiv.setAttribute('title', 'Hello Div');

    //create text node
    var newDivText = document.createTextNode('Hello World');

    //add text to div
    newDiv.appendChild(newDivText);

    var container = document.querySelector('header .container');
    var h1 = document.querySelector('header h1');

    console.log(newDiv);

    newDiv.style.fontSize = '30px';

    container.insertBefore(newDiv, h1);
    