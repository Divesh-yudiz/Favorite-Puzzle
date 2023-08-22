
// You can write more code here

/* START OF COMPILED CODE */

class PuzzleMenu extends Phaser.Scene {

	constructor() {
		super("PuzzleMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_image
		this.add.image(960, 540, "bg-image");

		// rightButton
		const rightButton = this.add.image(1795, 540, "button_arrow-sheet0");
		rightButton.scaleX = 2;
		rightButton.scaleY = 2;

		// LeftButton
		const leftButton = this.add.image(147, 540, "button_arrow-sheet0");
		leftButton.scaleX = 2;
		leftButton.scaleY = 2;
		leftButton.flipX = true;

		// go_back_btn
		const go_back_btn = this.add.image(74, 70, "button_back-sheet0");
		go_back_btn.scaleX = 1.5;
		go_back_btn.scaleY = 1.5;

		// tweenContainer1
		const tweenContainer1 = this.add.container(2120, 350);

		// preview_box_6
		const preview_box_6 = this.add.image(0, 0, "preview_box");
		preview_box_6.scaleX = 1.7;
		preview_box_6.scaleY = 1.9;
		tweenContainer1.add(preview_box_6);

		// preview_box_7
		const preview_box_7 = this.add.image(400, 0, "preview_box");
		preview_box_7.scaleX = 1.7;
		preview_box_7.scaleY = 1.9;
		tweenContainer1.add(preview_box_7);

		// preview_box_8
		const preview_box_8 = this.add.image(800, 0, "preview_box");
		preview_box_8.scaleX = 1.7;
		preview_box_8.scaleY = 1.9;
		tweenContainer1.add(preview_box_8);

		// preview_box_9
		const preview_box_9 = this.add.image(0, 400, "preview_box");
		preview_box_9.scaleX = 1.7;
		preview_box_9.scaleY = 1.9;
		tweenContainer1.add(preview_box_9);

		// preview_box_10
		const preview_box_10 = this.add.image(400, 400, "preview_box");
		preview_box_10.scaleX = 1.7;
		preview_box_10.scaleY = 1.9;
		tweenContainer1.add(preview_box_10);

		// preview_box_11
		const preview_box_11 = this.add.image(800, 400, "preview_box");
		preview_box_11.scaleX = 1.7;
		preview_box_11.scaleY = 1.9;
		tweenContainer1.add(preview_box_11);

		// preview_box
		const preview_box = this.add.image(-1540, 400, "preview_box");
		preview_box.scaleX = 1.7;
		preview_box.scaleY = 1.9;
		tweenContainer1.add(preview_box);

		// preview_box_1
		const preview_box_1 = this.add.image(-1140, 400, "preview_box");
		preview_box_1.scaleX = 1.7;
		preview_box_1.scaleY = 1.9;
		tweenContainer1.add(preview_box_1);

		// preview_box_2
		const preview_box_2 = this.add.image(-740, 400, "preview_box");
		preview_box_2.scaleX = 1.7;
		preview_box_2.scaleY = 1.9;
		tweenContainer1.add(preview_box_2);

		// preview_box_3
		const preview_box_3 = this.add.image(-740, 0, "preview_box");
		preview_box_3.scaleX = 1.7;
		preview_box_3.scaleY = 1.9;
		tweenContainer1.add(preview_box_3);

		// preview_box_4
		const preview_box_4 = this.add.image(-1140, 0, "preview_box");
		preview_box_4.scaleX = 1.7;
		preview_box_4.scaleY = 1.9;
		tweenContainer1.add(preview_box_4);

		// preview_box_5
		const preview_box_5 = this.add.image(-1540, 0, "preview_box");
		preview_box_5.scaleX = 1.7;
		preview_box_5.scaleY = 1.9;
		tweenContainer1.add(preview_box_5);

		// flower
		const flower = this.add.image(-1542, -34, "flower");
		flower.scaleX = 0.25;
		flower.scaleY = 0.28;
		tweenContainer1.add(flower);

		// butterfly
		const butterfly = this.add.image(-1143, -35, "butterfly");
		butterfly.scaleX = 0.25;
		butterfly.scaleY = 0.43;
		tweenContainer1.add(butterfly);

		// ice_cream
		const ice_cream = this.add.image(-739, -32, "ice-cream");
		ice_cream.scaleX = 0.4;
		ice_cream.scaleY = 0.35;
		tweenContainer1.add(ice_cream);

		// tulips
		const tulips = this.add.image(-1542, 367, "tulips");
		tulips.scaleX = 0.37;
		tulips.scaleY = 0.28;
		tweenContainer1.add(tulips);

		// turtle
		const turtle = this.add.image(-1143, 369, "turtle");
		turtle.scaleX = 0.26;
		turtle.scaleY = 0.5;
		tweenContainer1.add(turtle);

		// cat
		const cat = this.add.image(-745, 369, "cat");
		cat.scaleX = 0.32;
		cat.scaleY = 0.35;
		tweenContainer1.add(cat);

		// CurtenPrefab
		const curtenPrefab = new CurtenPrefab(this, 960, 540);
		this.add.existing(curtenPrefab);

		// panel_h
		const panel_h = this.add.image(979, -17, "panel_h");
		panel_h.scaleX = 3;
		panel_h.scaleY = 2.5;

		// daily
		const daily = this.add.image(1055, 52, "Daily");
		daily.scaleX = 1.2;
		daily.scaleY = 1.2;

		// filter
		const filter = this.add.image(794, 53, "Filter");

		// category
		const category = this.add.image(1176, 56, "Category");
		category.scaleX = 1.1;
		category.scaleY = 1.1;

		// createIcon
		const createIcon = this.add.image(916, 53, "Create");
		createIcon.scaleX = 1.2;
		createIcon.scaleY = 1.2;

		// Filter_text
		const filter_text = this.add.text(767, 84, "", {});
		filter_text.text = "Filter";
		filter_text.setStyle({ "color": "#fae016ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// creat_text
		const creat_text = this.add.text(893, 84, "", {});
		creat_text.text = "Create";
		creat_text.setStyle({ "color": "#fae016ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// Filter_2
		const filter_2 = this.add.text(1030, 85, "", {});
		filter_2.text = "Daily";
		filter_2.setStyle({ "color": "#fae016ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// Filter_3
		const filter_3 = this.add.text(1145, 84, "", {});
		filter_3.text = "Category";
		filter_3.setStyle({ "color": "#fae016ff", "fontFamily": "New Times Roman", "fontSize": "20px" });

		// storeBtn
		const storeBtn = this.add.image(1782, 57, "panel_h");
		storeBtn.scaleX = 0.8;
		storeBtn.scaleY = 0.7;

		// icon_malahit_sheet0
		const icon_malahit_sheet0 = this.add.image(1730, 61, "icon_malahit-sheet0");
		icon_malahit_sheet0.scaleX = 1.3;
		icon_malahit_sheet0.scaleY = 1.3;

		// button_addcoin_sheet0
		const button_addcoin_sheet0 = this.add.image(1840, 60, "button_addcoin-sheet0");

		// coins
		const coins = this.add.text(1767, 39, "", {});
		coins.text = "55";
		coins.setStyle({ "color": "#ffe22dff", "fontFamily": "Mew Times Roman", "fontSize": "40px" });

		// selectPuzzle
		const selectPuzzle = new SelectPuzzle(this, 960, 540);
		this.add.existing(selectPuzzle);
		selectPuzzle.visible = false;

		// daily (components)
		new OnHoverComponent(daily);

		// filter (components)
		new OnHoverComponent(filter);

		// category (components)
		new OnHoverComponent(category);

		// createIcon (components)
		new OnHoverComponent(createIcon);

		// storeBtn (components)
		new OnHoverComponent(storeBtn);

		// button_addcoin_sheet0 (components)
		new OnHoverComponent(button_addcoin_sheet0);

		this.rightButton = rightButton;
		this.leftButton = leftButton;
		this.go_back_btn = go_back_btn;
		this.tweenContainer1 = tweenContainer1;
		this.curtenPrefab = curtenPrefab;
		this.daily = daily;
		this.filter = filter;
		this.category = category;
		this.createIcon = createIcon;
		this.storeBtn = storeBtn;
		this.coins = coins;
		this.selectPuzzle = selectPuzzle;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	rightButton;
	/** @type {Phaser.GameObjects.Image} */
	leftButton;
	/** @type {Phaser.GameObjects.Image} */
	go_back_btn;
	/** @type {Phaser.GameObjects.Container} */
	tweenContainer1;
	/** @type {CurtenPrefab} */
	curtenPrefab;
	/** @type {Phaser.GameObjects.Image} */
	daily;
	/** @type {Phaser.GameObjects.Image} */
	filter;
	/** @type {Phaser.GameObjects.Image} */
	category;
	/** @type {Phaser.GameObjects.Image} */
	createIcon;
	/** @type {Phaser.GameObjects.Image} */
	storeBtn;
	/** @type {Phaser.GameObjects.Text} */
	coins;
	/** @type {SelectPuzzle} */
	selectPuzzle;

	/* START-USER-CODE */

	// Write your code here

	create() {

		// c.setinteractiveOnPuzzleImages
		this.editorCreate();
		// this.setinteractiveOnPuzzleImages();
		this.funcToAddEvents();

		this.createIcon.setInteractive().on('pointerdown', this.openFilePicker, this);

		this.curtenPrefab.doorOpening();

		this.pageCount = 0;
		this.totalPages = 1;
		this.leftButton.setAlpha(0);

		this.rightButton.setInteractive().on("pointerdown", () => {
			if (this.rightButton.alpha === 1) {
				this.pageCount++;
				this.tweens.add({
					targets: this.tweenContainer1,
					x: this.tweenContainer1.x - 1540,
					y: 350,
					duration: 1000,
					ease: 'Linear',
					onComplete: () => {
						this.leftButton.setAlpha(1);
						if(this.pageCount === this.totalPages) {
							this.rightButton.setAlpha(0);
						}
					}
				});
			}
		})

		this.leftButton.setInteractive().on("pointerdown", () => {
			if (this.leftButton.alpha === 1) {
				this.pageCount--;
				this.tweens.add({
					targets: this.tweenContainer1,
					x: this.tweenContainer1.x + 1540,
					y: 350,
					duration: 1000,
					ease: 'Linear',
					onComplete: () => {
						this.rightButton.setAlpha(1);
						if(this.pageCount === 0) {
							this.leftButton.setAlpha(0);
							this.pageCount = 0;
						}
					}	
				});
			}
		});

		this.go_back_btn.setInteractive();
		this.go_back_btn.on('pointerdown', () => {
			this.curtenPrefab.doorClosing();
			setTimeout(() => {
				this.scene.stop("PuzzleMenu")
				this.scene.start("Level");
			}, 1000);

		})
	}


	openFilePicker() {
		// Create an input element of type 'file'
		var fileInput = document.createElement('input');
		fileInput.type = 'file';
		fileInput.accept = 'image/*';

		// Listen for the 'change' event on the input element
		fileInput.addEventListener('change', function(event) {
			var file = event.target.files[0];

			if (file) {
				var reader = new FileReader();

				// Read the selected image as a data URL
				reader.onload = function(event) {
					// Set the image's texture to the loaded data URL
					image.setTexture(event.target.result);
					image.setVisible(true); // Show the image
				};

				reader.readAsDataURL(file);
			}
		});

		// Trigger a click event on the file input to open the file picker
		fileInput.click();
	}

	funcToAddEvents(){
		this.tweenContainer1.each(function(child) {
			// Check if the key of the image matches one of the specified keys
			if (["cat", "turtle", "tulips", "ice-cream", "butterfly", "flower"].includes(child.texture.key)) {
				child.setInteractive().on('pointerdown',()=>{
					this.selectPuzzle.visible=true;
					this.selectPuzzle.puzzleImage.setTexture(child.texture.key)

				})
			}
		}, this);

		this.selectPuzzle.button_close.setInteractive().on('pointerdown',()=>{
			this.selectPuzzle.visible=false;
		})

		
		this.selectPuzzle.button_gold_win_sheet.setInteractive().on('pointerdown',()=>{
			this.selectPuzzle.visible=false;
			this.curtenPrefab.doorClosing();
			setTimeout(()=>{
				this.scene.stop("PuzzleMenu");
				this.scene.start("GamePlayScene");
			},1500)
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
