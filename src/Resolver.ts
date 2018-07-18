type ResolverFn =
  (rootValue: any, args: any, ctx: any, ...rest: any[]) => any;
  
/**
 * Represents one resolver in the resolvers object given to makeExecutableSchema.
 */
export abstract class Resolver {
  public abstract key: string;
  protected abstract resolver: ResolverFn;
  public toResolver() {
    return this.resolver;
  }
}

export class InlineResolver extends Resolver {
  public key = `Mutation`;
  public resolver = () => ({});
}
