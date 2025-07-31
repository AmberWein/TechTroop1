fetch('/api/gif?q=cats')
  .then(res => res.json())
  .then(gif => {
    const iframe = document.createElement('iframe');
    iframe.src = gif.embed_url;
    iframe.width = 480;
    iframe.height = 270;
    iframe.frameBorder = 0;

    document.getElementById('gif-container').appendChild(iframe);
  })
  .catch(err => {
    console.error('Error:', err);
  });