function Tweeter() {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = posts.length + 1;
    let commentIdCounter = 7; // next comment will be c7

    return {
        getPosts: function() {
            return posts;
        },

        addPost: function(text) {
            const newPost = {
                text: text,
                id: "p" + postIdCounter,
                comments: []
            };
            
            posts.push(newPost);
            
            postIdCounter++;
        },

        removePost: function(postID) {
            posts = posts.filter(function(post) {
                return post.id !== postID;
            });
        },

        addComment: function(postID, text) {
            const post = posts.find(function(p) {
                return p.id === postID;
            });

            if (post) {
                const newComment = {
                    id: "c" + commentIdCounter,
                    text: text
                };
                
                post.comments.push(newComment);
                commentIdCounter++;
            }
        },

        removeComment: function(postID, commentID) {
            const post = posts.find(function(p) {
                return p.id === postID;
            });

            if (post) {
                post.comments = post.comments.filter(function(comment) {
                    return comment.id !== commentID;
                });
            }
        }
    };
}