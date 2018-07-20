import {FilterFn, ResolverFn, withFilter} from 'graphql-subscriptions';
import {PubSub} from './PubSub';
import {Resolver} from './Resolver';

export abstract class Subscription extends Resolver {
  public abstract filter: FilterFn;
  public pubsub: PubSub;

  constructor(pubsub: PubSub) {
    super();
    this.pubsub = pubsub;
  }
  public toResolver(): ResolverFn {
    // if (!this.key.endsWith('.subscribe')) this.key = `${this.key}.subscribe`;
    return withFilter(this.pubsub.asyncIterator(this.key), this.filter);
  }
}
