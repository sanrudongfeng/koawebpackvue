

function musicPlayer(router){
    router.prefix('/musicPlayer');
    router.get('/',async (ctx,next) =>{
        console
        await ctx.render('musicplayer.html',{});
    });
}
export default musicPlayer

