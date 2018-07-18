import { Resolver } from "./Resolver";
import { set } from "lodash";

/**
 * Reduces all Resolver instances into a nested object
 */
export class Resolvers {
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
