function Renderer() {
    const postsContainer = document.getElementById("posts");

    const createCommentElement = (comment) => {
        const commentWrapper = document.createElement("div");
        commentWrapper.className = "comment";
        commentWrapper.dataset.id = comment.id;
        commentWrapper.textContent = comment.text;

        const deleteCommentBtn = document.createElement("div");
        deleteCommentBtn.className = "delete-comment";
        deleteCommentBtn.dataset.id = comment.id;
        deleteCommentBtn.textContent = "X";

        // wrap comment and delete button together
        const wrapper = document.createElement("div");
        wrapper.appendChild(commentWrapper);
        wrapper.appendChild(deleteCommentBtn);

        return wrapper;
    };

    const createPostElement = (post) => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.dataset.id = post.id;

        const postTextDiv = document.createElement("div");
        postTextDiv.className = "post-text";
        postTextDiv.textContent = post.text;

        const deletePostBtn = document.createElement("div");
        deletePostBtn.className = "delete";
        deletePostBtn.dataset.id = post.id;
        deletePostBtn.textContent = "Delete Post";

        const commentsContainer = document.createElement("div");
        commentsContainer.className = "comments";

        post.comments.forEach((comment) => {
            const commentElement = createCommentElement(comment);
            commentsContainer.appendChild(commentElement);
        });

        const commentInput = document.createElement("input");
        commentInput.type = "text";
        commentInput.placeholder = "Got something to say?";
        commentInput.className = "comment-input";

        const commentButton = document.createElement("button");
        commentButton.className = "comment-button";
        commentButton.textContent = "Comment";

        // Assemble the post
        postDiv.appendChild(postTextDiv);
        postDiv.appendChild(deletePostBtn);
        postDiv.appendChild(commentsContainer);
        postDiv.appendChild(commentInput);
        postDiv.appendChild(commentButton);

        return postDiv;
    };

    const renderPosts = function(posts) {
        postsContainer.innerHTML = ""; // clear previous content

        posts.forEach((post) => {
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
    };

    return {
        renderPosts
    };
}
