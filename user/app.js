function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> displayUsers(data))
}

loadData()

function displayUsers(users){
const userDiv =document.getElementById('users');


 for(const user of users){
    const Div = document.createElement('div')
    Div.classList.add('user')
    console.log(user);
    Div.innerHTML =`
    <h2>Name: ${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Email: ${user.address.city}</p>
        <p>User Name: ${user.username} Webesite: ${user.website}</p>
    `
    userDiv.appendChild(Div)
 }
}