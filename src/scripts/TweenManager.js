class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
   

    glowEffect(image){
        console.log(image)
        image.setAlpha(0)
        this.oScene.add.tween({
            targets: image,
            alpha:1,
            duration: 1000,
            ease:"Power",
            yoyo: true,
            repeat:-1,
        });
    }
}