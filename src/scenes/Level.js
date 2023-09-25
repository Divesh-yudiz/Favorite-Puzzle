
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

		// bg_image
		this.add.image(960, 540, "bg-image");

		// daco_1495093
		this.add.image(945, 486, "Daco_1495093");

		// line
		const line = this.add.image(961, 922, "line");
		line.scaleX = 60;
		line.scaleY = 5;

		// shareImg
		const shareImg = this.add.image(1637, 534, "img_myphotos-sheet0");

		// newGameImg
		const newGameImg = this.add.image(963, 512, "img_newgame-sheet0");
		newGameImg.scaleX = 1.3;
		newGameImg.scaleY = 1.3;

		// loadGameImg
		const loadGameImg = this.add.image(280, 575, "img_continuegame-sheet0");

		// setting_button
		const setting_button = this.add.image(1754, 120, "setting-button");
		setting_button.scaleX = 1.2;
		setting_button.scaleY = 1.2;

		// profile_button
		const profile_button = this.add.image(1614, 120, "buttons_main-sheet0");
		profile_button.scaleX = 1.2;
		profile_button.scaleY = 1.2;

		// profile
		const profile = this.add.text(1585, 166, "", {});
		profile.text = "Profile";
		profile.setStyle({ "color": "#fbf04aff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// setting
		const setting = this.add.text(1728, 165, "", {});
		setting.text = "Setting";
		setting.setStyle({ "color": "#fbf04aff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// newBtnContainer
		const newBtnContainer = this.add.container(981.6736079276402, 922.382458965643);

		// gold_button
		const gold_button = this.add.image(-2.842170943040401e-14, -7.105427357601002e-15, "gold-button");
		gold_button.scaleX = 2;
		gold_button.scaleY = 1.3;
		newBtnContainer.add(gold_button);

		// gold_button_black
		const gold_button_black = this.add.image(-1, 1, "gold-button-black");
		gold_button_black.scaleX = 2;
		gold_button_black.scaleY = 1.3;
		newBtnContainer.add(gold_button_black);

		// new-game
		const new_game = this.add.text(-2.842170943040401e-14, -7.105427357601002e-15, "", {});
		new_game.setOrigin(0.5, 0.5);
		new_game.text = "NEW GAME";
		new_game.setStyle({ "color": "#000000ff", "fontFamily": "New Times Roman", "fontSize": "40px" });
		newBtnContainer.add(new_game);

		// loadGamebtnContainer
		const loadGamebtnContainer = this.add.container(303, 923);

		// loadGameBtnLight
		const loadGameBtnLight = this.add.image(2.4636706513580986, -2.4636706513580986, "greenButtonLight");
		loadGamebtnContainer.add(loadGameBtnLight);

		// loadGameBtnDark
		const loadGameBtnDark = this.add.image(2.4636706513580986, -2.4636706513580986, "button_big_green-sheet0");
		loadGamebtnContainer.add(loadGameBtnDark);

		// loadGameText
		const loadGameText = this.add.text(31.4636706513581, -2.4636706513580986, "", {});
		loadGameText.setOrigin(0.5, 0.5);
		loadGameText.text = "Load Game";
		loadGameText.setStyle({ "color": "#e7d305ff", "fontFamily": "New Times Roman", "fontSize": "35px" });
		loadGamebtnContainer.add(loadGameText);

		// floppy_disk__1_
		const floppy_disk__1_ = this.add.image(-86.5363293486419, -2.4636706513580986, "floppy-disk (1)");
		floppy_disk__1_.scaleX = 0.7;
		floppy_disk__1_.scaleY = 0.7;
		loadGamebtnContainer.add(floppy_disk__1_);

		// shareBtnContainer
		const shareBtnContainer = this.add.container(1667, 916);

		// greenButtonLight
		const greenButtonLight = this.add.image(0, 0, "greenButtonLight");
		shareBtnContainer.add(greenButtonLight);

		// shareBtn
		const shareBtn = this.add.image(0, 0, "button_big_green-sheet0");
		shareBtnContainer.add(shareBtn);

		// share
		const share = this.add.text(28, 0, "", {});
		share.setOrigin(0.5, 0.5);
		share.text = "Share";
		share.setStyle({ "color": "#e7d305ff", "fontFamily": "New Times Roman", "fontSize": "35px" });
		shareBtnContainer.add(share);

		// share__1_
		const share__1_ = this.add.image(-60, 0, "share (1)");
		share__1_.scaleX = 0.8;
		share__1_.scaleY = 0.8;
		shareBtnContainer.add(share__1_);

		// jigsaw_logo
		const jigsaw_logo = this.add.image(477, 155, "jigsaw_logo");
		jigsaw_logo.scaleX = 1.5;
		jigsaw_logo.scaleY = 1.5;

		// CurtenPrefab
		const curtenPrefab = new CurtenPrefab(this, 960, 540);
		this.add.existing(curtenPrefab);

		// profilePrefab
		const profilePrefab = new ProfilePrefab(this, 960, 540);
		this.add.existing(profilePrefab);
		profilePrefab.visible = false;

		// gameSettingPrefab
		const gameSettingPrefab = new GameSettingPrefab(this, 134, 16);
		this.add.existing(gameSettingPrefab);
		gameSettingPrefab.visible = false;

		// setting_button (components)
		new OnHoverComponent(setting_button);

		// profile_button (components)
		new OnHoverComponent(profile_button);

		this.shareImg = shareImg;
		this.newGameImg = newGameImg;
		this.loadGameImg = loadGameImg;
		this.setting_button = setting_button;
		this.profile_button = profile_button;
		this.newBtnContainer = newBtnContainer;
		this.gold_button = gold_button;
		this.gold_button_black = gold_button_black;
		this.loadGamebtnContainer = loadGamebtnContainer;
		this.loadGameBtnLight = loadGameBtnLight;
		this.loadGameBtnDark = loadGameBtnDark;
		this.shareBtnContainer = shareBtnContainer;
		this.greenButtonLight = greenButtonLight;
		this.shareBtn = shareBtn;
		this.share = share;
		this.share__1_ = share__1_;
		this.curtenPrefab = curtenPrefab;
		this.profilePrefab = profilePrefab;
		this.gameSettingPrefab = gameSettingPrefab;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	shareImg;
	/** @type {Phaser.GameObjects.Image} */
	newGameImg;
	/** @type {Phaser.GameObjects.Image} */
	loadGameImg;
	/** @type {Phaser.GameObjects.Image} */
	setting_button;
	/** @type {Phaser.GameObjects.Image} */
	profile_button;
	/** @type {Phaser.GameObjects.Container} */
	newBtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	gold_button;
	/** @type {Phaser.GameObjects.Image} */
	gold_button_black;
	/** @type {Phaser.GameObjects.Container} */
	loadGamebtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	loadGameBtnLight;
	/** @type {Phaser.GameObjects.Image} */
	loadGameBtnDark;
	/** @type {Phaser.GameObjects.Container} */
	shareBtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	greenButtonLight;
	/** @type {Phaser.GameObjects.Image} */
	shareBtn;
	/** @type {Phaser.GameObjects.Text} */
	share;
	/** @type {Phaser.GameObjects.Image} */
	share__1_;
	/** @type {CurtenPrefab} */
	curtenPrefab;
	/** @type {ProfilePrefab} */
	profilePrefab;
	/** @type {GameSettingPrefab} */
	gameSettingPrefab;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.curtenPrefab.doorOpening();
		this.loadGameFun(this.loadGameImg);
		this.newGameFun(this.newGameImg);
		this.shareFun(this.shareImg);
		this.goldIconHover();
		this.onProfileButton();
		this.profilePrefab.onHover();
	}


	loadGameFun(image) {
		this.loadGamebtnContainer.setSize(371, 115);
		this.loadGamebtnContainer.setInteractive();
		this.loadGamebtnContainer.on('pointerover', (pointer) => {

			this.incImage(image, 1.2, 1.2);
			this.loadGameBtnDark.visible = false;
		});

		this.loadGamebtnContainer.on('pointerout', (pointer) => {

			this.decImage(image, 1, 1);
			this.loadGameBtnDark.visible = true
		});
	}

	newGameFun(image) {
		this.newBtnContainer.setSize(350, 100)
		this.newBtnContainer.setInteractive();
		this.newBtnContainer.on('pointerover', (pointer) => {
			this.incImage(image, 1.5, 1.5);
			this.gold_button_black.visible = false;
		});

		this.newBtnContainer.on('pointerout', (pointer) => {
			this.decImage(image, 1.3, 1.3);
			this.gold_button_black.visible = true;
		});

		this.newBtnContainer.on('pointerdown', () => {
			this.curtenPrefab.doorClosing();
			setTimeout(() => {
				this.scene.stop("Level");

				this.scene.start("PuzzleMenu");
			}, 2000);
		})
	}

	shareFun(image) {
		this.shareBtnContainer.setSize(371, 115)
		this.shareBtnContainer.setInteractive();
		this.shareBtnContainer.on('pointerover', (pointer) => {
			this.incImage(image, 1.2, 1.2);
			this.shareBtn.visible = false
		});

		this.shareBtnContainer.on('pointerout', (pointer) => {
			this.decImage(image, 1, 1);
			this.shareBtn.visible = true
		});
	}

	goldIconHover() {
		this.profile_button.setInteractive();
		this.profile_button.on('pointerover', (pointer) => {
			this.profile_button.alpha = 0.5
		});

		this.profile_button.on('pointerout', (pointer) => {
			this.profile_button.alpha = 1
		});

		this.setting_button.setInteractive();
		this.setting_button.on('pointerover', (pointer) => {
			this.setting_button.alpha = 0.5
		});

		this.setting_button.on('pointerout', (pointer) => {
			this.setting_button.alpha = 1
		});
	}

	incImage(image, x, y) {
		this.tweens.add({
			targets: image,
			scaleX: x,
			scaleY: y,
			duration: 200,
			ease: 'Linear',
		});
	}

	decImage(image, x, y) {
		this.tweens.add({
			targets: image,
			scaleX: x,
			scaleY: y,
			duration: 200,
			ease: 'Linear',
		});
	}

	onProfileButton() {
		this.profile_button.setInteractive().on("pointerdown", () => {

			this.profilePrefab.visible = true;
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
