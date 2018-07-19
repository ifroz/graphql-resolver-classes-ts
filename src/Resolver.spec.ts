import {Mutation, Query, Resolver, Subscription} from './Resolver';

describe('Resolver', () => {
  it('should be a Resolver', () => {
    expect(new Resolver()).toBeInstanceOf(Resolver);
  });

  it('has a toResolver method', () => {
    expect(typeof new Resolver().toResolver).toBe('function');
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
