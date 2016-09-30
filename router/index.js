import router from 'koa-router';
import moduleRouter from './moduleRouter';


/*fs.readdirSync(routerDir).forEach((fileName) => {
    if (fileName.endsWith('Router.js')) {
        let routerPerfix = fileName.replace('Router.js','');
        let routerPath = path.join(routerDir,fileName);
            routerEntity.prefix(routerPerfix);
            require(routerPath)(routerEntity);//将router作为参数向下传递
        }
});*/
export default function (app){
    let routerEntity = new router();
    app
        .use(routerEntity.routes())
        .use(routerEntity.allowedMethods());
  /*  routerEntity.get('/',async (ctx,next)=>{
        console.log('jinlai');
    });*/
    moduleRouter(routerEntity);
}
