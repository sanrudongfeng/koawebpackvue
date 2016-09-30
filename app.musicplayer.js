import koa from 'koa';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import views from 'koa-views';
import router from './router';


let app = new koa();
//三者有一定顺序
app.use(views(__dirname + '/musicplayer/view', {
    map: {
        html: 'underscore',
        ejs: 'ejs'
    }
}));

app.use(bodyParser());

app.use(convert(statics('./musicplayer/public')));

//路由，只用传递一个即可
router(app);
app.listen(3000);

