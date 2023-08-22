
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
		const line_game_sheet0 = this.add.image(1440, 540, "line_game-sheet0");
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

		// gamePlaySettingBtn
		const gamePlaySettingBtn = this.add.image(1863, 976, "button_options-sheet2");
		gamePlaySettingBtn.scaleX = 1.5;
		gamePlaySettingBtn.scaleY = 1.5;

		// text_1
		const text_1 = this.add.text(1857, 193, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Hint";
		text_1.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text
		const text = this.add.text(1857, 329.7177734375, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Zoom in";
		text.setStyle({ "color": "#fcd928ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// text_2
		const text_2 = this.add.text(1857, 457.7177734375, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Zoom out";
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
		const piecesContainer = this.add.container(0, 0);

		// squareBorder
		const squareBorder = this.add.image(45, 540, "squareBorder");
		squareBorder.scaleX = 2.65;
		squareBorder.scaleY = 2;
		squareBorder.setOrigin(0, 0.5);

		// catPuzzlePiece
		const catPuzzlePiece = this.add.container(0, 0);

		// cat_part1
		const cat_part1 = this.add.image(426, 275, "cat_part1");
		cat_part1.scaleX = 1.8;
		cat_part1.scaleY = 1.8;
		cat_part1.alpha = 0.2;
		cat_part1.alphaTopLeft = 0.2;
		cat_part1.alphaTopRight = 0.2;
		cat_part1.alphaBottomLeft = 0.2;
		cat_part1.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part1);

		// cat_part2
		const cat_part2 = this.add.image(598, 277, "cat_part2");
		cat_part2.scaleX = 1.8;
		cat_part2.scaleY = 1.8;
		cat_part2.alpha = 0.2;
		cat_part2.alphaTopLeft = 0.2;
		cat_part2.alphaTopRight = 0.2;
		cat_part2.alphaBottomLeft = 0.2;
		cat_part2.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part2);

		// cat_part3
		const cat_part3 = this.add.image(773, 274, "cat_part3");
		cat_part3.scaleX = 1.8;
		cat_part3.scaleY = 1.8;
		cat_part3.alpha = 0.2;
		cat_part3.alphaTopLeft = 0.2;
		cat_part3.alphaTopRight = 0.2;
		cat_part3.alphaBottomLeft = 0.2;
		cat_part3.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part3);

		// cat_part4
		const cat_part4 = this.add.image(987, 258, "cat_part4");
		cat_part4.scaleX = 1.8;
		cat_part4.scaleY = 1.8;
		cat_part4.alpha = 0.2;
		cat_part4.alphaTopLeft = 0.2;
		cat_part4.alphaTopRight = 0.2;
		cat_part4.alphaBottomLeft = 0.2;
		cat_part4.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part4);

		// cat_part5
		const cat_part5 = this.add.image(406, 441, "cat_part5");
		cat_part5.scaleX = 1.8;
		cat_part5.scaleY = 1.8;
		cat_part5.alpha = 0.2;
		cat_part5.alphaTopLeft = 0.2;
		cat_part5.alphaTopRight = 0.2;
		cat_part5.alphaBottomLeft = 0.2;
		cat_part5.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part5);

		// cat_part6
		const cat_part6 = this.add.image(603, 476, "cat_part6");
		cat_part6.scaleX = 1.8;
		cat_part6.scaleY = 1.8;
		cat_part6.alpha = 0.2;
		cat_part6.alphaTopLeft = 0.2;
		cat_part6.alphaTopRight = 0.2;
		cat_part6.alphaBottomLeft = 0.2;
		cat_part6.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part6);

		// cat_part7
		const cat_part7 = this.add.image(792, 459, "cat_part7");
		cat_part7.scaleX = 1.8;
		cat_part7.scaleY = 1.8;
		cat_part7.alpha = 0.2;
		cat_part7.alphaTopLeft = 0.2;
		cat_part7.alphaTopRight = 0.2;
		cat_part7.alphaBottomLeft = 0.2;
		cat_part7.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part7);

		// cat_part8
		const cat_part8 = this.add.image(966, 440, "cat_part8");
		cat_part8.scaleX = 1.8;
		cat_part8.scaleY = 1.8;
		cat_part8.alpha = 0.2;
		cat_part8.alphaTopLeft = 0.2;
		cat_part8.alphaTopRight = 0.2;
		cat_part8.alphaBottomLeft = 0.2;
		cat_part8.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part8);

		// cat_part9
		const cat_part9 = this.add.image(409, 643, "cat_part9");
		cat_part9.scaleX = 1.8;
		cat_part9.scaleY = 1.8;
		cat_part9.alpha = 0.2;
		cat_part9.alphaTopLeft = 0.2;
		cat_part9.alphaTopRight = 0.2;
		cat_part9.alphaBottomLeft = 0.2;
		cat_part9.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part9);

		// cat_part10
		const cat_part10 = this.add.image(621, 658, "cat_part10");
		cat_part10.scaleX = 1.8;
		cat_part10.scaleY = 1.8;
		cat_part10.alpha = 0.2;
		cat_part10.alphaTopLeft = 0.2;
		cat_part10.alphaTopRight = 0.2;
		cat_part10.alphaBottomLeft = 0.2;
		cat_part10.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part10);

		// cat_part11
		const cat_part11 = this.add.image(813, 641, "cat_part11");
		cat_part11.scaleX = 1.8;
		cat_part11.scaleY = 1.8;
		cat_part11.alpha = 0.2;
		cat_part11.alphaTopLeft = 0.2;
		cat_part11.alphaTopRight = 0.2;
		cat_part11.alphaBottomLeft = 0.2;
		cat_part11.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part11);

		// cat_part12
		const cat_part12 = this.add.image(1006, 642, "cat_part12");
		cat_part12.scaleX = 1.8;
		cat_part12.scaleY = 1.8;
		cat_part12.alpha = 0.2;
		cat_part12.alphaTopLeft = 0.2;
		cat_part12.alphaTopRight = 0.2;
		cat_part12.alphaBottomLeft = 0.2;
		cat_part12.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part12);

		// cat_part13
		const cat_part13 = this.add.image(408, 822, "cat_part13");
		cat_part13.scaleX = 1.8;
		cat_part13.scaleY = 1.8;
		cat_part13.alpha = 0.2;
		cat_part13.alphaTopLeft = 0.2;
		cat_part13.alphaTopRight = 0.2;
		cat_part13.alphaBottomLeft = 0.2;
		cat_part13.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part13);

		// cat_part14
		const cat_part14 = this.add.image(599, 841, "cat_part14");
		cat_part14.scaleX = 1.8;
		cat_part14.scaleY = 1.8;
		cat_part14.alpha = 0.2;
		cat_part14.alphaTopLeft = 0.2;
		cat_part14.alphaTopRight = 0.2;
		cat_part14.alphaBottomLeft = 0.2;
		cat_part14.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part14);

		// cat_part15
		const cat_part15 = this.add.image(794, 826, "cat_part15");
		cat_part15.scaleX = 1.8;
		cat_part15.scaleY = 1.8;
		cat_part15.alpha = 0.2;
		cat_part15.alphaTopLeft = 0.2;
		cat_part15.alphaTopRight = 0.2;
		cat_part15.alphaBottomLeft = 0.2;
		cat_part15.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part15);

		// cat_part16
		const cat_part16 = this.add.image(1005, 840, "cat_part16");
		cat_part16.scaleX = 1.8;
		cat_part16.scaleY = 1.8;
		cat_part16.alpha = 0.2;
		cat_part16.alphaTopLeft = 0.2;
		cat_part16.alphaTopRight = 0.2;
		cat_part16.alphaBottomLeft = 0.2;
		cat_part16.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part16);

		// curtenPrefab
		const curtenPrefab = new CurtenPrefab(this, 966, 535);
		this.add.existing(curtenPrefab);

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

		this.zoom_In = zoom_In;
		this.zoom_Out = zoom_Out;
		this.shuffle = shuffle;
		this.gamePlaySettingBtn = gamePlaySettingBtn;
		this.piecesContainer = piecesContainer;
		this.catPuzzlePiece = catPuzzlePiece;
		this.curtenPrefab = curtenPrefab;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	zoom_In;
	/** @type {Phaser.GameObjects.Image} */
	zoom_Out;
	/** @type {Phaser.GameObjects.Image} */
	shuffle;
	/** @type {Phaser.GameObjects.Image} */
	gamePlaySettingBtn;
	/** @type {Phaser.GameObjects.Container} */
	piecesContainer;
	/** @type {Phaser.GameObjects.Container} */
	catPuzzlePiece;
	/** @type {CurtenPrefab} */
	curtenPrefab;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.curtenPrefab.doorOpening();
		var yOffset = 275;
		for (var i = 0; i < 16; i++) {
			var pieces = this.add.image(0 + 1602, (yOffset * i) + (20), 'cat_part' + (i + 1));
			this.physics.world.enable(pieces);
			pieces.puzzleNo = i;
			pieces.scaleX = 1.8;
			pieces.scaleY = 1.8;
			pieces.setInteractive();
			this.input.setDraggable(pieces);
			this.piecesContainer.add(pieces);
		}
		var minY = -this.piecesContainer.getBounds().height + 1000;
		var maxY = 100;
		this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
			this.piecesContainer.y = Phaser.Math.Clamp(this.piecesContainer.y - deltaY, minY, maxY);
		});

		this.input.on('dragstart', (pointer, gameObject) => {
			gameObject.setTint(0x00ff00);
		});

		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			gameObject.x = pointer.x;
			gameObject.y = pointer.y;
			this.piecesContainer.remove(gameObject, false);
		});

		this.input.on('dragend', (pointer, gameObject, dragX, dragY) => {
			gameObject.clearTint();
			dragX = pointer.x;
			dragY = pointer.y;
			for (var i = 0; i < this.catPuzzlePiece.list.length; i++) {
				const target = this.catPuzzlePiece.list[i];
				if (dragX > target.x - target.width / 2 && dragX < target.x + target.width / 2 && dragY > target.y - target.height / 2 && dragY < target.y + target.height / 2) {
					gameObject.x = target.x;
					gameObject.y = target.y;
					if(gameObject.texture.key == target.texture.key){
						gameObject.disableInteractive();
					}
					break;
				}
			}
		});

		// this.addListeners()
	}

	shufflePieces(container) {
		var currentIndex = container.length, randomIndex, tempValue;

		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			tempValue = container[currentIndex];
			container[currentIndex] = container[randomIndex];
			container[randomIndex] = tempValue;
		}

		// Re-add the shuffled pieces to the scene in the new order
		container.list.forEach(function(piece, index) {
			console.log("pieces.....",piece)
			piece.y = (275 * index) + (20);
		});
	}


	//to Add the functionalities in the gameplay scene button....
	addListeners(){
		this.zoom_In.setInteractive().on('pointerdown', ()=>{
			console.log("zoom in ")
			this.zoomContainer(1.2); // Increase the container's scale
		  });

		this.zoom_Out.setInteractive().on('pointerdown', () => {
			console.log("zoom in ")
			this.zoomContainer(0.8); // Decrease the container's scale
		  });

		this.shuffle.setInteractive().on('pointerdown',()=>{
		this.shufflePieces(this.piecesContainer)
		});

	}

	 	zoomContainer(scaleFactor) {
		// Multiply the current scale by the scaleFactor
		this.catPuzzlePiece.scaleX *= scaleFactor;
		this.catPuzzlePiece.scaleY *= scaleFactor;
	  }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
