import { Resolvers } from './Resolvers';
import { Resolver } from './Resolver';

describe('Resolvers', () => {
  it('should instantiate', () => {
    expect(new Resolvers()).toBeInstanceOf(Resolvers);
  });

  function createResolver(key, resolverFn) {
    const resolver = new Resolver();
    resolver.key = key;
    resolver.resolver = resolverFn
    return resolver;
  }

  describe('#toResolversObject', () => {
    it('[] ==> {}', () => {
      expect(Resolvers.toResolversObject([])).toEqual({});
    });

    it('should reduce Resolver objects into a deep object by their key', () => {
      expect(Resolvers.toResolversObject([
        Object.assign(new Resolver(), { key: 'Query.something.deeply', resolver: 42 }),
        Object.assign(new Resolver(), { key: 'Mutation.changeSomething', resolver: 123 }),
      ])).toEqual({
        Query: { something: {deeply: 42}, },
        Mutation: { changeSomething: 123, },
      });
    });
  });
});
