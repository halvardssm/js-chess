import { T_PLAYER_TYPE, T_BOARD, WEB_SOCKET_URL, T_YOUR_TURN, setMessage, STATUS, T_GAME_OVER, T_GAME_ABORTED } from '../lib/index.js'
import Game from './game.js'

console.log('setup initiated')
const socket = new WebSocket(WEB_SOCKET_URL)
const game = new Game(socket)

socket.onmessage = (incomingMsg) => {
	const message = JSON.parse(incomingMsg.data)

	// set player type
	console.log(message)
	switch (message.type) {
		
		case T_YOUR_TURN:
			game.changeActivePlayer()
			game.generateBoard(socket)
			setMessage(document, STATUS.turn)
			break

		case T_BOARD:
			game.setBoardArray(message.data)
			game.generateBoard(socket)
			
			break
		case T_PLAYER_TYPE:
			game.setPlayerType(message.data)
			setMessage(document, STATUS.onePlayer)
			document.getElementById('player-type').innerText = 'You play as ' + message.data.toLowerCase()
			break

		case T_GAME_OVER:
			setMessage(document, message.data.colour === game.playerType ? STATUS.gameWon : STATUS.gameLost)
			game.socket.close()
			break
		case T_GAME_ABORTED:
			setMessage(document, STATUS.aborted)
			break
	}
}

socket.onopen =  () => {
	socket.send('{}')
}

// server sends a close event only if the game was aborted from some side
socket.onclose = (code, message) => {
	console.log(code, message)
	if (game.getWinner() === null) {
		// game.setStatus(Status['aborted'])
	}
}

socket.onerror =  () => { }
