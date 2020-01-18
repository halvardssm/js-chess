import { COLOUR, ChessPiece, generateEmptyBoardArray, Position } from '../../public/lib/index.js'
import { updateAvailableMoves } from './logic.js'

export class GameState {

	/**
	 * @param {number} gameId 
	 */
	constructor(gameId) {
		this.id = gameId
		this.playerW = null
		this.playerB = null
		/** @type ChessPiece[][] */
		this.gameBoard = generateEmptyBoardArray()
		this.winner = null

		this.initValidMoves()
	}

	hasTwoConnectedPlayers() {
		return this.playerB !== null
	}

	addPlayer(player) {
		if (this.playerW && this.playerB) {
			return new Error('Invalid call to addPlayer, Game full')
		}

		if (this.playerW === null) {
			this.playerW = player
			return COLOUR.white
		} else {
			this.playerB = player
			return COLOUR.black
		}
	}

	movePiece() {
		//TODO
	}

	getWinner() {
		return this.winner
	}

	getBoard() {
		return this.gameBoard
	}

	initValidMoves() {
		console.log('initValidMoves')
		this.gameBoard.map(arr => arr
			.filter(Boolean)
			.map(cp => {
				console.log('updateValidMoves')
				cp.updateValidMoves(
					updateAvailableMoves(this.gameBoard, cp)
				)
			}))
	}
}
