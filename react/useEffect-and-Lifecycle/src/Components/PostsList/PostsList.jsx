import React, { useState, useEffect } from "react";
import "./PostsList.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // only first 10 posts
      })
      .catch((error) => console.error("error fetching posts:", error));
  }, []);

  useEffect(() => {
    // check screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // initial check
    handleResize();

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`posts-container ${isSmallScreen ? "single-column" : ""}`}>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
