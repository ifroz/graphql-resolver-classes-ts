import { Resolver } from "./Resolver";
import { set } from "lodash";

/**
 * Reduces all Resolver instances into a nested object
 */
export class Resolvers {
  private resolvers: object = {};
  constructor(resolvers: Resolver[]) {
    Resolvers.validateResolvers(resolvers);
    this.resolvers = Resolvers.toResolversObject(resolvers);
  }

  public get resolverObject():object {
    return this.resolvers;
  }

  private static validateResolvers(resolvers:any):void {
    if (Array.isArray(resolvers)) return;
    throw new TypeError(`Please provide a Resolver[] to Resolvers`);
  }

  /** 
   * Transform (purely) an array of Resolver instances to 
   * a nested object which can be fed to makeExecutableSchema.
   * 
   * @param {Resolver[]} resolvers - Array of Resolver instances to transform
   */
  private static toResolversObject(resolvers: Resolver[]):object {
    return resolvers.reduce((resolversObject, resolver:Resolver) => {
      return set(resolversObject, resolver.key, resolver.toResolver());
    }, {});
  }
}
