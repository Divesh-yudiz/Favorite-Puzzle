
// You can write more code here

/* START OF COMPILED CODE */

class SelectPuzzle extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 21, y ?? -391.22230804587764);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 0, 1920, 1200);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 131586;
		rectangle_1.fillAlpha = 0.3;
		this.add(rectangle_1);

		// panel_h
		const panel_h = scene.add.image(0, 0, "panel_h");
		panel_h.scaleX = 4;
		panel_h.scaleY = 5;
		this.add(panel_h);

		// window_dekor_sheet0
		const window_dekor_sheet0 = scene.add.image(-408, -128, "window_dekor-sheet0");
		window_dekor_sheet0.scaleX = 1.5;
		window_dekor_sheet0.scaleY = 1.5;
		window_dekor_sheet0.angle = -56;
		this.add(window_dekor_sheet0);

		// window_dekor_sheet
		const window_dekor_sheet = scene.add.image(-351, -194, "window_dekor-sheet0");
		window_dekor_sheet.scaleX = 1.5;
		window_dekor_sheet.scaleY = 1.5;
		window_dekor_sheet.angle = -56;
		window_dekor_sheet.flipX = true;
		this.add(window_dekor_sheet);

		// window_dekor_sheet_1
		const window_dekor_sheet_1 = scene.add.image(332, -206, "window_dekor-sheet0");
		window_dekor_sheet_1.scaleX = 1.5;
		window_dekor_sheet_1.scaleY = 1.5;
		window_dekor_sheet_1.angle = 34;
		this.add(window_dekor_sheet_1);

		// window_dekor_sheet_2
		const window_dekor_sheet_2 = scene.add.image(394, -147, "window_dekor-sheet0");
		window_dekor_sheet_2.scaleX = 1.5;
		window_dekor_sheet_2.scaleY = 1.5;
		window_dekor_sheet_2.angle = 43;
		window_dekor_sheet_2.flipX = true;
		this.add(window_dekor_sheet_2);

		// button_close
		const button_close = scene.add.image(-402, -172, "button_close-sheet0");
		button_close.scaleX = 1.2;
		button_close.scaleY = 1.2;
		this.add(button_close);

		// button_gold_win_sheet1
		const button_gold_win_sheet1 = scene.add.image(208, -83, "button_gold_win-sheet1");
		this.add(button_gold_win_sheet1);

		// button_arrow_sheet0
		const button_arrow_sheet0 = scene.add.image(335, -86, "button_arrow-sheet0");
		this.add(button_arrow_sheet0);

		// button_arrow_sheet
		const button_arrow_sheet = scene.add.image(80, -82, "button_arrow-sheet0");
		button_arrow_sheet.flipX = true;
		this.add(button_arrow_sheet);

		// line
		const line = scene.add.image(213, 37, "line");
		line.scaleX = 5;
		line.scaleY = 2;
		this.add(line);

		// MusicButtonContainer
		const musicButtonContainer = scene.add.container(86, -7);
		this.add(musicButtonContainer);

		// soundBtnOff
		const soundBtnOff = scene.add.image(55, 43, "toggleBtnOff");
		musicButtonContainer.add(soundBtnOff);

		// soundBtnOn
		const soundBtnOn = scene.add.image(56, 43, "toggleBtnOn");
		musicButtonContainer.add(soundBtnOn);

		// MusicButtonContainer_1
		const musicButtonContainer_1 = scene.add.container(227, -4);
		this.add(musicButtonContainer_1);

		// toggleBtnOff
		const toggleBtnOff = scene.add.image(60, 37, "toggleBtnOff");
		musicButtonContainer_1.add(toggleBtnOff);

		// toggleBtnOn
		const toggleBtnOn = scene.add.image(60, 37, "toggleBtnOn");
		musicButtonContainer_1.add(toggleBtnOn);

		// form_Btn_Text
		const form_Btn_Text = scene.add.text(118, 79, "", {});
		form_Btn_Text.text = "Form";
		form_Btn_Text.setStyle({ "color": "#f5ce2aff", "fontFamily": "New Times Roman", "fontSize": "20px" });
		this.add(form_Btn_Text);

		// form_Btn_Text_1
		const form_Btn_Text_1 = scene.add.text(231, 81, "", {});
		form_Btn_Text_1.text = "With Rotation";
		form_Btn_Text_1.setStyle({ "color": "#f5ce2aff", "fontFamily": "New Times Roman", "fontSize": "20px" });
		this.add(form_Btn_Text_1);

		// StartGameBtnContainer
		const startGameBtnContainer = scene.add.container(0, 0);
		this.add(startGameBtnContainer);

		// gold_button_3
		const gold_button_3 = scene.add.image(200, 188, "gold-button-black");
		gold_button_3.scaleX = 1.5;
		startGameBtnContainer.add(gold_button_3);

		// button_gold_1
		const button_gold_1 = scene.add.image(198, 191, "button_gold_win-sheet1");
		button_gold_1.scaleX = 1.5;
		startGameBtnContainer.add(button_gold_1);

		// gold_button_2
		const gold_button_2 = scene.add.image(201, 190, "gold-button");
		gold_button_2.scaleX = 1.5;
		startGameBtnContainer.add(gold_button_2);

		// startGame
		const startGame = scene.add.text(131, 174, "", {});
		startGame.text = "New Game";
		startGame.setStyle({ "color": "#100d0dff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		startGameBtnContainer.add(startGame);

		// button_gold_win_sheet_1
		const button_gold_win_sheet_1 = scene.add.image(-159, 191, "button_gold_win-sheet1");
		button_gold_win_sheet_1.scaleX = 1.5;
		this.add(button_gold_win_sheet_1);

		// daco_1495093
		const daco_1495093 = scene.add.image(-189, -23, "Daco_1495093");
		daco_1495093.scaleX = 0.5;
		daco_1495093.scaleY = 0.5;
		this.add(daco_1495093);

		// img_newgame_sheet0
		const img_newgame_sheet0 = scene.add.image(-178, -9, "img_newgame-sheet0");
		img_newgame_sheet0.scaleX = 0.5;
		img_newgame_sheet0.scaleY = 0.5;
		this.add(img_newgame_sheet0);

		// preview_box_2
		const preview_box_2 = scene.add.image(-181, -12, "preview_box_2");
		preview_box_2.scaleX = 4.3;
		preview_box_2.scaleY = 4.3;
		this.add(preview_box_2);

		// puzzleImage
		const puzzleImage = scene.add.image(-183, -11, "9");
		puzzleImage.scaleX = 0.225;
		puzzleImage.scaleY = 0.19;
		this.add(puzzleImage);

		// puzzlespreview_sheet0
		const puzzlespreview_sheet0 = scene.add.image(-130, 32, "puzzlespreview-sheet0");
		puzzlespreview_sheet0.scaleX = 0.5894591890606568;
		puzzlespreview_sheet0.scaleY = 0.5707246661013834;
		this.add(puzzlespreview_sheet0);

		// puzzlespreview_sheet0__2_
		const puzzlespreview_sheet0__2_ = scene.add.image(-235, -54, "puzzlespreview-sheet0 (2)");
		puzzlespreview_sheet0__2_.scaleX = 0.5894591890606568;
		puzzlespreview_sheet0__2_.scaleY = 0.5707246661013834;
		this.add(puzzlespreview_sheet0__2_);

		// rounded_rectangle_filled_svgrepo_com
		const rounded_rectangle_filled_svgrepo_com = scene.add.image(208, -83, "rounded-rectangle-filled-svgrepo-com");
		rounded_rectangle_filled_svgrepo_com.scaleX = 0.18950671362161725;
		rounded_rectangle_filled_svgrepo_com.scaleY = 0.08382154088248875;
		rounded_rectangle_filled_svgrepo_com.alpha = 0.4;
		rounded_rectangle_filled_svgrepo_com.alphaTopLeft = 0.4;
		rounded_rectangle_filled_svgrepo_com.alphaTopRight = 0.4;
		rounded_rectangle_filled_svgrepo_com.alphaBottomLeft = 0.4;
		rounded_rectangle_filled_svgrepo_com.alphaBottomRight = 0.4;
		this.add(rounded_rectangle_filled_svgrepo_com);

		// text_1
		const text_1 = scene.add.text(189, -101, "", {});
		text_1.text = "16";
		text_1.setStyle({ "color": "#f6dc54ff", "fontFamily": "New Times Roman", "fontSize": "35px" });
		this.add(text_1);

		// levelPrev
		const levelPrev = scene.add.text(145, -100, "", {});
		levelPrev.alpha = 0.58;
		levelPrev.alphaTopLeft = 0.58;
		levelPrev.alphaTopRight = 0.58;
		levelPrev.alphaBottomLeft = 0.58;
		levelPrev.alphaBottomRight = 0.58;
		levelPrev.text = "9";
		levelPrev.setStyle({ "color": "#f6dc54ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(levelPrev);

		// levelNext
		const levelNext = scene.add.text(250, -98, "", {});
		levelNext.alpha = 0.5;
		levelNext.alphaTopLeft = 0.5;
		levelNext.alphaTopRight = 0.5;
		levelNext.alphaBottomLeft = 0.5;
		levelNext.alphaBottomRight = 0.5;
		levelNext.text = "25";
		levelNext.setStyle({ "color": "#f6dc54ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(levelNext);

		// text_3
		const text_3 = scene.add.text(130, -178, "", {});
		text_3.text = "Game Difficulty";
		text_3.setStyle({ "color": "#f7e347ff", "fontFamily": "New Times Roman", "fontSize": "25px" });
		this.add(text_3);

		// rounded_rectangle_filled_svgrepo_com_1
		const rounded_rectangle_filled_svgrepo_com_1 = scene.add.image(-157, 191, "rounded-rectangle-filled-svgrepo-com");
		rounded_rectangle_filled_svgrepo_com_1.scaleX = 0.27369724377533666;
		rounded_rectangle_filled_svgrepo_com_1.scaleY = 0.08347491781147881;
		rounded_rectangle_filled_svgrepo_com_1.alpha = 0.6;
		rounded_rectangle_filled_svgrepo_com_1.alphaTopLeft = 0.6;
		rounded_rectangle_filled_svgrepo_com_1.alphaTopRight = 0.6;
		rounded_rectangle_filled_svgrepo_com_1.alphaBottomLeft = 0.6;
		rounded_rectangle_filled_svgrepo_com_1.alphaBottomRight = 0.6;
		this.add(rounded_rectangle_filled_svgrepo_com_1);

		// text_4
		const text_4 = scene.add.text(-257, 176, "", {});
		text_4.text = "Reward";
		text_4.setStyle({ "color": "#f5e248ff", "fontFamily": "New Times Roman", "fontSize": "25px" });
		this.add(text_4);

		// text_5
		const text_5 = scene.add.text(-120, 179, "", {});
		text_5.text = "5";
		text_5.setStyle({ "color": "#f5e248ff", "fontFamily": "New Times Roman", "fontSize": "25px" });
		this.add(text_5);

		// icon_malahit_sheet0
		const icon_malahit_sheet0 = scene.add.image(-79, 191, "icon_malahit-sheet0");
		this.add(icon_malahit_sheet0);

		// button_close (components)
		new PushOnClick(button_close);
		new OnHoverComponent(button_close);
		new CurserToPointer(button_close);

		// musicButtonContainer (components)
		new OnHoverComponent(musicButtonContainer);
		new ToggleButton(musicButtonContainer);
		new CurserToPointer(musicButtonContainer);

		// soundBtnOn (components)
		new ToggleButton(soundBtnOn);

		// musicButtonContainer_1 (components)
		new OnHoverComponent(musicButtonContainer_1);
		new ToggleButton(musicButtonContainer_1);

		// toggleBtnOff (components)
		new ToggleButton(toggleBtnOff);

		// toggleBtnOn (components)
		new ToggleButton(toggleBtnOn);

		// gold_button_2 (components)
		new GlowButton(gold_button_2);

		this.button_close = button_close;
		this.musicButtonContainer = musicButtonContainer;
		this.soundBtnOff = soundBtnOff;
		this.soundBtnOn = soundBtnOn;
		this.musicButtonContainer_1 = musicButtonContainer_1;
		this.startGameBtnContainer = startGameBtnContainer;
		this.gold_button_3 = gold_button_3;
		this.button_gold_1 = button_gold_1;
		this.gold_button_2 = gold_button_2;
		this.puzzleImage = puzzleImage;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	button_close;
	/** @type {Phaser.GameObjects.Container} */
	musicButtonContainer;
	/** @type {Phaser.GameObjects.Image} */
	soundBtnOff;
	/** @type {Phaser.GameObjects.Image} */
	soundBtnOn;
	/** @type {Phaser.GameObjects.Container} */
	musicButtonContainer_1;
	/** @type {Phaser.GameObjects.Container} */
	startGameBtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	gold_button_3;
	/** @type {Phaser.GameObjects.Image} */
	button_gold_1;
	/** @type {Phaser.GameObjects.Image} */
	gold_button_2;
	/** @type {Phaser.GameObjects.Image} */
	puzzleImage;

	/* START-USER-CODE */

	// Write your code here.

	currentButton = 1;

	switchButtons(oScene) {
		this.gold_button_2.setAlpha(0); // Start with the image invisible
		console.log("Hello im switch Button ")
		// Create a fade-in tween
		const fadeInTween = this.scene.tweens.add({
			targets: this.gold_button_2,
			alpha: 1, // Fade to fully visible
			duration: 1000, // 1000 milliseconds (1 second)
			ease: 'Linear',
			yoyo: true,
			repeat: -1 // Repeat indefinitely
		});

		// Create a fade-out tween
		const fadeOutTween = this.scene.tweens.add({
			targets: this.gold_button_2,
			alpha: 0, // Fade to fully invisible
			duration: 1000, // 1000 milliseconds (1 second)
			ease: 'Linear',
			yoyo: true,
			repeat: -1, // Repeat indefinitely
			onComplete:()=>{
				console.log("im fade out")
			}
		});

		// Start both tweens simultaneously
		fadeInTween.play();
		fadeOutTween.play();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
