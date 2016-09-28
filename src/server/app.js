import koa from 'koa';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import views from 'koa-views';
import router from 'koa-router';


let app = new koa();

//三者有一定顺序
app.use(views(__dirname + '/dist', {
    map: {
        html: 'underscore',
        ejs:'ejs'
    }
}));

app.use(bodyParser());

app.use(convert(statics('./public')));

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
