import { faker } from "@faker-js/faker";
console.log(faker.internet.email({ firstName: 'mike' }));
console.log(faker.internet.password());
console.log(faker.person.firstName());
console.log(faker.person.bio());