const express = require("express");
const faker = require("faker");

const app = express();
const port = 8000;

const createUser = (props) => ({
    _id: faker.id.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
})

const createCompany = (props) => ({
    _id: faker.id.uuid(),
    companyName: faker.company.companyName(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }

})

app.get("/api/healthcheck", (req, res) => {
    console.log("inside healthcheck route");
    res.json({message: "all set up!"});
})

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
})

app.get("api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
})

app.get("api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const userCompany = {
        user: newUser,
        company: newCompany,
    }
    res.json(userCompany);
})

app.listen(port, () => console.log(`express server fired up on port ${8000}`));