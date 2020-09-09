const printSegitiga = 5
let n = "" // variabel untuk menyimpan data

if (typeof printSegitiga !== "number") {//jika tipedata bukan number
    console.log("Data harus number")
}

for (let i = printSegitiga; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        n += j + " "
    }
    n += "\n"
}
console.log(n)//print datanya