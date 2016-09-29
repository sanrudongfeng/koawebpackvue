import router from 'koa-router';
import fs from 'fs';
import path from 'path';

const routerEntity = new router();
let routerDir = `${__dirname}/moduleRouter`;
fs.readdirSync(routerDir).forEach((fileName) => {
    if (fileName.endsWith('Router.js')) {
        let routerPerfix = fileName.replace('Router.js','');
        let routerPath = path.join(routerDir,fileName);
            routerEntity.prefix(routerPerfix);
            require(routerPath)(routerEntity);//将router作为参数向下传递
        }
});



export default routerEntity;
