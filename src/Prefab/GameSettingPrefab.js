
// You can write more code here

/* START OF COMPILED CODE */

class GameSettingPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -826, y ?? -524);

		// bg_image
		const bg_image = scene.add.image(826, 524, "bg-image");
		this.add(bg_image);

		// line
		const line = scene.add.image(492, 480, "line");
		line.scaleX = 7;
		line.scaleY = 5;
		this.add(line);

		// button_back
		const button_back = scene.add.image(-1, 72, "button_back-sheet0");
		button_back.scaleX = 2;
		button_back.scaleY = 2;
		this.add(button_back);

		// button_language_sheet0
		const button_language_sheet0 = scene.add.image(366, 479, "button_language-sheet0");
		button_language_sheet0.scaleX = 2;
		button_language_sheet0.scaleY = 2;
		this.add(button_language_sheet0);

		// button_info_sheet0
		const button_info_sheet0 = scene.add.image(599, 479, "button_info-sheet0");
		button_info_sheet0.scaleX = 1.6;
		button_info_sheet0.scaleY = 1.6;
		this.add(button_info_sheet0);

		// line_1
		const line_1 = scene.add.image(1142, 479, "line");
		line_1.scaleX = 7;
		line_1.scaleY = 5;
		this.add(line_1);

		// MusicButtonContainer
		const musicButtonContainer = scene.add.container(826, 524);
		this.add(musicButtonContainer);

		// soundBtnOff
		const soundBtnOff = scene.add.image(214, -45, "toggleBtnOff");
		soundBtnOff.scaleX = 1.6;
		soundBtnOff.scaleY = 1.6;
		musicButtonContainer.add(soundBtnOff);

		// soundBtnOn
		const soundBtnOn = scene.add.image(215, -45, "toggleBtnOn");
		soundBtnOn.scaleX = 1.6;
		soundBtnOn.scaleY = 1.6;
		musicButtonContainer.add(soundBtnOn);

		// MusicButtonContainer_1
		const musicButtonContainer_1 = scene.add.container(0, 0);
		this.add(musicButtonContainer_1);

		// toggleBtnOff
		const toggleBtnOff = scene.add.image(1277, 474, "toggleBtnOff");
		toggleBtnOff.scaleX = 1.6;
		toggleBtnOff.scaleY = 1.6;
		musicButtonContainer_1.add(toggleBtnOff);

		// toggleBtnOn
		const toggleBtnOn = scene.add.image(1277, 474, "toggleBtnOn");
		toggleBtnOn.scaleX = 1.6;
		toggleBtnOn.scaleY = 1.6;
		musicButtonContainer_1.add(toggleBtnOn);

		// MusicButtonContainer_2
		const musicButtonContainer_2 = scene.add.container(0, 0);
		this.add(musicButtonContainer_2);

		// button_switch_sheet_2
		const button_switch_sheet_2 = scene.add.image(487, 738, "toggleBtnOff");
		button_switch_sheet_2.scaleX = 1.6;
		button_switch_sheet_2.scaleY = 1.6;
		musicButtonContainer_2.add(button_switch_sheet_2);

		// button_switch_sheet_3
		const button_switch_sheet_3 = scene.add.image(485, 738, "toggleBtnOn");
		button_switch_sheet_3.scaleX = 1.6;
		button_switch_sheet_3.scaleY = 1.6;
		musicButtonContainer_2.add(button_switch_sheet_3);

		// MusicButtonContainer_3
		const musicButtonContainer_3 = scene.add.container(0, 0);
		this.add(musicButtonContainer_3);

		// button_switch_sheet_4
		const button_switch_sheet_4 = scene.add.image(1160, 738, "toggleBtnOff");
		button_switch_sheet_4.scaleX = 1.6;
		button_switch_sheet_4.scaleY = 1.6;
		musicButtonContainer_3.add(button_switch_sheet_4);

		// lhnBtnOff
		const lhnBtnOff = scene.add.image(1160, 738, "toggleBtnOn");
		lhnBtnOff.scaleX = 1.6;
		lhnBtnOff.scaleY = 1.6;
		musicButtonContainer_3.add(lhnBtnOff);

		// languageText
		const languageText = scene.add.text(305, 561, "", {});
		languageText.text = "Language";
		languageText.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText);

		// languageText_1
		const languageText_1 = scene.add.text(573, 561, "", {});
		languageText_1.text = "Info";
		languageText_1.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_1);

		// languageText_2
		const languageText_2 = scene.add.text(1006.5029296875, 561, "", {});
		languageText_2.text = "Sound";
		languageText_2.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_2);

		// languageText_3
		const languageText_3 = scene.add.text(1248.595947265625, 561, "", {});
		languageText_3.text = "Music";
		languageText_3.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_3);

		// languageText_4
		const languageText_4 = scene.add.text(351, 815, "", {});
		languageText_4.text = "Realistic Game Mode";
		languageText_4.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_4);

		// languageText_5
		const languageText_5 = scene.add.text(1086, 815, "", {});
		languageText_5.text = "Left-Handed \nNavigation ";
		languageText_5.setStyle({ "align": "center", "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_5);

		// languageText_6
		const languageText_6 = scene.add.text(386, 259, "", {});
		languageText_6.text = "Terms of Use";
		languageText_6.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_6);

		// languageText_7
		const languageText_7 = scene.add.text(1075, 259, "", {});
		languageText_7.text = "Privacy Policy";
		languageText_7.setStyle({ "color": "#ffdd09ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(languageText_7);

		// jigsaw_logo
		const jigsaw_logo = scene.add.image(824, 144, "jigsaw_logo");
		this.add(jigsaw_logo);

		// button_back (components)
		new OnHoverComponent(button_back);

		// button_language_sheet0 (components)
		new OnHoverComponent(button_language_sheet0);

		// button_info_sheet0 (components)
		new OnHoverComponent(button_info_sheet0);

		// musicButtonContainer (components)
		new OnHoverComponent(musicButtonContainer);

		// soundBtnOn (components)
		new ToggleButton(soundBtnOn);

		// musicButtonContainer_1 (components)
		new OnHoverComponent(musicButtonContainer_1);

		// toggleBtnOff (components)
		new ToggleButton(toggleBtnOff);

		// toggleBtnOn (components)
		new ToggleButton(toggleBtnOn);

		// musicButtonContainer_2 (components)
		new OnHoverComponent(musicButtonContainer_2);

		// button_switch_sheet_3 (components)
		new ToggleButton(button_switch_sheet_3);

		// musicButtonContainer_3 (components)
		new OnHoverComponent(musicButtonContainer_3);

		// lhnBtnOff (components)
		new ToggleButton(lhnBtnOff);

		// languageText_6 (components)
		new OnHoverComponent(languageText_6);

		// languageText_7 (components)
		new OnHoverComponent(languageText_7);

		this.button_back = button_back;
		this.musicButtonContainer = musicButtonContainer;
		this.soundBtnOff = soundBtnOff;
		this.soundBtnOn = soundBtnOn;
		this.musicButtonContainer_1 = musicButtonContainer_1;
		this.musicButtonContainer_2 = musicButtonContainer_2;
		this.musicButtonContainer_3 = musicButtonContainer_3;
		this.lhnBtnOff = lhnBtnOff;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	button_back;
	/** @type {Phaser.GameObjects.Container} */
	musicButtonContainer;
	/** @type {Phaser.GameObjects.Image} */
	soundBtnOff;
	/** @type {Phaser.GameObjects.Image} */
	soundBtnOn;
	/** @type {Phaser.GameObjects.Container} */
	musicButtonContainer_1;
	/** @type {Phaser.GameObjects.Container} */
	musicButtonContainer_2;
	/** @type {Phaser.GameObjects.Container} */
	musicButtonContainer_3;
	/** @type {Phaser.GameObjects.Image} */
	lhnBtnOff;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
