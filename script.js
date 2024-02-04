'use strict'

// 1

function check(link) {
    if(link.indexOf('https://google.com') !== -1) {
        return 'კი, მოიცავს'
    }else {
        return 'არა, არ მოიცავს'
    }
}
  let link = 'https://google.com';
  console.log(check(link));


//   2

let element = document.getElementById('box')
element.classList.add('wraper')

let newElement = document.createElement ('img')


newElement.setAttribute('src', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')
newElement.setAttribute('alt', 'image')
box.appendChild(newElement)

let createTitle = document.createElement('h2');

createTitle.classList.add('title');
createTitle.textContent = 'image title';
createTitle.style.color = 'red';
createTitle.style.fontSize = '30px';

box.appendChild(createTitle)



// 3



let divs = document.querySelectorAll('.container')

divs.forEach(function(fnc){
    let paragraphs = document.createElement ('p')
    paragraphs.classList.add('text')
    paragraphs.textContent = 'Hello'

    fnc.appendChild(paragraphs)
})



// 4


let array6 = [-1, -2, -3, 4].some ((number) => number > 0)

console.log(array6);


// 5

let array = '12345'.split('').reduce (function(sum,numbers) {
    return sum + Number(numbers)
}, 0)

console.log(array);



// 6

let array1 = [15, 33, 104, 97, 7]

let sum = array1.reduce((accumulator,currentValue) => {
    return accumulator + currentValue 
},0)

console.log(sum);