async function fetchPostData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data); ;
    } catch (error) {
        console.log('Error of fetching post: ', error);
    }
  
}
fetchPostData();

//Promise.all() is a built-in method in JavaScript. It allows us to run multiple Promises in parallel 
//and returns the results of all the Promises in a single response.

async function processFetchData(data1, data2, data3){
    const posts = await data1.json();
    const users = await data2.json();
    const comments = await data3.json();
    // Now you can process the data as needed
    // For example, you might want to map each comment to its corresponding post
    const postsWithComments = posts.map(post => {
        const postComments = comments.filter(comment => comment.postId === post.id);
        return {
            ...post,
            comments: postComments
        };
    });

    // Similarly, you might want to map each post to its corresponding user
    const postsWithUsers = postsWithComments.map(post => {
        const user = users.find(user => user.id === post.userId);
        return {
            ...post,
            user: user
        };
    });

    return postsWithUsers;
}

async function fetchAndprocessData(){
    const [posts, users, comments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/comments')
      ]);
      const processedData = await processFetchData(posts, users, comments);
      console.log(processedData);
}

fetchAndprocessData();