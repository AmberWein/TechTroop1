async function createDashboard() {
  try {
    // fetch all data in parallel
    const [users, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
    ]);

    // build summary
    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;

    const avgPostsPerUser = totalPosts / totalUsers;
    const avgCommentsPerPost = totalComments / totalPosts;

    const summary = {
      totalUsers,
      totalPosts,
      totalComments,
      avgPostsPerUser,
      avgCommentsPerPost
    };

    // top users by number of posts
    const userPostCount = {};
    posts.forEach(post => {
      userPostCount[post.userId] = (userPostCount[post.userId] || 0) + 1;
    });

    const userCommentCount = {};
    comments.forEach(comment => {
      const post = posts.find(p => p.id === comment.postId);
      if (post) {
        userCommentCount[post.userId] = (userCommentCount[post.userId] || 0) + 1;
      }
    });

    const topUsers = users
      .map(user => ({
        name: user.name,
        postCount: userPostCount[user.id] || 0,
        commentCount: userCommentCount[user.id] || 0
      }))
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    // get 5 most recent posts (by highest ID)
    const recentPosts = [...posts]
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return {
      summary,
      topUsers,
      recentPosts
    };

  } catch (error) {
    console.error('Error creating dashboard:', error.message);
    return null;
  }
}

createDashboard().then(console.log);