const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(e) {
    progress.value = e.loaded;
  }
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  e.preventDefault();
})
