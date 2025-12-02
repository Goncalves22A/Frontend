async function receiveData () {
   const users =  await fetch ("http://localhost:3333").then(response => response.json())
 
   users.map(persons => {
    document.querySelector("main").innerHTML += `
      <section>
        <h2>Nome: ${persons.name}</h2>
        <p>E-mail:${persons.email}</p>
        <p>Idade: ${persons.age}</p>
        <p>Apelido: ${persons.nickname}</p>
    </section>
    `
   })
 }

 receiveData()