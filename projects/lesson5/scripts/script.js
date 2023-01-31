const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function() {
    if (input.value !== '') {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');

      li.textContent = input.value;
      deleteButton.textContent = '❌';
      li.appendChild(deleteButton);
      list.appendChild(li);
      
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
      input.value = '';
      input.focus();
    }
  });