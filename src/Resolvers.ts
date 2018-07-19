import { set } from 'lodash';
import { Resolver } from './Resolver';

/**
 * Reduces all Resolver instances into a nested object
 */
export class Resolvers {
  private static validateResolvers(resolvers: any): void {
    if (Array.isArray(resolvers)) { return; }
    throw new TypeError(`Please provide a Resolver[] to Resolvers`);
  }

  /**
   * Transform (purely) an array of Resolver instances to
   * a nested object which can be fed to makeExecutableSchema.
   *
   * @param {Resolver[]} resolvers - Array of Resolver instances to transform
   */
  private static toResolversObject(resolvers: Resolver[]): object {
    return resolvers.reduce((resolversObject, resolver: Resolver) => {
      return set(resolversObject, resolver.key, resolver.toResolver());
    }, {});
  }
  private resolvers: object = {};
  constructor(resolvers: Resolver[]) {
    Resolvers.validateResolvers(resolvers);
    this.resolvers = Resolvers.toResolversObject(resolvers);
  }
  public getResolvers = () => this.resolvers;
}
