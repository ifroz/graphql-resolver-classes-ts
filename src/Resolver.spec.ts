import {Mutation, Query, Resolver} from './Resolver';

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
