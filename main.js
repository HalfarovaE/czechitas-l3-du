// tady je místo pro náš program

//dú část 1
let jmeno = prompt ("Jaké je Tvé křestní jméno?");
let prijmeni = prompt ("Jaké je Tvé příjmení?");
let rokNarozeni = Number(prompt("Ve kterém roce ses narodil?"));
let aktualniRok = 2023
let vek = aktualniRok - rokNarozeni

let vystup = document.querySelector ('.vystup');
vystup.innerHTML = jmeno + " " + prijmeni + " " + vek;

//dú část 2 
let oblibenaBarva = String(prompt("Jaká je Tvá oblíbená barva? Prosím napiš v AJ."));

let barva = document.querySelector ('.barva');
barva.innerHTML = "Oblíbená barva: " + oblibenaBarva;

function zmenaBarvy() {
    let zmenaBarvy = document.querySelector ('.zmenaBarvy');
    vystup.style.color = oblibenaBarva

}


