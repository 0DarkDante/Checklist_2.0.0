let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
    task.classList.add('task');
		task.textContent = this.value;

    task.addEventListener('dblclick', function() {
      inputField = document.createElement('input');
      inputField.value = task.textContent;

      inputField.addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
          task.textContent = inputField.value;
          li.replaceChild(task, inputField);
        }
      })
      li.replaceChild(inputField, task);
    });

		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.classList.add('remove');
    remove.textContent = 'видалить';
    remove.addEventListener('click', function() {
      li.remove();
    });
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
    mark.textContent = 'зроблено';
    mark.addEventListener('click', function() {
      task.classList.toggle('done');
    });
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});
