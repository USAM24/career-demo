import { faker } from '@faker-js/faker';

export const generateFakeCompanyData = () => {
  return {
    companyName: faker.company.name(),
    companyEmail: faker.internet.email(),
    companyPhone: faker.phone.number(),
    startedDate: faker.date.past().toISOString().split('T')[0], // Generates a past date and formats it as 'YYYY-MM-DD'
    numberOfWorkers: faker.datatype.number({ min: 1, max: 1000 }).toString(),
    moreDetails: faker.lorem.sentences(),
  };
};
