function sooming() {
    let koik_ounad = 12;
    let poialpoiste_arv = document.getElementById("poialpoiss").value;
    let i = 1;
    let arr = [];
    if(poialpoiste_arv <= 7 && poialpoiste_arv > 0){
        while (i <= poialpoiste_arv) {
            let random = Math.floor(Math.random() * 2) + 1;
            koik_ounad = koik_ounad - random;
            arr.push(document.getElementById("tulemus").innerHTML = `${random} <br>`)
            i += 1;
        }
        document.getElementById("pp").innerHTML = `${arr.join("\r\n")}`;

        document.getElementById("tulemus").innerHTML = `Lumivalgekesele jäi ${koik_ounad} õuna`;

    }
    }
