import { EntryPoint } from './graphql-resolvers-inversify';

describe(`graphql-resolvers-inversify`, () => {
  it(`should just work`, () => {
    const instance = new EntryPoint();
    expect(instance.answer).toBe(42);
  });
});