const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
console.log("Rata-rata = " +rataRata)

if (rataRata >= 0 && rataRata <= 59) {
    console.log("Grade = E")
}else if (rataRata > 59 && rataRata <= 69) {
    console.log("Grade = D")
}else if (rataRata > 69 && rataRata <= 79) {
    console.log("Grade = C")
}else if (rataRata > 79 && rataRata <= 89) {
    console.log("Grade = B")
}else if (rataRata > 89 && rataRata <= 100) {
    console.log("Grade = A")
}else {
    console.log("Nilai Kosong")
}