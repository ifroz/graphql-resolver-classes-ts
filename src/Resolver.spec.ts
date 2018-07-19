import {InlineResolver, Mutation, Query, Resolver, Subscription} from './Resolver';

describe('InlineResolver', () => {
  it('should be a Resolver', () => {
    expect(new Resolver()).toBeInstanceOf(Resolver);
    expect(new InlineResolver()).toBeInstanceOf(Resolver);
  });

  it('has a toResolver method', () => {
    expect(typeof new InlineResolver().toResolver).toBe('function');
  });
});

describe('Query', () => {
  it('should be a Resolver', () => {
    expect(new Query()).toBeInstanceOf(Resolver);
  });
});

describe('Mutation', () => {
  it('should be a Resolver', () => {
    expect(new Mutation()).toBeInstanceOf(Resolver);
  });
});

describe('Subscription', () => {
  it('should be a Resolver', () => {
    expect(new Subscription()).toBeInstanceOf(Resolver);
  });
});
