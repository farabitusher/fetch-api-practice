function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=>displayPost(data))
}
loadPost()
function displayPost(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>New Title : ${post.title}</h3>
        <p>New Description : ${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
}