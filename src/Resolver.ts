type ResolverFn =
  (rootValue: any, args: any, ctx: any, ...rest: any[]) => any;

/**
 * Represents one resolver (Query, Mutation or Subscription)
 * in the resolvers object given to makeExecutableSchema.
 *
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

export abstract class Query extends Resolver {}
export abstract class Mutation extends Resolver {}
