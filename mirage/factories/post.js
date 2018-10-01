import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
  title(i) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return firstName + " " + lastName;
  },
  body() {
    const jobTitle = faker.name.jobTitle();
    return jobTitle;
  },
  phoneNumber() {
    return faker.phone.phoneNumber();
  }
});
