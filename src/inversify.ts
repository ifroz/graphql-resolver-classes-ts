import {Container, decorate, injectable, multiInject} from 'inversify';

import { InlineResolver, Resolver } from './Resolver';
import { Resolvers } from './Resolvers';

export const RESOLVERS = Symbol.for('ResolversService');
export const RESOLVER = Symbol.for('ResolverService');

decorate(injectable(), Resolver);
decorate(injectable(), InlineResolver);
decorate(injectable(), Resolvers);

@injectable()
class ResolversService extends Resolvers {
  constructor(@multiInject(RESOLVER) resolvers: Resolver[]) {
    super(resolvers);
  }
}

export function createContainer() {
  const container = new Container();
  container.bind(RESOLVERS).to(ResolversService);
// container.bind(RESOLVER).to(InlineResolver);
  return container;
}
export default createContainer();
