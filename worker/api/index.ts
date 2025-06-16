import { Hono } from 'hono'

export type HonoEnv = {
  Bindings: Cloudflare.Env & {
    //eventContext: EventContext
  };
}
const app = new Hono<HonoEnv>().basePath('/api');

app.get('/', (c) => c.text('Hello from Cloudflare Workers!'));

export default app
