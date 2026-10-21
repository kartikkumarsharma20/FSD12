const ul = document.querySelector('.todo-list');
const form = document.querySelector('.todo-form');
const input = document.querySelector('.input');
const emptyMessage = document.querySelector('.empty-message');

function updateEmptyMessage() {
    emptyMessage.hidden = ul.children.length > 0;
}

function createTask(taskText) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.setAttribute('aria-label', `Mark "${taskText}" as complete`);

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const edit = document.createElement('button');
    edit.type = 'button';
    edit.className = 'edit-btn';
    edit.textContent = 'Edit';

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'delete-btn';
    del.textContent = 'Delete';

    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked);
        checkbox.setAttribute(
            'aria-label',
            `${checkbox.checked ? 'Mark' : 'Mark'} "${taskText}" as ${checkbox.checked ? 'incomplete' : 'complete'}`
        );
    });

    edit.addEventListener('click', () => {
        const newText = prompt('Update your task:', text.textContent);
        if (newText === null) return;

        const trimmedText = newText.trim();
        if (!trimmedText) {
            alert('Task cannot be empty.');
            return;
        }

        text.textContent = trimmedText;
        checkbox.setAttribute(
            'aria-label',
            `Mark "${trimmedText}" as ${checkbox.checked ? 'incomplete' : 'complete'}`
        );
    });

    del.addEventListener('click', () => {
        li.remove();
        updateEmptyMessage();
    });

    actions.append(edit, del);
    li.append(checkbox, text, actions);
    ul.append(li);
    updateEmptyMessage();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (!taskText) {
        input.focus();
        return;
    }

    createTask(taskText);
    input.value = '';
    input.focus();
});
