// get the data from server 

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
 
function displayUsers(data) {
    const ul = document.getElementById('ulList');
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText =`name : ${user.name}, email : ${user.email}`;
        ul.appendChild(li);
    }
     
 }

