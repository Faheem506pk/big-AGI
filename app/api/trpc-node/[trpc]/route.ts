import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouterNode } from '~/server/api/trpc.router';
import { createTRPCFetchContext } from '~/server/api/trpc.server';
import { env } from '~/server/env.mjs';

const handlerNodeRoutes = (req: Request) =>
  fetchRequestHandler({
    router: appRouterNode,
    endpoint: '/api/trpc-node',
    req,
    createContext: createTRPCFetchContext,
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => console.error(`❌ tRPC-node failed on ${path ?? '<no-path>'}:`, error)
        : undefined,
  });

export const runtime = 'nodejs';
export { handlerNodeRoutes as GET, handlerNodeRoutes as POST };