import { faker } from '@faker-js/faker'

//Would use faker.location.country() but application has support for only limited countries.
const countries = ["India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"]

export interface Address {
    street: string,
    zip: string,
    city: string,
    state: string,
    country: string,
}

export interface creditCard {
    ccNumber: string,
    cvc: string,
    expiration: Date
}

export interface user {
    title: "Mrs." | "Mr.",
    userName: string,
    email: string,
    password: string,
    birthDate: Date,
    firstName: string,
    lastName: string,
    address: Address,
    mobileNumber: string,
    creditCard: creditCard
}

export function getNameWithTitle(user: user): string {
    return `${user.title} ${user.firstName} ${user.lastName}`
}

export function createRandomUser() {
    return {
        title: faker.helpers.arrayElement(["Mrs.", "Mr."]),
        userName: faker.internet.username(),
        email: faker.internet.email(),
        password: process.env.userPassword as string,
        birthDate: faker.date.birthdate(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: {
            street: faker.location.streetAddress(),
            zip: faker.location.zipCode(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.helpers.arrayElement(countries),
        } ,
        mobileNumber: faker.phone.number(),
        creditCard: {
            ccNumber: faker.finance.creditCardNumber(),
            cvc: faker.finance.creditCardCVV(),
            expiration: faker.date.future()
        }
    }
} 