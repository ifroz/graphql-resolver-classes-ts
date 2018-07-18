import { InlineResolver, Resolver } from './Resolver';

describe('InlineResolver', () => {
  it('should be a Resolver', () => {
    expect(new Resolver()).toBeInstanceOf(Resolver);
    expect(new InlineResolver()).toBeInstanceOf(Resolver);
  });

  it('has a toResolver method', () => {
    expect(typeof new InlineResolver().toResolver).toBe('function');
  });
});
