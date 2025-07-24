const posts = [
  { name: "Alice", text: "Hello world!" },
  { name: "Bob", text: "Nice to meet you all." },
];

const nameInput = document.getElementById("nameInput");
const textInput = document.getElementById("textInput");
const postsContainer = document.getElementById("postsContainer");

function render() {
  // clear container to prevent duplicates
  postsContainer.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `<strong>${post.name}</strong>: ${post.text}`;

    postsContainer.appendChild(postDiv);
  });
}

submitBtn.addEventListener("click", () => {

  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name && text) {
    posts.push({ name, text });
    nameInput.value = "";
    textInput.value = "";
    render();
  }
});

render(); // initial render
