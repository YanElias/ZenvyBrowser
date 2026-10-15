
const address = document.getElementById('address');
const homeSearch = document.getElementById('homeSearch');
const addressForm = document.getElementById('addressForm');
const searchForm = document.getElementById('searchForm');

function navigate(value) {
  const query = value.trim();

  if (!query) return;

  let url;

  if (/^https?:\/\//i.test(query)) {
    url = query;
  } else if (
    /^[\w-]+(\.[\w-]+)+(:\d+)?(\/.*)?$/.test(query) &&
    !query.includes(' ')
  ) {
    url = `https://${query}`;
  } else {
    url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }

  address.value = url;
  window.open(url, '_blank');
}

addressForm.addEventListener('submit', (event) => {
  event.preventDefault();
  navigate(address.value);
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  navigate(homeSearch.value);
});

document.querySelectorAll('.shortcut').forEach((button) => {
  button.addEventListener('click', () => {
    navigate(button.dataset.url);
  });
});

document.getElementById('reload').addEventListener('click', () => {
  address.focus();
  address.select();
});

document.getElementById('back').addEventListener('click', () => {
  address.focus();
});

document.getElementById('forward').addEventListener('click', () => {
  address.focus();
});

document.getElementById('newTab').addEventListener('click', () => {
  homeSearch.value = '';
  homeSearch.focus();
});
