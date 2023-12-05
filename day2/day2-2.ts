import { open } from 'node:fs/promises';
reader();
async function reader() {
    const file = await open('./input.txt');
    let totalPower: number = 0;
    for await (const game of file.readLines()) {
        let parts = game.split(':');
        let gameId: number = parseInt(parts[0].replace("Game ", ""));
        let draws = parts[1].split(';');

        console.log("\nGame " + gameId);
        let minRed: number = 0;
        let minGreen: number = 0;
        let minBlue: number = 0;

        draws.forEach(draw => {
            let cubesDrawn = draw.trim().split(',');

            cubesDrawn.forEach(cubes => {
                let parts = cubes.trim().split(' ');
                console.log(parts);
                let numCubes: number = parseInt(parts[0]);
                let color: string = parts[1];

                if (color == 'red' && numCubes > minRed) {
                    minRed = numCubes;
                }
                if (color == 'green' && numCubes > minGreen) {
                    minGreen = numCubes;
                }
                if (color == 'blue' && numCubes > minBlue) {
                    minBlue = numCubes;
                }
            });
        });

        let power: number = minRed * minGreen * minBlue;
        console.log(minRed+" red", minGreen+" green", minBlue+" blue", power+" power");
        totalPower += power;
    }
    console.log("Total power: " + totalPower);
}