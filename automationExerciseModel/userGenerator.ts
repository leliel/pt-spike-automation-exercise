import { faker } from '@faker-js/faker'

//Would use faker.location.country() but application has support for only limited countries.
const countries = ["India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"]

export function createRandomUser() {
    return {
        title: faker.helpers.arrayElement(["Mrs.", "Mr."]),
        userName: faker.internet.username(),
        email: faker.internet.email(),
        password: process.env.userPassword as string,
        birthDate: faker.date.birthdate(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        streetAddress: faker.location.streetAddress(),
        zip: faker.location.zipCode(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.helpers.arrayElement(countries),
        mobileNumber: faker.phone.number(),
    }
} 