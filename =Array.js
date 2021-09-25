
const rows = 3;
const columns = 2;
const myArray1 = [];
for (let i = 0; i< rows; i++) {
    myArray1[i] = [];
    for (let j = 0; j < rows; j++){
        myArray1[i][j] = prompt(" enter the values");
    }
}
console.log(myArray1);
