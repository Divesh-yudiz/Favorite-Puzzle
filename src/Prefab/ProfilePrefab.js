
// You can write more code here

/* START OF COMPILED CODE */

class ProfilePrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -40, y ?? -67);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 0, 1920, 1200);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 131586;
		rectangle_1.fillAlpha = 0.3;
		this.add(rectangle_1);

		// panel_h
		const panel_h = scene.add.image(40, 67, "panel_h");
		panel_h.scaleX = 4;
		panel_h.scaleY = 5;
		this.add(panel_h);

		// pngwing_com__4_
		const pngwing_com__4_ = scene.add.image(42, 5, "pngwing.com (4)");
		pngwing_com__4_.scaleX = 0.29;
		pngwing_com__4_.scaleY = 0.3;
		this.add(pngwing_com__4_);

		// pngfind_com_gold_frame_png_578767
		const pngfind_com_gold_frame_png_578767 = scene.add.image(41, 3, "pngfind.com-gold-frame-png-578767");
		pngfind_com_gold_frame_png_578767.scaleX = 0.1;
		pngfind_com_gold_frame_png_578767.scaleY = 0.1;
		this.add(pngfind_com_gold_frame_png_578767);

		// playerNameText
		const playerNameText = scene.add.text(-51, 97, "", {});
		playerNameText.text = "Favorite Player";
		playerNameText.setStyle({ "color": "#f9d600ff", "fontFamily": "New Times Roman", "fontSize": "30px" });
		this.add(playerNameText);

		// window_dekor_sheet0
		const window_dekor_sheet0 = scene.add.image(-368, -72, "window_dekor-sheet0");
		window_dekor_sheet0.scaleX = 1.5;
		window_dekor_sheet0.scaleY = 1.5;
		window_dekor_sheet0.angle = -62;
		this.add(window_dekor_sheet0);

		// window_dekor_sheet
		const window_dekor_sheet = scene.add.image(-312, -138, "window_dekor-sheet0");
		window_dekor_sheet.scaleX = 1.5;
		window_dekor_sheet.scaleY = 1.5;
		window_dekor_sheet.angle = -49;
		window_dekor_sheet.flipX = true;
		this.add(window_dekor_sheet);

		// window_dekor_sheet_1
		const window_dekor_sheet_1 = scene.add.image(374, -142, "window_dekor-sheet0");
		window_dekor_sheet_1.scaleX = 1.5;
		window_dekor_sheet_1.scaleY = 1.5;
		window_dekor_sheet_1.angle = 34;
		this.add(window_dekor_sheet_1);

		// window_dekor_sheet_2
		const window_dekor_sheet_2 = scene.add.image(436, -89, "window_dekor-sheet0");
		window_dekor_sheet_2.scaleX = 1.5;
		window_dekor_sheet_2.scaleY = 1.5;
		window_dekor_sheet_2.angle = 43;
		window_dekor_sheet_2.flipX = true;
		this.add(window_dekor_sheet_2);

		// button_winner_sheet0__1___1_
		const button_winner_sheet0__1___1_ = scene.add.image(221, 210, "button_winner-sheet0 (1) (1)");
		button_winner_sheet0__1___1_.scaleX = 1.2;
		button_winner_sheet0__1___1_.scaleY = 1.2;
		this.add(button_winner_sheet0__1___1_);

		// button_winner_sheet0__1___2_
		const button_winner_sheet0__1___2_ = scene.add.image(-125, 208, "button_winner-sheet0 (1) (2)");
		button_winner_sheet0__1___2_.scaleX = 1.2;
		button_winner_sheet0__1___2_.scaleY = 1.2;
		this.add(button_winner_sheet0__1___2_);

		// playerNameText_1
		const playerNameText_1 = scene.add.text(-195, 265, "", {});
		playerNameText_1.text = "Achievement";
		playerNameText_1.setStyle({ "color": "#f9d600ff", "fontFamily": "New Times Roman", "fontSize": "25px" });
		this.add(playerNameText_1);

		// playerNameText_2
		const playerNameText_2 = scene.add.text(153, 265, "", {});
		playerNameText_2.text = "Leaderboards";
		playerNameText_2.setStyle({ "color": "#f9d600ff", "fontFamily": "New Times Roman", "fontSize": "25px" });
		this.add(playerNameText_2);

		// button_close_sheet0
		const button_close_sheet0 = scene.add.image(420, -132, "button_close-sheet0");
		button_close_sheet0.scaleX = 1.2;
		button_close_sheet0.scaleY = 1.2;
		this.add(button_close_sheet0);

		// button_winner_sheet0__1___1_ (components)
		new OnHoverComponent(button_winner_sheet0__1___1_);

		// button_winner_sheet0__1___2_ (components)
		new OnHoverComponent(button_winner_sheet0__1___2_);

		// button_close_sheet0 (components)
		new PushOnClick(button_close_sheet0);
		new OnHoverComponent(button_close_sheet0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
