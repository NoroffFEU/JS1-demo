function createProduct(id, price) {
  return {
    id,
    price
  }
}

function saveProduct() {}

function deleteProduct() {}

async function updateProduct() {}

function renderProduct() {}

async function loadCart() {}

async function loadUser() {}

async function narrative() {
  const id = 123;
  const price = 10;

  const product = createProduct(id, price);

  await loadCart();
  await loadUser();

  saveProduct(product);
  await renderProduct(product);

  document.querySelector('button.delete', () => deleteProduct(product.id));
}

narrative();