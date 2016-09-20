import koa from 'koa';
import router from 'koa-router';

let app = new koa();
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
