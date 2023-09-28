function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
    
  }

  loadData()

  const postBox = document.getElementById('post');
  function displayPost(datas){
   for(const data of datas){
   const createdDiv = document.createElement('div')
   createdDiv.classList.add('box')
   createdDiv.innerHTML = `
    <h3>title: ${data.title}</h3>
    <h5>id: ${data.id}</h5>
    <p>des: ${data.body}</p>
    `
    postBox.appendChild(createdDiv)
   }

  }