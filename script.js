let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    let li = document.createElement('li');
    li.textContent = input.value;

    // Вставляем новый элемент после списка
    list.appendChild(li);

    input.value = '';
  }
});
