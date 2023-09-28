class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
   

    glowEffect(image){
        this.oScene.tweens.add({
            targets: image,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 1000, // Duration in milliseconds for scaling up
            yoyo: true, // Yoyo will make it scale down after scaling up
            repeat: -1, // -1 means it will repeat indefinitely
            ease: 'Linear', // Easing function for smooth scale changes
          });
    }

    hoverEffect(image){
        image.setInteractive().on("pointerover", () => {
			image.setScale(1.7,1.7)
		});
		image.setInteractive().on("pointerout", () => {
			image.setScale(1.5,1.5)
		});
    }
}