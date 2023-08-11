
// You can write more code here

/* START OF COMPILED CODE */

class GamePlayScene extends Phaser.Scene {

	constructor() {
		super("GamePlayScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_image
		this.add.image(960, 540, "bg-image");

		// window
		const window = this.add.image(1887, 540, "window");
		window.scaleX = 2;
		window.scaleY = 2.3;

		// line_game_sheet0
		const line_game_sheet0 = this.add.image(1473, 540, "line_game-sheet0");
		line_game_sheet0.scaleY = 35;

		// hint
		const hint = this.add.image(1857, 142, "Hint");
		hint.scaleX = 1.5;
		hint.scaleY = 1.5;

		// zoom_In
		const zoom_In = this.add.image(1857, 266, "Zoom In");
		zoom_In.scaleX = 1.5;
		zoom_In.scaleY = 1.5;

		// zoom_Out
		const zoom_Out = this.add.image(1857, 401, "Zoom Out");
		zoom_Out.scaleX = 1.5;
		zoom_Out.scaleY = 1.5;

		// sample
		const sample = this.add.image(1857, 523, "Sample");
		sample.scaleX = 1.5;
		sample.scaleY = 1.5;

		// showEdges
		const showEdges = this.add.image(1857, 645, "ShowEdges");
		showEdges.scaleX = 1.5;
		showEdges.scaleY = 1.5;

		// shuffle
		const shuffle = this.add.image(1857, 787, "Shuffle");
		shuffle.scaleX = 1.5;
		shuffle.scaleY = 1.5;

		// button_options_sheet2
		const button_options_sheet2 = this.add.image(1863, 976, "button_options-sheet2");
		button_options_sheet2.scaleX = 1.5;
		button_options_sheet2.scaleY = 1.5;

		// button_options_sheet
		const button_options_sheet = this.add.image(1863, 976, "button_options-sheet2");
		button_options_sheet.scaleX = 1.5;
		button_options_sheet.scaleY = 1.5;

		// text_1
		const text_1 = this.add.text(1857, 193, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Hint";
		text_1.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text
		const text = this.add.text(1857, 329.7177734375, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Zoom In";
		text.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text_2
		const text_2 = this.add.text(1857, 457.7177734375, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Zoom Out";
		text_2.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text_3
		const text_3 = this.add.text(1857, 579.3021240234375, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "Sample";
		text_3.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text_4
		const text_4 = this.add.text(1857, 710.2825927734375, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "Show Edges";
		text_4.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text_5
		const text_5 = this.add.text(1857, 847.0607299804688, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "Shuffle";
		text_5.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// piecesContainer
		const piecesContainer = this.add.container(1602, -53);

		// puzzleBorder
		const puzzleBorder = this.add.image(745, 560, "puzzleBorder");
		puzzleBorder.scaleX = 2.5;
		puzzleBorder.scaleY = 1.8;

		// hint (components)
		new PushOnClick(hint);

		// zoom_In (components)
		new PushOnClick(zoom_In);

		// zoom_Out (components)
		new PushOnClick(zoom_Out);

		// sample (components)
		new PushOnClick(sample);

		// showEdges (components)
		new PushOnClick(showEdges);

		// shuffle (components)
		new PushOnClick(shuffle);

		this.piecesContainer = piecesContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	piecesContainer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		var maskGraphics = this.make.graphics();
		maskGraphics.fillRect(1300, -53, 800, 1000); // Adjust dimensions as needed
		var mask = new Phaser.Display.Masks.GeometryMask(this, maskGraphics);

		this.piecesContainer.setMask(mask);

		// Add cat images to the container in series
		var yOffset = 200;

		for (var i = 0; i < 16; i++) {
			var catPart = this.add.image(0, yOffset * i, 'cat_part' + (i + 1));
			// this.input.setDraggable(catPart);
			this.piecesContainer.add(catPart);
		}

		// Calculate scroll limits
		var minY = -this.piecesContainer.getBounds().height + 1000;
		var maxY = 100;

		// Enable container scrolling
		this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
			// Update the y position of the container with scroll limits
			this.piecesContainer.y = Phaser.Math.Clamp(this.piecesContainer.y + deltaY, minY, maxY); // Changed the sign here
		});

		// // Enable item dragging
		// this.input.on('dragstart', (pointer, gameObject) => {
		// 	gameObject.setTint(0x00ff00);
		// });

		// this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
		// 	gameObject.x = dragX;
		// 	gameObject.y = dragY;
		// });

		// this.input.on('dragend', (pointer, gameObject) => {
		// 	gameObject.clearTint();
		// });


	}

	update() {
		// console.log(this.piecesContainer.x,this.piecesContainer.y)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
