function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(json => showData(json)) 
}

function showData(data) {
  const div = document.getElementById('div');
  div.innerText = data.title;

}