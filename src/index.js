document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) =>{
    const taskDescription = document.getElementById("new-task-description");
    const li = document.createElement('li');
    li.textContent = taskDescription.value;
    const ul = document.querySelector('ul');
    const select = document.getElementById('importance');
    li.style.color = select.value;
    ul.appendChild(li);
    taskDescription.value = "";
    event.preventDefault();
  });
});
