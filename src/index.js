document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page from reloading
    const userInput = document.querySelector('#new-task-description').value;
    buildToDo(userInput);
    form.reset(); //resets form so the entered word erases and goes back to passholder
  })

  function buildToDo(todo) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    btn.textContent = 'X';
    p.textContent = `${todo}     `;
    p.appendChild(btn);
    document.querySelector('#tasks').appendChild(p);
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }
});
//Gary