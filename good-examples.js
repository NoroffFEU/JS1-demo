async function getPostsFromAPI() {
  document.body.classList.add('loading');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch(technicalError) {
    console.error(technicalError);
    const nonTechnicalError = "There was a problem with your request, please refresh and try again. If the problem persists, please contact MJ."
    alert(nonTechnicalError);
    document.body.classList.add('error');
  } finally {
    document.body.classList.remove('loading');
  }
}

function example(array) {

  try {
    if (!array) {
      throw new Error('Array is undefined');
    }

    if (!Array.isArray(array)) {
      throw new Error('Array is not array!');
    }

    if (!array.length) {
      throw new Error('Array is empty');
    }

    alert("All was fine")
  } catch (error) {
    alert(error);
  }
}

// example([1, 2, 3]);

function renderPosts(posts) {}