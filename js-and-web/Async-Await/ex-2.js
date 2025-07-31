// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  let user;

  try {
    const response = await fetch(userUrl);

    if (!response.ok) {
      throw new Error("User not found");
    }

    user = await response.json();
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  let posts;

  try {
    const response = await fetch(postsUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    posts = await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return null;
  }

  // 3. Return combined data
  return {
    user,
    posts,
  };
}

// tests
getUserWithPosts(2).then(result => console.log(result));
getUserWithPosts(999).then(result => console.log(result));