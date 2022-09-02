var nRighe = 10;
var nColonne = 10;

var matriceGiallo;
var matriceRosso;

var pedineRosse = 9;
var pedineGialle = 9;

var bersaglioRosso = 10;
var bersaglioGiallo = 10;

var rosso = "rosso";
var giallo = "giallo";
var giocatoreCorrente = giallo;

var pronto = 2;
var gameOver = 0;

window.onload = function()
{
    CreaGriglia();
}

function CreaGriglia(){
    
    matriceGiallo = [];
    for(rg=0;rg<nRighe;rg++)
    {
        rigaG = [];

        for(cg=0;cg<nColonne;cg++)
        {
            rigaG.push(" ");
            var casella = document.createElement("div");
            casella.id = rg +"-"+ cg;
            casella.classList.add("casellaGialla");
            casella.addEventListener("click", toccoGiallo);
            document.getElementById("grigliaGiallo").append(casella);
        }
        matriceGiallo.push(rigaG);
    }

    matriceRosso = [];
    for(rr=0;rr<nRighe;rr++)
    {
        rigaR = [];

        for(cr=0;cr<nColonne;cr++)
        {
            rigaR.push(" ");
            var casella = document.createElement("div");
            casella.id = rr +"-"+ cr;
            casella.classList.add("casellaRossa");
            casella.addEventListener("click", toccoRosso);
            document.getElementById("grigliaRosso").append(casella);
        }
        matriceRosso.push(rigaR);
    }

    document.getElementById("messaggi").innerText="Un giocatore alla volta posizioni 10 pedine nel suo campo"
}

function toccoGiallo()
{
    var coordinate = this.id.split("-");
    if(pronto>0)
    {
        if(pedineGialle>0)
        {
            matriceGiallo[coordinate[0]][coordinate[1]]="G";
            console.log(matriceGiallo)
            this.style.background="yellow";
            pedineGialle = pedineGialle-1;
        }
        else if(pedineGialle==0)
        {
            document.getElementById("grigliaGiallo").style.background = "yellow";
            var caselle = document.getElementsByClassName("casellaGialla");
            for(i=0;i<caselle.length;i++)
            {
                caselle[i].style.background="white";
            }
            pronto = pronto -1;
            if(pronto==0){
                Gioco();
            }
        }
    }
    else if(!gameOver && giocatoreCorrente==rosso)
    {
        if(matriceGiallo[coordinate[0]][coordinate[1]]=="G")
        {
            bersaglioGiallo = bersaglioGiallo - 1;
            matriceGiallo[coordinate[0]][coordinate[1]]==" ";
            this.style.background="yellow";
            if(bersaglioGiallo>0)
            {
                giocatoreCorrente=giallo;
                document.getElementById("messaggi").innerText="Bersaglio colpito! \n\n" + bersaglioGiallo + " bersagli rimanenti al rosso per vincere! " + "\n\nil giocatore " + giocatoreCorrente + " proceda a cliccare una casella avversaria";
            }
            else
            {
                gameOver = 0;
                document.getElementById("messaggi").innerText="il giocatore rosso vince!!!!";
            }
        }
        else
        {
            this.style.background="black"
            giocatoreCorrente=giallo;
            document.getElementById("messaggi").innerText="Bersaglio mancato! \n\n" + bersaglioGiallo + " bersagli rimanenti al rosso per vincere! " + "\n\nil giocatore " + giocatoreCorrente + " proceda a cliccare una casella avversaria";
        }
        giocatoreCorrente==giallo;
    }
}
function toccoRosso()
{
    var coordinate = this.id.split("-");
    if(pronto>0)
    {
        if(pedineRosse>0)
        {
            console.log(matriceRosso)
            matriceRosso[coordinate[0]][coordinate[1]]="R";
            this.style.background="red";
            pedineRosse = pedineRosse-1;
        }
        else if(pedineRosse==0)
        {
            document.getElementById("grigliaRosso").style.background = "red";
            var caselle = document.getElementsByClassName("casellaRossa");
            for(i=0;i<caselle.length;i++)
            {
                caselle[i].style.background="white";
            }
            pronto = pronto -1;
            if(pronto==0){
                Gioco();
            }
        }
    }
    else if(!gameOver && giocatoreCorrente==giallo)
    {
        if(matriceRosso[coordinate[0]][coordinate[1]]=="R")
        {
            matriceRosso[coordinate[0]][coordinate[1]]==" ";
            this.style.background="red";
            bersaglioRosso = bersaglioRosso - 1;
            if(bersaglioRosso>0)
            {
                giocatoreCorrente=rosso;
                document.getElementById("messaggi").innerText="Bersaglio colpito!\n \n" + bersaglioRosso + " bersagli rimanenti al giallo per vincere!\n\n " + "il giocatore " + giocatoreCorrente + " proceda a cliccare una casella avversaria";
            }
            else
            {
                gameOver = 0;
                document.getElementById("messaggi").innerText="il giocatore giallo vince!!!!";
            }
        }
        else
        {
            this.style.background="black";
            giocatoreCorrente=rosso;
            document.getElementById("messaggi").innerText="Bersaglio mancato! \n\n" + bersaglioRosso + " bersagli rimanenti al giallo per vincere! \n\n" + "il giocatore" + giocatoreCorrente + " proceda a cliccare una casella avversaria";
        }
        giocatoreCorrente == rosso;
    }
}

function Gioco()
{
    document.getElementById("messaggi").innerText="il giocatore " + giocatoreCorrente + " proceda a cliccare una casella avversaria";
}