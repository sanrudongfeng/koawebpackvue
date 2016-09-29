

function musicplayer(router){
    
    
    
router.get('/',async (ctx,next)=>{
        await ctx.render('musicplayer.html',{});
    });
}
module.exports =  musicplayer

