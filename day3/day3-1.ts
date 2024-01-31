import { open } from 'node:fs/promises';
reader();
async function reader() {
    const file = await open('./input.txt');
    let gameIdTotal = 0;
    for await (const line of file.readLines()) {
        let parts = line.split(':');
        let gameId: number = parseInt(parts[0].replace("Game ", ""));
        let games = parts[1].split(';');
        let draws: any = [];
        console.log("\nGame " + gameId);
        let gameIsPossible: boolean = true;
        games.forEach(game => {
            draws = draws.concat(game.split(','));
        });
        draws.forEach(draw => {
            let drawTuple: [number, string];
            drawTuple = draw.trim().split(' ');
            console.log(drawTuple);
            if (drawTuple[1] == 'red' && drawTuple[0] > 12) {
                gameIsPossible = false;
            }
            if (drawTuple[1] == 'green' && drawTuple[0] > 13) {
                gameIsPossible = false;
            }
            if (drawTuple[1] == 'blue' && drawTuple[0] > 14) {
                gameIsPossible = false;
            }
        });
        console.log("Possible? "+gameIsPossible);
        if (gameIsPossible) {
            gameIdTotal += gameId;
        }
    }
    console.log("Total of possible game IDs: " + gameIdTotal);
}