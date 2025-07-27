const tweeter = Tweeter();
const renderer = Renderer();

// initial render
renderer.renderPosts(tweeter.getPosts());

// add a new post when Twit button is clicked
document.getElementById("tweet-button").addEventListener("click", () => {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (text) {
        tweeter.addPost(text);
        input.value = "";
        renderer.renderPosts(tweeter.getPosts());
    }
});

// delegate events on #posts container
document.getElementById("posts").addEventListener("click", (event) => {
    const target = event.target;

    // delete a post
    if (target.classList.contains("delete")) {
        const postId = target.dataset.id;
        tweeter.removePost(postId);
        renderer.renderPosts(tweeter.getPosts());
    }

    // add a comment
    if (target.classList.contains("comment-button")) {
        const postDiv = target.closest(".post");
        const postId = postDiv.dataset.id;
        const commentInput = postDiv.querySelector(".comment-input");
        const commentText = commentInput.value.trim();

        if (commentText) {
            tweeter.addComment(postId, commentText);
            commentInput.value = "";
            renderer.renderPosts(tweeter.getPosts());
        }
    }

    // delete a comment
    if (target.classList.contains("delete-comment")) {
        const commentId = target.dataset.id;
        const postDiv = target.closest(".post");
        const postId = postDiv.dataset.id;

        tweeter.removeComment(postId, commentId);
        renderer.renderPosts(tweeter.getPosts());
    }
});
