import {FilterFn, ResolverFn, withFilter} from 'graphql-subscriptions';
import {PubSub} from './PubSub';
import {Resolver} from './Resolver';

export abstract class Subscription extends Resolver {
  public abstract filter: FilterFn;
  public pubsub: PubSub;
  public abstract topic?: string;

  constructor(pubsub: PubSub) {
    super();
    this.pubsub = pubsub;
  }
  public toResolver(): ResolverFn {
    this.validateKey(this.key);
    return withFilter(this.pubsub.asyncIterator(this.getTopic()), this.filter);
  }

  public getTopic(): string {
    return this.topic || this.key;
  }

  private validateKey(key: string) {
    if (typeof key !== 'string') {
      throw new Error(`Subscription key is required, got ${typeof key}.`);
    } else if (key.endsWith('.subscribe')) {
      return key;
    } else {
      throw new Error(`Subscription key (${key}) does not end with ".subscribe".`);
    }
  }
}
