// CRUD OPERATION
const cricketers = {
  "c6941175-cc4e-4c56-b13e-eeaabd914a51": {
    id: "c6941175-cc4e-4c56-b13e-eeaabd914a51",
    name: "Nasir",
    age: 34,
    contact: "nasir@gmail.com",
  },
  "3ff58ea0-4615-4225-a599-fddfe21ddbd0": {
    id: "3ff58ea0-4615-4225-a599-fddfe21ddbd0",
    name: "Mosta",
    age: 28,
    contact: "mosta@gmail.com",
  },
  "d16a8fea-627c-4268-a145-958ae132f106": {
    id: "d16a8fea-627c-4268-a145-958ae132f106",
    name: "Mash",
    age: 37,
    contact: "mash@gmail.com",
  },
  "7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75": {
    id: "7322e8df-0b94-4f2c-ba91-b0b8ca2f7a75",
    name: "Tamim",
    age: 31,
    contact: "tamim@gmail.com",
  },
};

// CRUD: C => create, R => read, U => update, D => delete.

// create operation done.
const create = {
  "7f42e942-fbf2-4119-9d2f-776d496e4c40": {
    id: "7f42e942-fbf2-4119-9d2f-776d496e4c40",
    name: "Mehedi",
    age: 25,
    contact: "mehedi@gmail.com",
  },
};
const id = create["7f42e942-fbf2-4119-9d2f-776d496e4c40"].id;
cricketers[id] = create["7f42e942-fbf2-4119-9d2f-776d496e4c40"];

// read operation done.
const mash = "d16a8fea-627c-4268-a145-958ae132f106";
const getMash = cricketers[mash];

// update operation done.
const updateMash = {
  name: "Mashrafi Bin Mortuza",
  age: 40,
};
cricketers[mash] = {
  ...cricketers[mash],
  ...updateMash,
};

// delete operation done.
const nasir = "c6941175-cc4e-4c56-b13e-eeaabd914a51";
delete cricketers[nasir];

// console.log(cricketers)
