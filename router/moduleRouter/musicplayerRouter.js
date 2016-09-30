import fs from 'fs';

function musicPlayer(router){
    router.prefix('/musicPlayer');
    router.get('/',async (ctx,next) =>{
        await ctx.render('musicplayer.html',{});
    });
    router.post('/list',async (ctx,next) =>{
        console.log(`${__dirname}/media`);
         let musicList = fs.readdirSync(`${__dirname}/media`);
         return ctx.body = {code:0,msg:'获取音乐列表成功',data:musicList};
    });
}
export default musicPlayer

