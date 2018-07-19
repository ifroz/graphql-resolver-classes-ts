import 'reflect-metadata';

import {Container} from 'inversify';
import {bindToContainer, PUBSUB, RESOLVER, RESOLVERS} from './inversify';

import {Resolver} from './Resolver';
import {Resolvers} from './Resolvers';
import {PubSub} from './PubSub';

const YOUR_KEY = 'Query.some.resolver';

describe('Inversify integration', () => {
  let inversifyContainer: Container;
  beforeEach(() => { inversifyContainer = bindToContainer(); });

  it('should be a Container', () => {
    expect(inversifyContainer).toBeInstanceOf(Container);
  });

  it('cannot instantiate without a bound resolver', () => {
    expect(() => inversifyContainer.get(RESOLVER)).toThrow(
      'No matching bindings found for serviceIdentifier');
  });

  describe('when using Container.merge(...)', () => {
    class YourResolver extends Resolver {
      public key = YOUR_KEY;
      public resolver = () => 42;
    }

    let yourExistingContainer: Container;
    let mergedContainer: Container;
    beforeEach(() => {
      yourExistingContainer = new Container();
      yourExistingContainer.bind(RESOLVER).to(YourResolver);
      mergedContainer = Container.merge(yourExistingContainer, inversifyContainer);
    });

    it('should generate a resolvers object to be fed to makeExecutableSchema', () => {
      expect(mergedContainer.get<Resolvers>(RESOLVERS).getResolvers()).toHaveProperty(YOUR_KEY);
    });

    it('should not effect the original container', () => {
      mergedContainer.get<Resolvers>(RESOLVERS);
      expect(() => inversifyContainer.get<Resolvers>(RESOLVERS)).toThrow();
    });
  });

  it('InlineResolver should not be exposed', () => {
    expect(() => inversifyContainer.get(RESOLVER)).toThrow();
  });

  describe('Resolvers', () => {
    it('should be exposed after any resolver is bound', () => {
      inversifyContainer.bind(RESOLVER).to(Resolver);
      expect(inversifyContainer.get(RESOLVERS)).toBeInstanceOf(Resolvers);
    });

    it('should throw given no bound resolver', () => {
      expect(() => inversifyContainer.get(RESOLVERS)).toThrow();
    });
  });

  describe('PubSub', () => {
    it('should be exposed', () => {
      expect(inversifyContainer.get(PUBSUB)).toBeInstanceOf(PubSub);
    });
  });
});
