let ido = parseInt(document.getElementById("Ido"));
let kovetkezo = 1;

function start() {
    const doboz = document.getElementById("doboz");   
    const x = parseInt(document.getElementById("sor").value);
    const y = parseInt(document.getElementById("oszlop").value);
    Megjelenit(doboz, x, y);
}

function rng(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function winCheck() {
    
}

function idozitoUpdate() {

}

function game() {

}

function kereses(l, v, n) {
    let i = 0;
    while (i < n && l[i] != v) {
        i++;
    }
    return (i < n) ? i : -1;
}

function esesHelySzamito() {

}

function Megjelenit(doboz, x, y) {
    doboz.innerHTML = "";
    const table = document.createElement("table");
    for (let i = 0; i < x; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < y; j++) {
            const td = document.createElement("td");
            td.innerText = "-"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    doboz.appendChild(table);
}