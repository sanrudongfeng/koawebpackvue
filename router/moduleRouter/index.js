import musicPlayer from './musicPlayerRouter';


function moduleRouter(router) {
    /*router.get('/',async (ctx,next)=>{
        console.log('jinlai');
    });*/
    musicPlayer(router)
}
export default moduleRouter