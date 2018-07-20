"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const PubSub_1 = require("./PubSub");
const Resolver_1 = require("./Resolver");
const Resolvers_1 = require("./Resolvers");
const Subscription_1 = require("./Subscription");
exports.RESOLVERS = Symbol.for('ResolversService');
exports.RESOLVER = Symbol.for('ResolverService');
exports.PUBSUB = Symbol.for('PubSubService');
exports.PUBSUB_OPTIONS = Symbol.for('PubSubOptions');
exports.SUBSCRIPTION = Symbol.for('Subscription');
inversify_1.decorate(inversify_1.injectable(), Resolver_1.Resolver);
inversify_1.decorate(inversify_1.injectable(), Resolvers_1.Resolvers);
inversify_1.decorate(inversify_1.injectable(), graphql_subscriptions_1.PubSub);
inversify_1.decorate(inversify_1.injectable(), PubSub_1.PubSub);
let ResolversService = class ResolversService extends Resolvers_1.Resolvers {
    constructor(resolvers) {
        super(resolvers);
    }
};
ResolversService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.multiInject(exports.RESOLVER))
], ResolversService);
let PubSubService = class PubSubService extends PubSub_1.PubSub {
    constructor(options) {
        super(options);
    }
};
PubSubService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(exports.PUBSUB_OPTIONS)), __param(0, inversify_1.optional())
], PubSubService);
let BroadcastSubscriptionService = class BroadcastSubscriptionService extends Subscription_1.Subscription {
    constructor(pubsub) {
        super(pubsub);
    }
};
BroadcastSubscriptionService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(exports.PUBSUB))
], BroadcastSubscriptionService);
function bindToContainer(container = new inversify_1.Container()) {
    container.bind(exports.PUBSUB).to(PubSubService);
    container.bind(exports.RESOLVERS).to(ResolversService);
    container.bind(exports.SUBSCRIPTION).to(BroadcastSubscriptionService);
    return container;
}
exports.bindToContainer = bindToContainer;
exports.default = bindToContainer();
//# sourceMappingURL=inversify.js.map