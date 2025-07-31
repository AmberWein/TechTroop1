document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.trim();

  if (!query) {
    alert('Please enter a search term');
    return;
  }

  fetch(`/api/gif?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(gif => {
      const container = document.getElementById('gif-container');
      container.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.src = gif.embed_url;
      iframe.width = 480;
      iframe.height = 270;
      iframe.frameBorder = 0;
    //   iframe.allowFullscreen = true;

      container.appendChild(iframe);
    })
    .catch(err => {
      console.error('Error:', err);
      alert('Failed to fetch GIF. Try again later.');
    });
});