/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

const formingMagicSquare = (s) => {
    // const possibleOutcomes = [
    //     [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    //     [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    //     [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    //     [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    //     [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    //     [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    //     [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    //     [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    // ];

    const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    let min = 100;
    let cost = (s, squares) => {

        return [...s.map(value => value.join('')).join('')].reduce((target, item, index) => {
            target += Math.abs(+item - +squares[index])

            return target;
        }, 0)
    };

    squares.forEach((item, index) => {
        let value = cost(s, squares[index]);

        (value < min) && (min = value);
    });

    return min;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// const formingMagicSquare = (s) => {
//   const magicSquares = getMagicSquares(3);
//   const valueDifference = getValueDifferences(magicSquares, s);
  
//   return valueDifference.sort((a, b) => a - b)[0];
// };

// const getMagicSquares = (n) => {
//   const evenNumbersPermutations = getAllPermutations([2, 4, 6, 8]);
//   const squares = {};
  
//   let i = 0;
//   let j = 0;
//   let length = evenNumbersPermutations.length;
//   let magicSum = 15;
  
//   for(let id = 0; id < length; id++) {
//     squares[id] = [[],[],[]]
//     let A = squares[id],
//         evenNumbers = evenNumbersPermutations[id];
//     A[1][1] = 5;
    
//     A[i][j] = evenNumbers[0];
//     A[i][j + 2] = evenNumbers[1];
//     A[i + 2][j] = evenNumbers[2];
//     A[i + 2][j + 2] = evenNumbers[3];
    
//     A[i][j+1] = magicSum - (A[i][j] + A[i][j+2]);
//     A[i+1][j] = magicSum - (A[i][j] + A[i+2][j]);
//     A[i+1][j+2] = magicSum - (A[i][j+2] + A[i+2][j+2]);
//     A[i+2][j+1] = magicSum - (A[i][j+1] + A[i+1][j+1]);
//   }
  
//   return Object.key(squares).reduce(isMagicSquare, squares);
// };

// const isMagicSquares = (squares, key) => {
//   const current = squares[key];
//   const magicSum = 15;
  
//   if(current[0].reduce((a, b) => a + b) !== magicSum ||  //row 1
//      current[1].reduce((a, b) => a + b) !== magicSum ||  //row 2
//      current[2].reduce((a, b) => a + b) !== magicSum ||  //row 3
//      current[0][0] + current[1][0] + current[2][0] !== magicSum ||  //column 1
//      current[0][1] + current[1][1] + current[2][1] !== magicSum ||  //column 2
//      current[0][2] + current[1][2] + current[2][2] !== magicSum ||  //column 3
//      current[0][0] + current[1][1] + current[2][2] !== magicSum ||  //diagonal L
//      current[0][2] + current[1][1] + current[2][0] !== magicSum) {  //diagonal R
//         delete squares[key];
//   }
  
//   return squares;
// };

// const getValueDifferences = (magicSquares, square) => {
//   return Object.keys(magicSquares).reduce((difference, key) => {
//     difference.push(getValueDifference(magicSquares[key], square))
//     return differences;
//   }, [])
// };

// const getValueDifference = (magicSquare, square) => {
//   const length = magicSquare.length;
//   let difference = 0;
  
//   for(let i = 0; i < length; i++) {
//     for(let j = 0; j < length; j++) {
//       difference += Math.abs(magicSquare[i][j] - square[i][j]);
//     }
//   }
  
//   return difference;
// };
