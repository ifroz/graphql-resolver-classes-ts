import {PubSub} from './PubSub';
import {Resolver} from './Resolver';
import {Subscription} from './Subscription';

describe('Subscription', () => {
  let pubsub: PubSub;
  beforeEach(() => {
    pubsub = new PubSub();
  });

  it('should be a Resolver', () => {
    expect(new Subscription(pubsub)).toBeInstanceOf(Resolver);
  });

  describe('toResolver()', () => {
    class CurrentUserSubscription extends Subscription {
      public readonly key = 'Subscription.notificationAdded.subscribe';
      public readonly filter = (payload, args, ctx) =>
        ctx.currentUser && ctx.currentUser.id === payload.owner
    }

    it('should work', () => {
      expect(new CurrentUserSubscription(pubsub).toResolver()).toBeDefined();
    });
  });
});
