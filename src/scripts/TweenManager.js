class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
   

    glowEffect(image){
        console.log(image)
        console.log("Hello im Glow Effect ")
        this.oScene.add.tween({
            targets: image,
            alpha:1,
            duration: 500,
            yoyo: true,
            repeat:-1,
        });
    }
}