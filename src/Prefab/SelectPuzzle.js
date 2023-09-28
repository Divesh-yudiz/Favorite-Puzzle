
// You can write more code here

/* START OF COMPILED CODE */

class SelectPuzzle extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 21, y ?? -391.22230804587764);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 0, 1920, 1080);
		rectangle_1.alpha = 0.3;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		this.add(rectangle_1);

		// game_difficulty_board
		const game_difficulty_board = scene.add.image(51, -33, "Game-difficulty-board");
		this.add(game_difficulty_board);

		// button_close
		const button_close = scene.add.image(334, -298, "Cross-button");
		button_close.scaleX = 1.2;
		button_close.scaleY = 1.2;
		this.add(button_close);

		// button_arrow_sheet
		const button_arrow_sheet = scene.add.image(80, -82, "button_arrow-sheet0");
		button_arrow_sheet.flipX = true;
		this.add(button_arrow_sheet);

		// preview_box_2
		const preview_box_2 = scene.add.image(52, -20, "square-2");
		this.add(preview_box_2);

		// puzzleImage
		const puzzleImage = scene.add.image(46, -28, "image");
		this.add(puzzleImage);

		// dummyPuzzlePiece2
		const dummyPuzzlePiece2 = scene.add.image(162, 105, "puzzlespreview-sheet0");
		dummyPuzzlePiece2.setOrigin(1, 1);
		this.add(dummyPuzzlePiece2);

		// dummyPuzzlePiece1
		const dummyPuzzlePiece1 = scene.add.image(-70, -161, "puzzlespreview-sheet0 (2)");
		dummyPuzzlePiece1.setOrigin(0, 0);
		this.add(dummyPuzzlePiece1);

		// choosing_button
		const choosing_button = scene.add.image(50, 198, "choosing-button");
		this.add(choosing_button);

		// new_game_button
		const new_game_button = scene.add.image(54, 369, "New-game-button");
		this.add(new_game_button);

		// next_1
		const next_1 = scene.add.image(-48, 203, "next-1");
		this.add(next_1);

		// next_2
		const next_2 = scene.add.image(146, 200, "next-2");
		this.add(next_2);

		// levelSelectorContainer
		const levelSelectorContainer = scene.add.container(-21, 391.2223205566406);
		this.add(levelSelectorContainer);

		// prev-level
		const prev_level = scene.add.text(15, -192.22232055664062, "", {});
		prev_level.setOrigin(0.5, 0.5);
		prev_level.text = "16";
		prev_level.setStyle({ "fontFamily": "CookieSupplyRegular", "fontSize": "35px" });
		levelSelectorContainer.add(prev_level);

		// current-level
		const current_level = scene.add.text(70, -191, "", {});
		current_level.scaleX = 1.5;
		current_level.scaleY = 1.5;
		current_level.setOrigin(0.5, 0.5);
		current_level.text = "25";
		current_level.setStyle({ "fontFamily": "CookieSupplyRegular", "fontSize": "35px" });
		levelSelectorContainer.add(current_level);

		// next-level
		const next_level = scene.add.text(123, -191.22232055664062, "", {});
		next_level.setOrigin(0.5, 0.5);
		next_level.text = "49";
		next_level.setStyle({ "fontFamily": "CookieSupplyRegular", "fontSize": "35px" });
		levelSelectorContainer.add(next_level);

		// button_close (components)
		new PushOnClick(button_close);
		new OnHoverComponent(button_close);
		new CurserToPointer(button_close);

		this.button_close = button_close;
		this.puzzleImage = puzzleImage;
		this.dummyPuzzlePiece2 = dummyPuzzlePiece2;
		this.dummyPuzzlePiece1 = dummyPuzzlePiece1;
		this.new_game_button = new_game_button;
		this.levelSelectorContainer = levelSelectorContainer;
		this.prev_level = prev_level;
		this.current_level = current_level;
		this.next_level = next_level;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	button_close;
	/** @type {Phaser.GameObjects.Image} */
	puzzleImage;
	/** @type {Phaser.GameObjects.Image} */
	dummyPuzzlePiece2;
	/** @type {Phaser.GameObjects.Image} */
	dummyPuzzlePiece1;
	/** @type {Phaser.GameObjects.Image} */
	new_game_button;
	/** @type {Phaser.GameObjects.Container} */
	levelSelectorContainer;
	/** @type {Phaser.GameObjects.Text} */
	prev_level;
	/** @type {Phaser.GameObjects.Text} */
	current_level;
	/** @type {Phaser.GameObjects.Text} */
	next_level;

	/* START-USER-CODE */

	// Write your code here.

	currentButton = 1;



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
