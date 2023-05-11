// CRUD OPERATION

const players = [
  {
    id: "c6941175-cc4e-4c56-b13e-eeaabd914a51",
    name: "Nasir",
    age: 34,
    contact: "nasir@gmail.com",
  },
  {
    id: "3ff58ea0-4615-4225-a599-fddfe21ddbd0",
    name: "Mosta",
    age: 28,
    contact: "mosta@gmail.com",
  },
  {
    id: "d16a8fea-627c-4268-a145-958ae132f106",
    name: "Mash",
    age: 37,
    contact: "mash@gmail.com",
  },
  {
    id: "7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75",
    name: "Tamim",
    age: 31,
    contact: "tamim@gmail.com",
  },
];

// CRUD: C => create, R => read, U => update, D => delete.

// create operation done.
const createMehedi = {
  id: "7f42e942-fbf2-4119-9d2f-776d496e4c40",
  name: "Mehedi",
  age: 25,
  contact: "mehedi@gmail.com",
};

// read operation done.
players.push(createMehedi);
const mosta = "3ff58ea0-4615-4225-a599-fddfe21ddbd0";
const index = players.find((id) => id.id === mosta);

// update operation done.
const updateTamim = {
  name: "Tamim Iqbal",
  email: "iqbal@gmail.com",
};

const tamimId = "7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75";
const tamim = players.findIndex((id) => id.id === tamimId);
players[tamim] = {
  ...players[tamim],
  ...updateTamim,
};

// delete operation start.
const nasirId = "c6941175-cc4e-4c56-b13e-eeaabd914a51";
const nasirDelete = players.findIndex((id) => id.id === nasirId);
players.splice(0, 1);

//console.log(players)
