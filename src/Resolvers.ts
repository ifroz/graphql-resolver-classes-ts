import { Resolver } from "./Resolver";
import { set } from "lodash";

/**
 * Reduces all Resolver instances into a nested object
 */
export class Resolvers {
  private static toResolversObject(resolvers: Resolver[]):object {
    return resolvers.reduce((resolversObject, resolver:Resolver) => {
      return set(resolversObject, resolver.key, resolver.toResolver());
    }, {});
  }
}
