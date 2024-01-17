function addTask() {
  const taskContainer = document.getElementById('taskContainer');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  const taskContent = `
      <h3>Task Title</h3>
      <p>Task description goes here.</p>
      <p>Deadline: [Insert Date]</p>
      <p>Priority: High</p>
      <p>Label: Planning</p>
  `;

  taskDiv.innerHTML = taskContent;

  taskContainer.appendChild(taskDiv);
}
