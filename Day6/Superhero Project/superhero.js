let superheroes = [
    {
      name: "Thor",
      age: 1500,
      planet: "Asgard",
      weapons: ["mjolnir", "stormbreaker"],
    },
    {
      name: "Ironman",
      age: 47,
      planet: "Earth",
      weapons: ["armour", "jarvis", "friday"],
    },
    {
      name: "Superman",
      age: 34,
      planet: "Krypton",
      weapons: [],
    },
  ];
  function display() {
    let rows = "";
    for (let i = 0; i < superheroes.length; i++) {
      let superhero = superheroes[i];
      rows += `
      <tr>
      <td>${superhero.name}</td>
      <td>${superhero.age}</td>
      <td>${superhero.planet}</td>
      <td>${superhero.weapons.join(" , ")}</td>
      <td>
          <button onclick='deleteSuperhero(${i})'>Delete</button>
      </td>
      </tr>
      `;
    }
    document.getElementById("data").innerHTML = rows;
  }
  display();
  function deleteSuperhero(index) {
    superheroes.splice(index, 1);
    display();
  }
  function addSuperhero() {
    let superhero = {};
    superhero.name = document.getElementById("name").value;
    superhero.age = Number(document.getElementById("age").value);
    superhero.planet = document.getElementById("planet").value;
    let weaponsList = document.getElementById("weapons").value;
    superhero.weapons = weaponsList.split(",");
    superheroes.push(superhero);
    display();
  }