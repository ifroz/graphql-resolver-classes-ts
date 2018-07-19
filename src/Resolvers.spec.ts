import { Resolver } from './Resolver';
import { Resolvers } from './Resolvers';

const createResolver =
  (key: string, resolver: any) => Object.assign(new Resolver(), {key, resolver});

describe('Resolvers', () => {
  it('should instantiate given some resolvers', () => {
    const resolvers: Resolver[] = [];
    expect(new Resolvers(resolvers)).toBeInstanceOf(Resolvers);
  });

  it('should instantiate given an empty array', () => {
    const resolvers: Resolver[] = [];
    expect(new Resolvers(resolvers)).toBeInstanceOf(Resolvers);
  });

  it('should throw on instantiation given no resolvers', () => {
    expect(() => new Resolvers()).toThrow(TypeError);
  });

  it('should reduce Resolver[] into a nested resolvers object', () => {
    const resolvers = [
      createResolver(`Query.theAnswer`, 42),
    ];
    expect(new Resolvers(resolvers).resolvers).toEqual({
      Query: {theAnswer: 42},
    });
  });

  describe('#toResolversObject', () => {
    it('[] ==> {}', () => {
      expect(Resolvers.toResolversObject([])).toEqual({});
    });

    it('should reduce Resolver objects into a deep object by their key', () => {
      expect(Resolvers.toResolversObject([
        createResolver('Query.something.deeply', 42),
        createResolver('Mutation.changeSomething', 123),
      ])).toEqual({
        Mutation: { changeSomething: 123 },
        Query: { something: {deeply: 42} },
      });
    });
  });
});
