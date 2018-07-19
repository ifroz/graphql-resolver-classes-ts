type ResolverFn =
  (rootValue: any, args: any, ctx: any, ...rest: any[]) => any;

/**
 * Represents one resolver in the resolvers object given to makeExecutableSchema.
 * @property {string} key - Dot-notation key of the resolver
 * @property {ResolverFn} resolver - The value to be injected into the final resolvers object
 */
export abstract class Resolver {
  public abstract key: string;
  protected abstract resolver: ResolverFn;
  public toResolver() {
    return this.resolver;
  }
}

// export class Query extends Resolver {}
// export class Mutation extends Resolver {}
// export class Subscription extends Resolver {}

export class InlineResolver extends Resolver {
  public key = `Mutation`;
  public resolver = function inlineResolverFunc() { return {}; };
}
