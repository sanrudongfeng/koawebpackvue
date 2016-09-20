import koa from 'koa';
import crsf from 'crsf';
import router from 'koa-router';

let app = new koa();
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
