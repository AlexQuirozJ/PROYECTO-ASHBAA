let logout = document.getElementById('logout');

logout.addEventListener('click', (event) => {
  localStorage.removeItem('token');
  url = window.location;

  path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);

  location.href = path + 'index.html';
});
