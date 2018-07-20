"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_subscriptions_1 = require("graphql-subscriptions");
const Resolver_1 = require("./Resolver");
class Subscription extends Resolver_1.Resolver {
    constructor(pubsub) {
        super();
        this.pubsub = pubsub;
    }
    toResolver() {
        this.validateKey(this.key);
        return graphql_subscriptions_1.withFilter(this.pubsub.asyncIterator(this.getTopic()), this.filter);
    }
    getTopic() {
        return this.topic || this.key;
    }
    validateKey(key) {
        if (typeof key !== 'string') {
            throw new Error(`Subscription key is required, got ${typeof key}.`);
        }
        else if (key.endsWith('.subscribe')) {
            return key;
        }
        else {
            throw new Error(`Subscription key (${key}) does not end with ".subscribe".`);
        }
    }
}
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map