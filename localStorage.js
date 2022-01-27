const user = {
  username: 'Fermain',
  firstName: 'Oliver',
  email: "oliver.dipple@noroff.no"
}

function getItemFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  const safeValue = JSON.parse(value);
  return safeValue;
}

function addItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeItemFromLocalStorage(key) {
  localStorage.removeItem(key);
}

function resetLocalStorage() {
  localStorage.clear();
  renderUsers([]);
}

function addToLocalArray(key, newUser) {
  let ourArray = getItemFromLocalStorage(key);

  if (!ourArray) {
    ourArray = [];
  }

  ourArray.push(newUser);
  addItemToLocalStorage(key, ourArray);
  renderUsers(ourArray);
}

function removeUserFromLocalStorageByEmail(key, searchTerm) {
  const ourArray = getItemFromLocalStorage(key);

  const filteredArray = ourArray.filter(user => user.email !== searchTerm);

  addItemToLocalStorage(key, filteredArray);
  renderUsers(filteredArray);
}

function renderUsers(users) {
  const parent = document.createElement('div');
  parent.id = 'parent';

  users.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('user');

    div.innerText = `
      Username: ${user.username}
      Email: ${user.email}`
    parent.append(div);
  });

  document.querySelector('main').innerHTML = '';

  document.querySelector('main').append(parent);
}

function addUserAndRender() {
  const name = document.querySelector('input#name').value;
  const key = 'example-array';

  const user = {
    username: name,
    firstName: name,
    email: `${name}@${name}.com`
  }

  addToLocalArray(key, user);
}

function removeUserAndRender() {
  const name = document.querySelector('input#name').value;
  const key = 'example-array';

  removeUserFromLocalStorageByEmail(key, `${name}@${name}.com`);
}

const users = getItemFromLocalStorage('example-array');
renderUsers(users);