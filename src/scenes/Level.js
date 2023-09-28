
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(960, 540, "Background");

		// newGameImg
		const newGameImg = this.add.image(960, 553, "New-Game-Pop-Up");

		// setting_button
		const setting_button = this.add.image(1754, 144, "Setting");
		setting_button.scaleX = 0.6;
		setting_button.scaleY = 0.6;

		// profile_button
		const profile_button = this.add.image(197, 177, "Profile");
		profile_button.scaleX = 0.6;
		profile_button.scaleY = 0.6;

		// profilePrefab
		const profilePrefab = new ProfilePrefab(this, 960, 540);
		this.add.existing(profilePrefab);
		profilePrefab.visible = false;

		// gameSettingPrefab
		const gameSettingPrefab = new GameSettingPrefab(this, 134, 16);
		this.add.existing(gameSettingPrefab);
		gameSettingPrefab.visible = false;

		// arrow_1
		const arrow_1 = this.add.image(1605, 540, "Arrow_1");

		// arrow
		const arrow = this.add.image(332, 540, "Arrow_1");
		arrow.flipX = true;

		// CurtenPrefab
		const curtenPrefab = new CurtenPrefab(this, 960, 540);
		this.add.existing(curtenPrefab);

		// newGameImg (components)
		new OnHoverComponent(newGameImg);

		// arrow_1 (components)
		new OnHoverComponent(arrow_1);

		// arrow (components)
		new OnHoverComponent(arrow);

		this.newGameImg = newGameImg;
		this.setting_button = setting_button;
		this.profile_button = profile_button;
		this.profilePrefab = profilePrefab;
		this.gameSettingPrefab = gameSettingPrefab;
		this.curtenPrefab = curtenPrefab;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	newGameImg;
	/** @type {Phaser.GameObjects.Image} */
	setting_button;
	/** @type {Phaser.GameObjects.Image} */
	profile_button;
	/** @type {ProfilePrefab} */
	profilePrefab;
	/** @type {GameSettingPrefab} */
	gameSettingPrefab;
	/** @type {CurtenPrefab} */
	curtenPrefab;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.curtenPrefab.doorOpening();
		// this.loadGameFun(this.loadGameImg);
		// this.newGameFun(this.newGameImg);
		// this.shareFun(this.shareImg);
		this.onProfileButton();
		this.profilePrefab.onHover();

		this.newGameImg.setInteractive().on("pointerdown",()=>{
			this.curtenPrefab.doorClosing();
			setTimeout(()=>{
				this.scene.stop("Level")
				this.scene.start("PuzzleMenu")
			},1700)
		})
	}

	onProfileButton() {
		this.profile_button.setInteractive().on("pointerdown", () => {
			this.profilePrefab.visible = true;
		})
		this.profile_button.setInteractive().on("pointerover", () => {
			this.profile_button.setScale(0.7,0.7)
		})
		this.profile_button.setInteractive().on("pointerout", () => {
			this.profile_button.setScale(0.6,0.6)
		})
		this.setting_button.setInteractive().on("pointerover", () => {
			this.setting_button.setScale(0.7,0.7)
		})
		this.setting_button.setInteractive().on("pointerout", () => {
			this.setting_button.setScale(0.6,0.6)
		})

		this.profilePrefab.button_close.setInteractive().on("pointerdown", () => {
			this.profilePrefab.visible = false;
		})

		this.setting_button.setInteractive().on('pointerdown', () => {
			this.gameSettingPrefab.visible = true;
		})

		this.gameSettingPrefab.button_back.setInteractive().on('pointerdown', () => {
			this.gameSettingPrefab.visible = false;
		})
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
