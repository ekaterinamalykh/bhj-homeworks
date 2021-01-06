const editor = document.getElementById('editor');
editor.oninput = () => {
  localStorage.setItem('editor', editor.value);
}
editor.value = localStorage.getItem('editor');

const button = document.getElementsByClassName('button')[0];
button.onclick = () => {
  localStorage.removeItem('editor');
  editor.value = '';
}
