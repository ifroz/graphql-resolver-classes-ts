import {Container, decorate, inject, injectable, multiInject, optional} from 'inversify';

import {PubSub as BasePubSub } from 'graphql-subscriptions';
import {PubSub} from './PubSub';

import { Resolver } from './Resolver';
import { Resolvers } from './Resolvers';
import {Subscription} from './Subscription';

export const RESOLVERS = Symbol.for('ResolversService');
export const RESOLVER = Symbol.for('ResolverService');
export const PUBSUB = Symbol.for('PubSubService');
export const PUBSUB_OPTIONS = Symbol.for('PubSubOptions');
export const SUBSCRIPTION = Symbol.for('Subscription');

decorate(injectable(), Resolver);
decorate(injectable(), Resolvers);
decorate(injectable(), BasePubSub);
decorate(injectable(), PubSub);

@injectable()
class ResolversService extends Resolvers {
  constructor(@multiInject(RESOLVER) resolvers: Resolver[]) {
    super(resolvers);
  }
}

@injectable()
class PubSubService extends PubSub {
  constructor(@inject(PUBSUB_OPTIONS) @optional() options?: any) {
    super(options);
  }
}

@injectable()
class BroadcastSubscriptionService extends Subscription {
  constructor(@inject(PUBSUB) pubsub: PubSub) {
    super(pubsub);
  }
}

export function bindToContainer(container = new Container()) {
  container.bind(PUBSUB).to(PubSubService);
  container.bind(RESOLVERS).to(ResolversService);
  container.bind(SUBSCRIPTION).to(BroadcastSubscriptionService);
  return container;
}
export default bindToContainer();
