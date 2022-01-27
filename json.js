const myObject = {
  property: 'value',
  number: 1
}

const pre = document.querySelector('pre');

const jsonString = JSON.stringify(myObject, null, 2);

const myOtherObject = JSON.parse(jsonString);

pre.innerHTML = jsonString;
