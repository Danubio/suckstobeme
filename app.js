document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')

    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruiser = document.querySelector('.cruiser-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')

    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')

    const turnsDisplay = document.querySelector('#whose-go')
    const inforDisplay = document.querySelector('#info')

    const userSquares = []
    const computerSquares = []
    const width = 10;

    function createBoard(grid, squares) {
        for(let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.dataset.id = i
            grid.appendChild(square)

            squares.push(square)
        }
    }

    createBoard(userGrid, userSquares);
    createBoard(computerGrid, computerSquares);


    const shipArray = [
        {
            name: 'destroyer',
            directions:[
                [0, 1],
                [0, width]
            ]
        },
        {
            name: 'submarine',
            directions:[
                [0, 1, 2],
                [0, width, width * 2]
            ]
        },
        {
            name: 'battleship',
            directions:[
                [0, 1, 2, 3],
                [0, width, width * 2, width * 3]
            ]
        },
        {
            name: 'carrier',
            directions:[
                [0, 1, 2, 3, 4],
                [0, width, width * 2, width * 3, width * 4]
            ]
        },
    ]



    function generate() {
        let randomDirection = Math.floor(Math.random() * ship.directions.length)
        let current = ship.directions[randomDirection]

        if (randomDirection===0) direction = 1
        if (randomDirection===1) direction = 10

        let randomStart = Math.floor(Math.random() * computerSquares.length)
    }
})