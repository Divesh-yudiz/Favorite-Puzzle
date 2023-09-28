
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

		// background
		this.add.image(960, 540, "Background");

		// scroll_Holder
		const scroll_Holder = this.add.image(1467, 67, "Scroll-Holder");
		scroll_Holder.scaleY = 0.95;
		scroll_Holder.setOrigin(0, 0);

		// piece_Holder1
		const piece_Holder1 = this.add.image(1639, 227, "Piece-Holder");
		piece_Holder1.scaleY = 1.2;

		// piece_Holder2
		const piece_Holder2 = this.add.image(1639, 439, "Piece-Holder");
		piece_Holder2.scaleY = 1.2;

		// piece_Holder3
		const piece_Holder3 = this.add.image(1639, 648, "Piece-Holder");
		piece_Holder3.scaleY = 1.2;

		// piece_Holder4
		const piece_Holder4 = this.add.image(1639, 855, "Piece-Holder");
		piece_Holder4.scaleY = 1.2;

		// frame
		const frame = this.add.image(726, 613, "Frame");

		// piecesContainer
		const piecesContainer = this.add.container(0, 82);

		// catPuzzlePiece
		const catPuzzlePiece = this.add.container(0, -0.1396265733379778);
		catPuzzlePiece.visible = false;

		// cat_part1
		const cat_part1 = this.add.image(501, 333, "1");
		cat_part1.scaleX = 1.07;
		cat_part1.scaleY = 1.07;
		cat_part1.alpha = 0.2;
		cat_part1.alphaTopLeft = 0.2;
		cat_part1.alphaTopRight = 0.2;
		cat_part1.alphaBottomLeft = 0.2;
		cat_part1.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part1);

		// cat_part2
		const cat_part2 = this.add.image(642, 360, "2");
		cat_part2.scaleX = 1.07;
		cat_part2.scaleY = 1.07;
		cat_part2.alpha = 0.2;
		cat_part2.alphaTopLeft = 0.2;
		cat_part2.alphaTopRight = 0.2;
		cat_part2.alphaBottomLeft = 0.2;
		cat_part2.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part2);

		// cat_part3
		const cat_part3 = this.add.image(808, 333, "3");
		cat_part3.scaleX = 1.07;
		cat_part3.scaleY = 1.07;
		cat_part3.alpha = 0.2;
		cat_part3.alphaTopLeft = 0.2;
		cat_part3.alphaTopRight = 0.2;
		cat_part3.alphaBottomLeft = 0.2;
		cat_part3.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part3);

		// cat_part4
		const cat_part4 = this.add.image(973, 359, "4");
		cat_part4.scaleX = 1.07;
		cat_part4.scaleY = 1.07;
		cat_part4.alpha = 0.2;
		cat_part4.alphaTopLeft = 0.2;
		cat_part4.alphaTopRight = 0.2;
		cat_part4.alphaBottomLeft = 0.2;
		cat_part4.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part4);

		// cat_part5
		const cat_part5 = this.add.image(477, 516, "5");
		cat_part5.scaleX = 1.07;
		cat_part5.scaleY = 1.07;
		cat_part5.alpha = 0.2;
		cat_part5.alphaTopLeft = 0.2;
		cat_part5.alphaTopRight = 0.2;
		cat_part5.alphaBottomLeft = 0.2;
		cat_part5.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part5);

		// cat_part6
		const cat_part6 = this.add.image(643, 516, "6");
		cat_part6.scaleX = 1.07;
		cat_part6.scaleY = 1.07;
		cat_part6.alpha = 0.2;
		cat_part6.alphaTopLeft = 0.2;
		cat_part6.alphaTopRight = 0.2;
		cat_part6.alphaBottomLeft = 0.2;
		cat_part6.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part6);

		// cat_part7
		const cat_part7 = this.add.image(808, 516, "7");
		cat_part7.scaleX = 1.07;
		cat_part7.scaleY = 1.07;
		cat_part7.alpha = 0.2;
		cat_part7.alphaTopLeft = 0.2;
		cat_part7.alphaTopRight = 0.2;
		cat_part7.alphaBottomLeft = 0.2;
		cat_part7.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part7);

		// cat_part8
		const cat_part8 = this.add.image(947, 517, "8");
		cat_part8.scaleX = 1.07;
		cat_part8.scaleY = 1.07;
		cat_part8.alpha = 0.2;
		cat_part8.alphaTopLeft = 0.2;
		cat_part8.alphaTopRight = 0.2;
		cat_part8.alphaBottomLeft = 0.2;
		cat_part8.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part8);

		// cat_part9
		const cat_part9 = this.add.image(502, 700, "9");
		cat_part9.scaleX = 1.07;
		cat_part9.scaleY = 1.07;
		cat_part9.alpha = 0.2;
		cat_part9.alphaTopLeft = 0.2;
		cat_part9.alphaTopRight = 0.2;
		cat_part9.alphaBottomLeft = 0.2;
		cat_part9.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part9);

		// cat_part10
		const cat_part10 = this.add.image(642, 699, "10");
		cat_part10.scaleX = 1.07;
		cat_part10.scaleY = 1.07;
		cat_part10.alpha = 0.2;
		cat_part10.alphaTopLeft = 0.2;
		cat_part10.alphaTopRight = 0.2;
		cat_part10.alphaBottomLeft = 0.2;
		cat_part10.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part10);

		// cat_part11
		const cat_part11 = this.add.image(808, 700, "11");
		cat_part11.scaleX = 1.07;
		cat_part11.scaleY = 1.07;
		cat_part11.alpha = 0.2;
		cat_part11.alphaTopLeft = 0.2;
		cat_part11.alphaTopRight = 0.2;
		cat_part11.alphaBottomLeft = 0.2;
		cat_part11.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part11);

		// cat_part12
		const cat_part12 = this.add.image(972, 701, "12");
		cat_part12.scaleX = 1.07;
		cat_part12.scaleY = 1.07;
		cat_part12.alpha = 0.2;
		cat_part12.alphaTopLeft = 0.2;
		cat_part12.alphaTopRight = 0.2;
		cat_part12.alphaBottomLeft = 0.2;
		cat_part12.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part12);

		// cat_part13
		const cat_part13 = this.add.image(476, 856, "13");
		cat_part13.scaleX = 1.07;
		cat_part13.scaleY = 1.07;
		cat_part13.alpha = 0.2;
		cat_part13.alphaTopLeft = 0.2;
		cat_part13.alphaTopRight = 0.2;
		cat_part13.alphaBottomLeft = 0.2;
		cat_part13.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part13);

		// cat_part14
		const cat_part14 = this.add.image(642, 883, "14");
		cat_part14.scaleX = 1.07;
		cat_part14.scaleY = 1.07;
		cat_part14.alpha = 0.2;
		cat_part14.alphaTopLeft = 0.2;
		cat_part14.alphaTopRight = 0.2;
		cat_part14.alphaBottomLeft = 0.2;
		cat_part14.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part14);

		// cat_part15
		const cat_part15 = this.add.image(808, 855, "15");
		cat_part15.scaleX = 1.07;
		cat_part15.scaleY = 1.07;
		cat_part15.alpha = 0.2;
		cat_part15.alphaTopLeft = 0.2;
		cat_part15.alphaTopRight = 0.2;
		cat_part15.alphaBottomLeft = 0.2;
		cat_part15.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part15);

		// cat_part16
		const cat_part16 = this.add.image(947, 883, "16");
		cat_part16.scaleX = 1.07;
		cat_part16.scaleY = 1.07;
		cat_part16.alpha = 0.2;
		cat_part16.alphaTopLeft = 0.2;
		cat_part16.alphaTopRight = 0.2;
		cat_part16.alphaBottomLeft = 0.2;
		cat_part16.alphaBottomRight = 0.2;
		catPuzzlePiece.add(cat_part16);

		// container25Pieces
		const container25Pieces = this.add.container(0, 0);
		container25Pieces.visible = false;

		// p25_1
		const p25_1 = this.add.image(501, 337, "25-1");
		p25_1.alpha = 0.3;
		p25_1.alphaTopLeft = 0.3;
		p25_1.alphaTopRight = 0.3;
		p25_1.alphaBottomLeft = 0.3;
		p25_1.alphaBottomRight = 0.3;
		container25Pieces.add(p25_1);

		// p25_15
		const p25_15 = this.add.image(605, 358, "25-15");
		p25_15.alpha = 0.3;
		p25_15.alphaTopLeft = 0.3;
		p25_15.alphaTopRight = 0.3;
		p25_15.alphaBottomLeft = 0.3;
		p25_15.alphaBottomRight = 0.3;
		container25Pieces.add(p25_15);

		// p25_16
		const p25_16 = this.add.image(728, 336, "25-16");
		p25_16.alpha = 0.3;
		p25_16.alphaTopLeft = 0.3;
		p25_16.alphaTopRight = 0.3;
		p25_16.alphaBottomLeft = 0.3;
		p25_16.alphaBottomRight = 0.3;
		container25Pieces.add(p25_16);

		// p25_3
		const p25_3 = this.add.image(849, 357, "25-3");
		p25_3.alpha = 0.3;
		p25_3.alphaTopLeft = 0.3;
		p25_3.alphaTopRight = 0.3;
		p25_3.alphaBottomLeft = 0.3;
		p25_3.alphaBottomRight = 0.3;
		container25Pieces.add(p25_3);

		// p25_4
		const p25_4 = this.add.image(952, 336, "25-4");
		p25_4.alpha = 0.3;
		p25_4.alphaTopLeft = 0.3;
		p25_4.alphaTopRight = 0.3;
		p25_4.alphaBottomLeft = 0.3;
		p25_4.alphaBottomRight = 0.3;
		container25Pieces.add(p25_4);

		// p25_5
		const p25_5 = this.add.image(482, 473, "25-5");
		p25_5.alpha = 0.3;
		p25_5.alphaTopLeft = 0.3;
		p25_5.alphaTopRight = 0.3;
		p25_5.alphaBottomLeft = 0.3;
		p25_5.alphaBottomRight = 0.3;
		container25Pieces.add(p25_5);

		// p25_9
		const p25_9 = this.add.image(501, 609, "25-9");
		p25_9.alpha = 0.3;
		p25_9.alphaTopLeft = 0.3;
		p25_9.alphaTopRight = 0.3;
		p25_9.alphaBottomLeft = 0.3;
		p25_9.alphaBottomRight = 0.3;
		container25Pieces.add(p25_9);

		// p25_21
		const p25_21 = this.add.image(501, 883, "25-21");
		p25_21.alpha = 0.3;
		p25_21.alphaTopLeft = 0.3;
		p25_21.alphaTopRight = 0.3;
		p25_21.alphaBottomLeft = 0.3;
		p25_21.alphaBottomRight = 0.3;
		container25Pieces.add(p25_21);

		// p25_14
		const p25_14 = this.add.image(482, 746, "25-14");
		p25_14.alpha = 0.3;
		p25_14.alphaTopLeft = 0.3;
		p25_14.alphaTopRight = 0.3;
		p25_14.alphaBottomLeft = 0.3;
		p25_14.alphaBottomRight = 0.3;
		container25Pieces.add(p25_14);

		// p25_22
		const p25_22 = this.add.image(607, 863, "25-22");
		p25_22.alpha = 0.3;
		p25_22.alphaTopLeft = 0.3;
		p25_22.alphaTopRight = 0.3;
		p25_22.alphaBottomLeft = 0.3;
		p25_22.alphaBottomRight = 0.3;
		container25Pieces.add(p25_22);

		// p25_23
		const p25_23 = this.add.image(727, 883, "25-23");
		p25_23.alpha = 0.3;
		p25_23.alphaTopLeft = 0.3;
		p25_23.alphaTopRight = 0.3;
		p25_23.alphaBottomLeft = 0.3;
		p25_23.alphaBottomRight = 0.3;
		container25Pieces.add(p25_23);

		// p25_24
		const p25_24 = this.add.image(850, 861, "25-24");
		p25_24.alpha = 0.3;
		p25_24.alphaTopLeft = 0.3;
		p25_24.alphaTopRight = 0.3;
		p25_24.alphaBottomLeft = 0.3;
		p25_24.alphaBottomRight = 0.3;
		container25Pieces.add(p25_24);

		// p25_25
		const p25_25 = this.add.image(953, 881, "25-25");
		p25_25.alpha = 0.3;
		p25_25.alphaTopLeft = 0.3;
		p25_25.alphaTopRight = 0.3;
		p25_25.alphaBottomLeft = 0.3;
		p25_25.alphaBottomRight = 0.3;
		container25Pieces.add(p25_25);

		// p25_13
		const p25_13 = this.add.image(953, 609, "25-13");
		p25_13.alpha = 0.3;
		p25_13.alphaTopLeft = 0.3;
		p25_13.alphaTopRight = 0.3;
		p25_13.alphaBottomLeft = 0.3;
		p25_13.alphaBottomRight = 0.3;
		container25Pieces.add(p25_13);

		// p25_2
		const p25_2 = this.add.image(971, 472, "25-2");
		p25_2.alpha = 0.3;
		p25_2.alphaTopLeft = 0.3;
		p25_2.alphaTopRight = 0.3;
		p25_2.alphaBottomLeft = 0.3;
		p25_2.alphaBottomRight = 0.3;
		container25Pieces.add(p25_2);

		// p25_20
		const p25_20 = this.add.image(971, 745, "25-20");
		p25_20.alpha = 0.3;
		p25_20.alphaTopLeft = 0.3;
		p25_20.alphaTopRight = 0.3;
		p25_20.alphaBottomLeft = 0.3;
		p25_20.alphaBottomRight = 0.3;
		container25Pieces.add(p25_20);

		// p25_17
		const p25_17 = this.add.image(605, 746, "25-17");
		p25_17.alpha = 0.3;
		p25_17.alphaTopLeft = 0.3;
		p25_17.alphaTopRight = 0.3;
		p25_17.alphaBottomLeft = 0.3;
		p25_17.alphaBottomRight = 0.3;
		container25Pieces.add(p25_17);

		// p25_18
		const p25_18 = this.add.image(728, 746, "25-18");
		p25_18.alpha = 0.3;
		p25_18.alphaTopLeft = 0.3;
		p25_18.alphaTopRight = 0.3;
		p25_18.alphaBottomLeft = 0.3;
		p25_18.alphaBottomRight = 0.3;
		container25Pieces.add(p25_18);

		// p25_19
		const p25_19 = this.add.image(851, 745, "25-19");
		p25_19.alpha = 0.3;
		p25_19.alphaTopLeft = 0.3;
		p25_19.alphaTopRight = 0.3;
		p25_19.alphaBottomLeft = 0.3;
		p25_19.alphaBottomRight = 0.3;
		container25Pieces.add(p25_19);

		// p25_11
		const p25_11 = this.add.image(728, 609, "25-11");
		p25_11.alpha = 0.3;
		p25_11.alphaTopLeft = 0.3;
		p25_11.alphaTopRight = 0.3;
		p25_11.alphaBottomLeft = 0.3;
		p25_11.alphaBottomRight = 0.3;
		container25Pieces.add(p25_11);

		// p25_10
		const p25_10 = this.add.image(605, 610, "25-10");
		p25_10.alpha = 0.3;
		p25_10.alphaTopLeft = 0.3;
		p25_10.alphaTopRight = 0.3;
		p25_10.alphaBottomLeft = 0.3;
		p25_10.alphaBottomRight = 0.3;
		container25Pieces.add(p25_10);

		// p25_12
		const p25_12 = this.add.image(850, 610, "25-12");
		p25_12.alpha = 0.3;
		p25_12.alphaTopLeft = 0.3;
		p25_12.alphaTopRight = 0.3;
		p25_12.alphaBottomLeft = 0.3;
		p25_12.alphaBottomRight = 0.3;
		container25Pieces.add(p25_12);

		// p25_7
		const p25_7 = this.add.image(728, 473, "25-7");
		p25_7.alpha = 0.3;
		p25_7.alphaTopLeft = 0.3;
		p25_7.alphaTopRight = 0.3;
		p25_7.alphaBottomLeft = 0.3;
		p25_7.alphaBottomRight = 0.3;
		container25Pieces.add(p25_7);

		// p25_8
		const p25_8 = this.add.image(849, 472, "25-8");
		p25_8.alpha = 0.3;
		p25_8.alphaTopLeft = 0.3;
		p25_8.alphaTopRight = 0.3;
		p25_8.alphaBottomLeft = 0.3;
		p25_8.alphaBottomRight = 0.3;
		container25Pieces.add(p25_8);

		// p25_6
		const p25_6 = this.add.image(604, 473, "25-6");
		p25_6.alpha = 0.3;
		p25_6.alphaTopLeft = 0.3;
		p25_6.alphaTopRight = 0.3;
		p25_6.alphaBottomLeft = 0.3;
		p25_6.alphaBottomRight = 0.3;
		container25Pieces.add(p25_6);

		// container49Pieces
		const container49Pieces = this.add.container(0, 0);
		container49Pieces.visible = false;

		// p49_1
		const p49_1 = this.add.image(459, 301, "49-1");
		p49_1.alpha = 0.2;
		p49_1.alphaTopLeft = 0.2;
		p49_1.alphaTopRight = 0.2;
		p49_1.alphaBottomLeft = 0.2;
		p49_1.alphaBottomRight = 0.2;
		container49Pieces.add(p49_1);

		// p49_2
		const p49_2 = this.add.image(541, 317, "49-2");
		p49_2.alpha = 0.2;
		p49_2.alphaTopLeft = 0.2;
		p49_2.alphaTopRight = 0.2;
		p49_2.alphaBottomLeft = 0.2;
		p49_2.alphaBottomRight = 0.2;
		container49Pieces.add(p49_2);

		// p49_3
		const p49_3 = this.add.image(636, 301, "49-3");
		p49_3.alpha = 0.2;
		p49_3.alphaTopLeft = 0.2;
		p49_3.alphaTopRight = 0.2;
		p49_3.alphaBottomLeft = 0.2;
		p49_3.alphaBottomRight = 0.2;
		container49Pieces.add(p49_3);

		// p49_4
		const p49_4 = this.add.image(731, 317, "49-4");
		p49_4.alpha = 0.2;
		p49_4.alphaTopLeft = 0.2;
		p49_4.alphaTopRight = 0.2;
		p49_4.alphaBottomLeft = 0.2;
		p49_4.alphaBottomRight = 0.2;
		container49Pieces.add(p49_4);

		// p49_5
		const p49_5 = this.add.image(827, 301, "49-5");
		p49_5.alpha = 0.2;
		p49_5.alphaTopLeft = 0.2;
		p49_5.alphaTopRight = 0.2;
		p49_5.alphaBottomLeft = 0.2;
		p49_5.alphaBottomRight = 0.2;
		container49Pieces.add(p49_5);

		// p49_6
		const p49_6 = this.add.image(923, 317, "49-6");
		p49_6.alpha = 0.2;
		p49_6.alphaTopLeft = 0.2;
		p49_6.alphaTopRight = 0.2;
		p49_6.alphaBottomLeft = 0.2;
		p49_6.alphaBottomRight = 0.2;
		container49Pieces.add(p49_6);

		// p49_7
		const p49_7 = this.add.image(1003, 301, "49-7");
		p49_7.alpha = 0.2;
		p49_7.alphaTopLeft = 0.2;
		p49_7.alphaTopRight = 0.2;
		p49_7.alphaBottomLeft = 0.2;
		p49_7.alphaBottomRight = 0.2;
		container49Pieces.add(p49_7);

		// p49_8
		const p49_8 = this.add.image(445, 408, "49-8");
		p49_8.alpha = 0.2;
		p49_8.alphaTopLeft = 0.2;
		p49_8.alphaTopRight = 0.2;
		p49_8.alphaBottomLeft = 0.2;
		p49_8.alphaBottomRight = 0.2;
		container49Pieces.add(p49_8);

		// p49_9
		const p49_9 = this.add.image(540, 408, "49-9");
		p49_9.alpha = 0.2;
		p49_9.alphaTopLeft = 0.2;
		p49_9.alphaTopRight = 0.2;
		p49_9.alphaBottomLeft = 0.2;
		p49_9.alphaBottomRight = 0.2;
		container49Pieces.add(p49_9);

		// p49_10
		const p49_10 = this.add.image(636, 408, "49-10");
		p49_10.alpha = 0.2;
		p49_10.alphaTopLeft = 0.2;
		p49_10.alphaTopRight = 0.2;
		p49_10.alphaBottomLeft = 0.2;
		p49_10.alphaBottomRight = 0.2;
		container49Pieces.add(p49_10);

		// p49_11
		const p49_11 = this.add.image(731, 408, "49-11");
		p49_11.alpha = 0.2;
		p49_11.alphaTopLeft = 0.2;
		p49_11.alphaTopRight = 0.2;
		p49_11.alphaBottomLeft = 0.2;
		p49_11.alphaBottomRight = 0.2;
		container49Pieces.add(p49_11);

		// p49_12
		const p49_12 = this.add.image(827, 408, "49-12");
		p49_12.alpha = 0.2;
		p49_12.alphaTopLeft = 0.2;
		p49_12.alphaTopRight = 0.2;
		p49_12.alphaBottomLeft = 0.2;
		p49_12.alphaBottomRight = 0.2;
		container49Pieces.add(p49_12);

		// p49_13
		const p49_13 = this.add.image(922, 408, "49-13");
		p49_13.alpha = 0.2;
		p49_13.alphaTopLeft = 0.2;
		p49_13.alphaTopRight = 0.2;
		p49_13.alphaBottomLeft = 0.2;
		p49_13.alphaBottomRight = 0.2;
		container49Pieces.add(p49_13);

		// p49_14
		const p49_14 = this.add.image(1017, 408, "49-14");
		p49_14.alpha = 0.2;
		p49_14.alphaTopLeft = 0.2;
		p49_14.alphaTopRight = 0.2;
		p49_14.alphaBottomLeft = 0.2;
		p49_14.alphaBottomRight = 0.2;
		container49Pieces.add(p49_14);

		// p49_15
		const p49_15 = this.add.image(459, 515, "49-15");
		p49_15.alpha = 0.2;
		p49_15.alphaTopLeft = 0.2;
		p49_15.alphaTopRight = 0.2;
		p49_15.alphaBottomLeft = 0.2;
		p49_15.alphaBottomRight = 0.2;
		container49Pieces.add(p49_15);

		// p49_16
		const p49_16 = this.add.image(541, 515, "49-16");
		p49_16.alpha = 0.2;
		p49_16.alphaTopLeft = 0.2;
		p49_16.alphaTopRight = 0.2;
		p49_16.alphaBottomLeft = 0.2;
		p49_16.alphaBottomRight = 0.2;
		container49Pieces.add(p49_16);

		// p49_17
		const p49_17 = this.add.image(635, 515, "49-17");
		p49_17.alpha = 0.2;
		p49_17.alphaTopLeft = 0.2;
		p49_17.alphaTopRight = 0.2;
		p49_17.alphaBottomLeft = 0.2;
		p49_17.alphaBottomRight = 0.2;
		container49Pieces.add(p49_17);

		// p49_18
		const p49_18 = this.add.image(731, 515, "49-18");
		p49_18.alpha = 0.2;
		p49_18.alphaTopLeft = 0.2;
		p49_18.alphaTopRight = 0.2;
		p49_18.alphaBottomLeft = 0.2;
		p49_18.alphaBottomRight = 0.2;
		container49Pieces.add(p49_18);

		// p49_19
		const p49_19 = this.add.image(827, 515, "49-19");
		p49_19.alpha = 0.2;
		p49_19.alphaTopLeft = 0.2;
		p49_19.alphaTopRight = 0.2;
		p49_19.alphaBottomLeft = 0.2;
		p49_19.alphaBottomRight = 0.2;
		container49Pieces.add(p49_19);

		// p49_20
		const p49_20 = this.add.image(923, 514, "49-20");
		p49_20.alpha = 0.2;
		p49_20.alphaTopLeft = 0.2;
		p49_20.alphaTopRight = 0.2;
		p49_20.alphaBottomLeft = 0.2;
		p49_20.alphaBottomRight = 0.2;
		container49Pieces.add(p49_20);

		// p49_21
		const p49_21 = this.add.image(1002, 514, "49-21");
		p49_21.alpha = 0.2;
		p49_21.alphaTopLeft = 0.2;
		p49_21.alphaTopRight = 0.2;
		p49_21.alphaBottomLeft = 0.2;
		p49_21.alphaBottomRight = 0.2;
		container49Pieces.add(p49_21);

		// p49_22
		const p49_22 = this.add.image(444, 622, "49-22");
		p49_22.alpha = 0.2;
		p49_22.alphaTopLeft = 0.2;
		p49_22.alphaTopRight = 0.2;
		p49_22.alphaBottomLeft = 0.2;
		p49_22.alphaBottomRight = 0.2;
		container49Pieces.add(p49_22);

		// p49_23
		const p49_23 = this.add.image(540, 622, "49-23");
		p49_23.alpha = 0.2;
		p49_23.alphaTopLeft = 0.2;
		p49_23.alphaTopRight = 0.2;
		p49_23.alphaBottomLeft = 0.2;
		p49_23.alphaBottomRight = 0.2;
		container49Pieces.add(p49_23);

		// p49_24
		const p49_24 = this.add.image(635, 622, "49-24");
		p49_24.alpha = 0.2;
		p49_24.alphaTopLeft = 0.2;
		p49_24.alphaTopRight = 0.2;
		p49_24.alphaBottomLeft = 0.2;
		p49_24.alphaBottomRight = 0.2;
		container49Pieces.add(p49_24);

		// p49_25
		const p49_25 = this.add.image(730, 621, "49-25");
		p49_25.alpha = 0.2;
		p49_25.alphaTopLeft = 0.2;
		p49_25.alphaTopRight = 0.2;
		p49_25.alphaBottomLeft = 0.2;
		p49_25.alphaBottomRight = 0.2;
		container49Pieces.add(p49_25);

		// p49_26
		const p49_26 = this.add.image(827, 621, "49-26");
		p49_26.alpha = 0.2;
		p49_26.alphaTopLeft = 0.2;
		p49_26.alphaTopRight = 0.2;
		p49_26.alphaBottomLeft = 0.2;
		p49_26.alphaBottomRight = 0.2;
		container49Pieces.add(p49_26);

		// p49_27
		const p49_27 = this.add.image(922, 620, "49-27");
		p49_27.alpha = 0.2;
		p49_27.alphaTopLeft = 0.2;
		p49_27.alphaTopRight = 0.2;
		p49_27.alphaBottomLeft = 0.2;
		p49_27.alphaBottomRight = 0.2;
		container49Pieces.add(p49_27);

		// p49_28
		const p49_28 = this.add.image(1017, 619, "49-28");
		p49_28.alpha = 0.2;
		p49_28.alphaTopLeft = 0.2;
		p49_28.alphaTopRight = 0.2;
		p49_28.alphaBottomLeft = 0.2;
		p49_28.alphaBottomRight = 0.2;
		container49Pieces.add(p49_28);

		// p49_29
		const p49_29 = this.add.image(458, 728, "49-29");
		p49_29.alpha = 0.2;
		p49_29.alphaTopLeft = 0.2;
		p49_29.alphaTopRight = 0.2;
		p49_29.alphaBottomLeft = 0.2;
		p49_29.alphaBottomRight = 0.2;
		container49Pieces.add(p49_29);

		// p49_30
		const p49_30 = this.add.image(539, 729, "49-30");
		p49_30.alpha = 0.2;
		p49_30.alphaTopLeft = 0.2;
		p49_30.alphaTopRight = 0.2;
		p49_30.alphaBottomLeft = 0.2;
		p49_30.alphaBottomRight = 0.2;
		container49Pieces.add(p49_30);

		// p49_31
		const p49_31 = this.add.image(635, 728, "49-31");
		p49_31.alpha = 0.2;
		p49_31.alphaTopLeft = 0.2;
		p49_31.alphaTopRight = 0.2;
		p49_31.alphaBottomLeft = 0.2;
		p49_31.alphaBottomRight = 0.2;
		container49Pieces.add(p49_31);

		// p49_32
		const p49_32 = this.add.image(730, 728, "49-32");
		p49_32.alpha = 0.2;
		p49_32.alphaTopLeft = 0.2;
		p49_32.alphaTopRight = 0.2;
		p49_32.alphaBottomLeft = 0.2;
		p49_32.alphaBottomRight = 0.2;
		container49Pieces.add(p49_32);

		// p49_33
		const p49_33 = this.add.image(826, 728, "49-33");
		p49_33.alpha = 0.2;
		p49_33.alphaTopLeft = 0.2;
		p49_33.alphaTopRight = 0.2;
		p49_33.alphaBottomLeft = 0.2;
		p49_33.alphaBottomRight = 0.2;
		container49Pieces.add(p49_33);

		// p49_34
		const p49_34 = this.add.image(922, 726, "49-34");
		p49_34.alpha = 0.2;
		p49_34.alphaTopLeft = 0.2;
		p49_34.alphaTopRight = 0.2;
		p49_34.alphaBottomLeft = 0.2;
		p49_34.alphaBottomRight = 0.2;
		container49Pieces.add(p49_34);

		// p49_35
		const p49_35 = this.add.image(1003, 725, "49-35");
		p49_35.alpha = 0.2;
		p49_35.alphaTopLeft = 0.2;
		p49_35.alphaTopRight = 0.2;
		p49_35.alphaBottomLeft = 0.2;
		p49_35.alphaBottomRight = 0.2;
		container49Pieces.add(p49_35);

		// p49_36
		const p49_36 = this.add.image(444, 834, "49-36");
		p49_36.alpha = 0.2;
		p49_36.alphaTopLeft = 0.2;
		p49_36.alphaTopRight = 0.2;
		p49_36.alphaBottomLeft = 0.2;
		p49_36.alphaBottomRight = 0.2;
		container49Pieces.add(p49_36);

		// p49_37
		const p49_37 = this.add.image(539, 834, "49-37");
		p49_37.alpha = 0.2;
		p49_37.alphaTopLeft = 0.2;
		p49_37.alphaTopRight = 0.2;
		p49_37.alphaBottomLeft = 0.2;
		p49_37.alphaBottomRight = 0.2;
		container49Pieces.add(p49_37);

		// p49_38
		const p49_38 = this.add.image(635, 834, "49-38");
		p49_38.alpha = 0.2;
		p49_38.alphaTopLeft = 0.2;
		p49_38.alphaTopRight = 0.2;
		p49_38.alphaBottomLeft = 0.2;
		p49_38.alphaBottomRight = 0.2;
		container49Pieces.add(p49_38);

		// p49_39
		const p49_39 = this.add.image(729, 834, "49-39");
		p49_39.alpha = 0.2;
		p49_39.alphaTopLeft = 0.2;
		p49_39.alphaTopRight = 0.2;
		p49_39.alphaBottomLeft = 0.2;
		p49_39.alphaBottomRight = 0.2;
		container49Pieces.add(p49_39);

		// p49_40
		const p49_40 = this.add.image(826, 834, "49-40");
		p49_40.alpha = 0.2;
		p49_40.alphaTopLeft = 0.2;
		p49_40.alphaTopRight = 0.2;
		p49_40.alphaBottomLeft = 0.2;
		p49_40.alphaBottomRight = 0.2;
		container49Pieces.add(p49_40);

		// p49_41
		const p49_41 = this.add.image(921, 833, "49-41");
		p49_41.alpha = 0.2;
		p49_41.alphaTopLeft = 0.2;
		p49_41.alphaTopRight = 0.2;
		p49_41.alphaBottomLeft = 0.2;
		p49_41.alphaBottomRight = 0.2;
		container49Pieces.add(p49_41);

		// p49_42
		const p49_42 = this.add.image(1017, 832, "49-42");
		p49_42.alpha = 0.2;
		p49_42.alphaTopLeft = 0.2;
		p49_42.alphaTopRight = 0.2;
		p49_42.alphaBottomLeft = 0.2;
		p49_42.alphaBottomRight = 0.2;
		container49Pieces.add(p49_42);

		// p49_43
		const p49_43 = this.add.image(458, 942, "49-43");
		p49_43.alpha = 0.2;
		p49_43.alphaTopLeft = 0.2;
		p49_43.alphaTopRight = 0.2;
		p49_43.alphaBottomLeft = 0.2;
		p49_43.alphaBottomRight = 0.2;
		container49Pieces.add(p49_43);

		// p49_44
		const p49_44 = this.add.image(540, 925, "49-44");
		p49_44.alpha = 0.2;
		p49_44.alphaTopLeft = 0.2;
		p49_44.alphaTopRight = 0.2;
		p49_44.alphaBottomLeft = 0.2;
		p49_44.alphaBottomRight = 0.2;
		container49Pieces.add(p49_44);

		// p49_45
		const p49_45 = this.add.image(635, 941, "49-45");
		p49_45.alpha = 0.2;
		p49_45.alphaTopLeft = 0.2;
		p49_45.alphaTopRight = 0.2;
		p49_45.alphaBottomLeft = 0.2;
		p49_45.alphaBottomRight = 0.2;
		container49Pieces.add(p49_45);

		// p49_46
		const p49_46 = this.add.image(729, 925, "49-46");
		p49_46.alpha = 0.2;
		p49_46.alphaTopLeft = 0.2;
		p49_46.alphaTopRight = 0.2;
		p49_46.alphaBottomLeft = 0.2;
		p49_46.alphaBottomRight = 0.2;
		container49Pieces.add(p49_46);

		// p49_47
		const p49_47 = this.add.image(826, 941, "49-47");
		p49_47.alpha = 0.2;
		p49_47.alphaTopLeft = 0.2;
		p49_47.alphaTopRight = 0.2;
		p49_47.alphaBottomLeft = 0.2;
		p49_47.alphaBottomRight = 0.2;
		container49Pieces.add(p49_47);

		// p49_48
		const p49_48 = this.add.image(921, 924, "49-48");
		p49_48.alpha = 0.2;
		p49_48.alphaTopLeft = 0.2;
		p49_48.alphaTopRight = 0.2;
		p49_48.alphaBottomLeft = 0.2;
		p49_48.alphaBottomRight = 0.2;
		container49Pieces.add(p49_48);

		// p49_49
		const p49_49 = this.add.image(1002, 939, "49-49");
		p49_49.alpha = 0.2;
		p49_49.alphaTopLeft = 0.2;
		p49_49.alphaTopRight = 0.2;
		p49_49.alphaBottomLeft = 0.2;
		p49_49.alphaBottomRight = 0.2;
		container49Pieces.add(p49_49);

		// downArrow
		const downArrow = this.add.image(1641, 1029, "Arrow");
		downArrow.flipY = true;

		// upArrow
		const upArrow = this.add.image(1628, 47, "Arrow");

		// menusContainer
		const menusContainer = this.add.container(0, 0);

		// hint
		const hint = this.add.image(793, 68, "Hint_1");
		hint.scaleX = 1.5;
		hint.scaleY = 1.5;
		menusContainer.add(hint);

		// sample
		const sample = this.add.image(393, 68, "Sample Icon");
		sample.scaleX = 1.5;
		sample.scaleY = 1.5;
		menusContainer.add(sample);

		// showEdges
		const showEdges = this.add.image(533, 68, "Show-Edges-Icon");
		showEdges.scaleX = 1.5;
		showEdges.scaleY = 1.5;
		menusContainer.add(showEdges);

		// shuffle
		const shuffle = this.add.image(663, 68, "Shuffle");
		shuffle.scaleX = 1.5;
		shuffle.scaleY = 1.5;
		menusContainer.add(shuffle);

		// text
		const text = this.add.text(926, 139, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Sound";
		text.setStyle({ "color": "#ffffffff", "fontFamily": "CookieSupplyRegular", "fontSize": "20px" });
		menusContainer.add(text);

		// text_2
		const text_2 = this.add.text(1049, 139, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Exit";
		text_2.setStyle({ "color": "#ffffffff", "fontFamily": "CookieSupplyRegular", "fontSize": "20px" });
		menusContainer.add(text_2);

		// text_1
		const text_1 = this.add.text(795, 139, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Hint";
		text_1.setStyle({ "color": "#ffffffff", "fontFamily": "CookieSupplyRegular", "fontSize": "20px" });
		menusContainer.add(text_1);

		// text_3
		const text_3 = this.add.text(393, 139, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "Sample";
		text_3.setStyle({ "color": "#ffffffff", "fontFamily": "CookieSupplyRegular", "fontSize": "20px" });
		menusContainer.add(text_3);

		// text_4
		const text_4 = this.add.text(534, 139, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "Show Edges";
		text_4.setStyle({ "color": "#ffffffff", "fontFamily": "CookieSupplyRegular", "fontSize": "20px" });
		menusContainer.add(text_4);

		// text_5
		const text_5 = this.add.text(663, 139, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "Shuffle";
		text_5.setStyle({ "color": "#ffffffff", "fontFamily": "CookieSupplyRegular", "fontSize": "20px" });
		menusContainer.add(text_5);

		// exist_button
		const exist_button = this.add.image(1050, 73, "Exist-button (1)");
		exist_button.scaleX = 1.5;
		exist_button.scaleY = 1.5;
		menusContainer.add(exist_button);

		// sound_icon
		const sound_icon = this.add.image(924, 74, "Sound-icon (1)");
		sound_icon.scaleX = 1.5;
		sound_icon.scaleY = 1.5;
		menusContainer.add(sound_icon);

		// stick
		const stick = this.add.image(925, 75, "Stick");
		stick.scaleX = 0.8;
		stick.scaleY = 0.8;
		menusContainer.add(stick);

		// spotLightContainer
		const spotLightContainer = this.add.container(0, 35);

		// spotlight
		const spotlight = this.add.image(938, -856, "Spotlight");
		spotlight.setOrigin(0.5, 0);
		spotLightContainer.add(spotlight);

		// spotlight_1
		const spotlight_1 = this.add.image(786, -863, "Spotlight");
		spotlight_1.angle = -12;
		spotlight_1.setOrigin(0.5, 0);
		spotLightContainer.add(spotlight_1);

		// spotlight_2
		const spotlight_2 = this.add.image(1101, -860, "Spotlight");
		spotlight_2.angle = 10;
		spotlight_2.setOrigin(0.5, 0);
		spotLightContainer.add(spotlight_2);

		// spotlight_3
		const spotlight_3 = this.add.image(1253, -853, "Spotlight");
		spotlight_3.angle = 11;
		spotlight_3.setOrigin(0.5, 0);
		spotLightContainer.add(spotlight_3);

		// spotlight_4
		const spotlight_4 = this.add.image(635, -853, "Spotlight");
		spotlight_4.angle = -15;
		spotlight_4.setOrigin(0.5, 0);
		spotLightContainer.add(spotlight_4);

		// timerContainer
		const timerContainer = this.add.container(960, -87);

		// time_Board
		const time_Board = this.add.image(7.7891564582519095, 0.316566056612146, "Time-Board");
		timerContainer.add(time_Board);

		// timerText
		const timerText = this.add.text(-78, -18, "", {});
		timerText.text = "Timer";
		timerText.setStyle({ "fontFamily": "CookieSupplyRegular", "fontSize": "35px" });
		timerContainer.add(timerText);

		// continue_button
		const continue_button = this.add.image(960, 1207, "Continue-button");

		// curtenPrefab
		const curtenPrefab = new CurtenPrefab(this, 966, 535);
		this.add.existing(curtenPrefab);

		// hint (components)
		new OnHoverComponent(hint);
		new PushOnClick(hint);

		// sample (components)
		new PushOnClick(sample);
		new OnHoverComponent(sample);

		// showEdges (components)
		new PushOnClick(showEdges);
		new OnHoverComponent(showEdges);

		// shuffle (components)
		new PushOnClick(shuffle);
		new OnHoverComponent(shuffle);

		this.scroll_Holder = scroll_Holder;
		this.piece_Holder1 = piece_Holder1;
		this.piece_Holder2 = piece_Holder2;
		this.piece_Holder3 = piece_Holder3;
		this.piece_Holder4 = piece_Holder4;
		this.frame = frame;
		this.piecesContainer = piecesContainer;
		this.catPuzzlePiece = catPuzzlePiece;
		this.container25Pieces = container25Pieces;
		this.container49Pieces = container49Pieces;
		this.downArrow = downArrow;
		this.upArrow = upArrow;
		this.menusContainer = menusContainer;
		this.hint = hint;
		this.sample = sample;
		this.showEdges = showEdges;
		this.shuffle = shuffle;
		this.exist_button = exist_button;
		this.sound_icon = sound_icon;
		this.stick = stick;
		this.spotLightContainer = spotLightContainer;
		this.timerContainer = timerContainer;
		this.timerText = timerText;
		this.continue_button = continue_button;
		this.curtenPrefab = curtenPrefab;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	scroll_Holder;
	/** @type {Phaser.GameObjects.Image} */
	piece_Holder1;
	/** @type {Phaser.GameObjects.Image} */
	piece_Holder2;
	/** @type {Phaser.GameObjects.Image} */
	piece_Holder3;
	/** @type {Phaser.GameObjects.Image} */
	piece_Holder4;
	/** @type {Phaser.GameObjects.Image} */
	frame;
	/** @type {Phaser.GameObjects.Container} */
	piecesContainer;
	/** @type {Phaser.GameObjects.Container} */
	catPuzzlePiece;
	/** @type {Phaser.GameObjects.Container} */
	container25Pieces;
	/** @type {Phaser.GameObjects.Container} */
	container49Pieces;
	/** @type {Phaser.GameObjects.Image} */
	downArrow;
	/** @type {Phaser.GameObjects.Image} */
	upArrow;
	/** @type {Phaser.GameObjects.Container} */
	menusContainer;
	/** @type {Phaser.GameObjects.Image} */
	hint;
	/** @type {Phaser.GameObjects.Image} */
	sample;
	/** @type {Phaser.GameObjects.Image} */
	showEdges;
	/** @type {Phaser.GameObjects.Image} */
	shuffle;
	/** @type {Phaser.GameObjects.Image} */
	exist_button;
	/** @type {Phaser.GameObjects.Image} */
	sound_icon;
	/** @type {Phaser.GameObjects.Image} */
	stick;
	/** @type {Phaser.GameObjects.Container} */
	spotLightContainer;
	/** @type {Phaser.GameObjects.Container} */
	timerContainer;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Image} */
	continue_button;
	/** @type {CurtenPrefab} */
	curtenPrefab;

	/* START-USER-CODE */

	// Write your code here

	pieceInitialPosX;
	pieceInitialPosY;
	enableScroll = false;
	addTween
	count = 0;
	puzzlepiecesContainer;
	settledPieces = []
	startTime;
	running = false;
	endPosCount=0

	create() {
		this.editorCreate();

		this.addTween = new TweenManager(this);
		this.curtenPrefab.doorOpening();
		const yOffset = 230;

		if (noOfPieces == 16) {
			this.catPuzzlePiece.visible = true;
		} else if (noOfPieces == 25) {
			this.container25Pieces.visible = true;
		} else if (noOfPieces == 49) {
			this.container49Pieces.visible = true;
		}

		this.startStopwatch()


		for (let i = 0; i < noOfPieces; i++) {
			var imageName;
			if (noOfPieces == 16) {
				imageName = i + 1;
			} else if (noOfPieces == 25) {
				imageName = "25-" + (i + 1);
			} else if (noOfPieces == 49) {
				console.log("im 49");
				imageName = "49-" + (i + 1);
			}

			var pieces = this.add.image(1639, (yOffset * i) + 250, imageName);
			this.physics.world.enable(pieces);
			pieces.puzzleNo = i;
			if (noOfPieces == 16) {
				pieces.scaleX = 0.6;
				pieces.scaleY = 0.6;
			} else if (noOfPieces == 25) {
				pieces.scaleX = 0.7;
				pieces.scaleY = 0.7;
			} else if (noOfPieces == 49) {
				pieces.scaleX = 0.8;
				pieces.scaleY = 0.8;
			}


			console.log("pieces.scaleX : ", pieces.scaleX, "pieces.scaleY", pieces.scaleY)
			pieces.setInteractive();
			this.input.setDraggable(pieces);
			this.piecesContainer.add(pieces);
			pieces.initalPositionX = pieces.x;
			pieces.initalPositionY = pieces.y;
		}


		const shape = this.make.graphics()
		shape.fillRect(1467, 120, 344, 830);
		const mask = shape.createGeometryMask();
		this.piecesContainer.setMask(mask);

		this.shufflePieces(this.piecesContainer)
		if (this.enableScroll == true) {
			const minY = -this.piecesContainer.getBounds().height + 1000;
			const maxY = 100;
			this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
				this.piecesContainer.y = Phaser.Math.Clamp(this.piecesContainer.y - deltaY, minY, maxY);
				console.log("container y axis : ", this.piecesContainer.y)
			});
		}

		this.input.on('dragstart', (pointer, gameObject) => {
			this.pieceInitialPosX = gameObject.x;
			this.pieceInitialPosY = gameObject.y;
			gameObject.setTint(0x00ff00);
		});

		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			gameObject.x = pointer.x;
			gameObject.y = pointer.y;
			this.piecesContainer.remove(gameObject, false);

			if (noOfPieces == 16) {
				gameObject.setScale(1.2, 1.2)
			}
		});

		this.input.on('dragend', (pointer, gameObject, dragX, dragY) => {
			gameObject.clearTint();
			dragX = pointer.x;
			dragY = pointer.y;
			if (noOfPieces == 16) {
				this.puzzlepiecesContainer = this.catPuzzlePiece
			} else if (noOfPieces == 25) {
				this.puzzlepiecesContainer = this.container25Pieces
			} else if(noOfPieces==49){
				this.puzzlepiecesContainer = this.container49Pieces
			}
			for (let i = 0; i < this.puzzlepiecesContainer.list.length; i++) {
				const target = this.puzzlepiecesContainer.list[i];
				if (dragX > target.x - target.width / 2 && dragX < target.x + target.width / 2 && dragY > target.y - target.height / 2 && dragY < target.y + target.height / 2) {
					gameObject.x = target.x;
					gameObject.y = target.y;
					if (gameObject.texture.key == target.texture.key) {
						this.settledPieces.push(gameObject)
						gameObject.disableInteractive();
						console.log(this.settledPieces)
						this.count++
						if (this.count == noOfPieces) {
							setTimeout(() => {
								this.conclusion(this.piecesContainer)
							}, 1000)
						}
					}

					// this.endPosCount--
					if (noOfPieces == 16) {
						gameObject.setScale(1.07, 1.07)
					} else {
						gameObject.setScale(1, 1)
					}
					break;
				}
				// console.log("Main Object", gameObject)
				// console.log("Next Piece...", this.piecesContainer.list[gameObject.puzzleNo])
				if (dragX > 1439 && dragX < 1757) {
					gameObject.setScale(0.7, 0.7)
					this.piecesContainer.add(gameObject);
					game
					gameObject.x = gameObject.initalPositionX;
					this.endPosCount++
				}
			}
			this.piecesContainer.list.forEach((piece, i) => piece.setPosition(1639, (210 * i) + (150)))

			console.log(this.endPosCount)

		});

		this.addListeners()
	}

	shufflePieces(container) {
		var currentIndex = container.length, randomIndex, tempValue;
		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			tempValue = container.list[currentIndex];
			container.list[currentIndex] = container.list[randomIndex];
			container.list[randomIndex] = tempValue;
		}
		// Re-add the shuffled pieces to the scene in the new order
		container.list.forEach(function (piece, index) {
			// console.log("pieces.....", piece)
			piece.y = (210 * index) + (150);
			console.log("piece", piece.y)
			// console.log("Index", index)
			piece.initalPositionX = piece.x
			piece.initalPositionY = piece.y
			piece.puzzleNo = index;
		});
		// console.log("Container After Shuffle...",container)
	}

	conclusion(container) {

		this.running=false;
		this.puzzlepiecesContainer.list.forEach(function (piece, index) {
			piece.visible = false;
		});

		this.settledPieces.forEach((pieces, index) => {
			pieces.visible = false
		})

		var puzzleImage = this.add.image(this.frame.x, this.frame.y, puzzleKey);
		// this.frame.visible = false;
		puzzleImage.setScale(2.25, 2.25)
		puzzleImage.setDepth(1)
		this.frame.setDepth(1)
		this.timerContainer.setDepth(2)
		this.continue_button.setDepth(2)
		this.spotLightContainer.setDepth(2)
		this.curtenPrefab.setDepth(3)
		this.tweens.add({
			targets: puzzleImage,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: 960,
			y: 540,
			scaleX: 1.8,
			scaleY: 1.8,
			duration: 1500,
			ease: "ease-in"
		})

		this.tweens.add({
			targets: this.frame,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: 960,
			y: 540,
			scaleX: 0.85,
			scaleY: 0.85,
			duration: 1500,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.spotLightContainer,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			y: 1020,
			duration: 1500,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.timerContainer,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			y: 90,
			duration: 1500,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.continue_button,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			y: 977,
			duration: 1500,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.upArrow,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			y: this.upArrow.y - 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.downArrow,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			y: this.downArrow.y + 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.piece_Holder1,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: this.piece_Holder1.x + 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.piece_Holder2,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: this.piece_Holder2.x + 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.piece_Holder3,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: this.piece_Holder3.x + 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.piece_Holder4,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: this.piece_Holder4.x + 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.menusContainer,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			y: this.menusContainer - 500,
			duration: 1200,
			ease: "ease-in"
		})
		this.tweens.add({
			targets: this.scroll_Holder,
			// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
			x: this.scroll_Holder.x + 500,
			duration: 1200,
			ease: "ease-in"
		})

		// this.puzzlepiecesContainer.setScale(1.2,1.2)
	}


	//to Add the functionalities in the gameplay scene button....
	addListeners() {
		if (noOfPieces == 16) {
			var position = [82, -135, -340, -535, -758, -972, -1179, -1388, -1599, -1818, -2021, -2228, -2450]
			var endPos = position[(position.length-1)+this.endPosCount];
			console.log(endPos)
		} else if (noOfPieces == 25) {
			console.log("im 25 pieces")
			var position = [82, -135, -340, -535, -758, -972, -1179, -1388, -1599, -1818, -2021, -2228, -2450, -2659, -2859, -3076, -3286, -3500, -3703, -3916, -4130]
			var endPos = position[(position.length-1)+this.endPosCount];
			console.log(endPos)
		} else if (noOfPieces == 49) {
			var position = [82, -135, -340, -535, -758, -972, -1179, -1388, -1599, -1818, -2021, -2228, -2450, -2659, -2859, -3076, -3286, -3500, -3703, -3916, -4130, -4337, -4542, -4751, -4965, -5173, -5386, -5595, -5799, -6014, -6221, -6428, -6636, -6853, -7064, -7270, -7483, -7698, -7904, -8112, -8321, -8533, -8744, -8959, -9165]
			var endPos = position[(position.length-1)+this.endPosCount];
			console.log(endPos)
		}

		this.shuffle.on('pointerdown', () => {
			console.log("Shuffle clicked...")
			this.shufflePieces(this.piecesContainer)
		});

		const minY = -this.piecesContainer.getBounds().height + 1000;
		const maxY = 100;

		let count = 0;

		this.upArrow.setInteractive().on("pointerdown", () => {
			if (this.piecesContainer.y < 82) {
				count--
				this.tweens.add({
					targets: this.piecesContainer,
					// y: Phaser.Math.Clamp(this.piecesContainer.y + 220, minY, maxY),
					y: position[count],
					duration: 300,
					ease: "ease-in"
				})
				// this.piecesContainer.y=position[count]
				console.log("container y axis : ", this.piecesContainer.y)
			}
			// this.piecesContainer.y +=360
		})
		this.downArrow.setInteractive().on("pointerdown", () => {
			console.log("you have clicked on the down Arrow..")

			if (this.piecesContainer.y > endPos)
				count++
			this.tweens.add({
				targets: this.piecesContainer,
				// y: Phaser.Math.Clamp(this.piecesContainer.y - 220, minY, maxY),
				y: position[count],
				duration: 300,
				ease: "ease-in"
			})
			// this.piecesContainer.y=position[count]
			console.log("container y axis : ", this.piecesContainer.y)
		})

		this.addTween.hoverEffect(this.hint)
		this.addTween.hoverEffect(this.sample)
		this.addTween.hoverEffect(this.showEdges)
		this.addTween.hoverEffect(this.shuffle)
		this.addTween.hoverEffect(this.sound_icon)
		this.addTween.hoverEffect(this.exist_button)


		this.showEdges.on("pointerdown", () => {
			this.addPiecesEdges();
		})

		this.exist_button.on("pointerdown", () => {
			this.curtenPrefab.doorClosing();
			setTimeout(() => {
				this.scene.stop('GamePlayScene')
				this.scene.start('PuzzleMenu')
			}, 1700)
		})

		this.sample.setInteractive().on("pointerup", () => {
			this.addEventToSample();
		})

		let soundEnable = true;
		this.sound_icon.setInteractive().on("pointerdown", () => {
			if (soundEnable == true) {
				this.stick.visible = false;
				soundEnable = false
			} else {
				this.stick.visible = true;
				soundEnable = true;
			}
		})

		this.continue_button.setInteractive().on("pointerdown", () => {
			this.curtenPrefab.doorClosing()
			setTimeout(() => {
				this.scene.stop("GamePlayScene")
				this.scene.start("PuzzleMenu")
			}, 1700)
		})


	}

	addPiecesEdges() {
		console.log("Adding edges Pieces...")
	}


	Count = 0
	addEventToSample() {
		let container;
		const alphaValues = [0.2, 0.4, 0.6, 0.8, 0]; // Alpha values for Count 0 to 4

		if (noOfPieces == 16) {
			container = this.catPuzzlePiece;
		} else if (noOfPieces == 25) {
			container = this.container25Pieces;
		} else if (noOfPieces == 49) {
			container = this.container49Pieces;
		}

		container.list.forEach((object, index) => {
			const alpha = alphaValues[this.Count];
			object.setAlpha(alpha);
			console.log(object.alpha);
			// this.pointerUpEventHandled=false
		});

		this.Count = (this.Count + 1) % alphaValues.length;
	}

	startStopwatch() {
		if (!this.running) {
			this.startTime = Date.now();
			this.running = true;
		} else {
			this.running = false;
		}
	}

	update() {
		if (this.running) {
			const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000); // Calculate elapsed time in seconds
			this.timerText.setText(`Time: ${elapsedTime}`);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
