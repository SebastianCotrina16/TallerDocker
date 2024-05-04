import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger())
  .get('/', () => 'hi')
  .post('/goodbye', () => 'fin del taller')
  .post('/hello', () => 'world')
  .listen(3000)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}/swagger`
);
