
 fetch("https://api.chucknorris.io/jokes/random")
 .then(response => response.json())
 .then(data => {
  dato=data.value;
  const li = document.createElement("li");
  li.innerHTML = `
      <h2>${dato}</h2>`;

  listado.append(li)
   
 })
 //let listado = document.getElementById("listado");