"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Reduces all Resolver instances into a nested object
 */
class Resolvers {
    constructor(resolvers) {
        this.resolvers = {};
        this.getResolvers = () => this.resolvers;
        Resolvers.validateResolvers(resolvers);
        this.resolvers = Resolvers.toResolversObject(resolvers);
    }
    static validateResolvers(resolvers) {
        if (Array.isArray(resolvers)) {
            return;
        }
        throw new TypeError(`Please provide a Resolver[] to Resolvers`);
    }
    /**
     * Transform (purely) an array of Resolver instances to
     * a nested object which can be fed to makeExecutableSchema.
     *
     * @param {Resolver[]} resolvers - Array of Resolver instances to transform
     */
    static toResolversObject(resolvers) {
        return resolvers.reduce((resolversObject, resolver) => {
            return lodash_1.set(resolversObject, resolver.key, resolver.toResolver());
        }, {});
    }
}
exports.Resolvers = Resolvers;
//# sourceMappingURL=Resolvers.js.map