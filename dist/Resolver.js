"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents one resolver (Query, Mutation or Subscription)
 * in the resolvers object given to makeExecutableSchema.
 *
 * @property {string} key - Dot-notation key of the resolver
 * @property {ResolverFn} resolver - The value to be injected into the final resolvers object
 */
class Resolver {
    toResolver() {
        return this.resolver;
    }
}
exports.Resolver = Resolver;
class Query extends Resolver {
}
exports.Query = Query;
class Mutation extends Resolver {
}
exports.Mutation = Mutation;
//# sourceMappingURL=Resolver.js.map