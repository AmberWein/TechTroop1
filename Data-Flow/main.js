const posts = [
  { name: "Alice", text: "Hello world!" },
  { name: "Bob", text: "Nice to meet you all." },
];

const postsContainer = document.getElementById("postsContainer");

function render() {
  // clear container to prevent duplicates
  postsContainer.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerText = `${post.name}: ${post.text}`;

    postsContainer.appendChild(postDiv);
  });
}

render(); // initial render
