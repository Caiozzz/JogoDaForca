function desenhaBase() {

    // Etilização
    pincel.lineWidth = 8;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.fillStyle = '#F3F5FC';
    pincel.strokeStyle = '#0A3871';

    // Manipulação
    pincel.beginPath();
    pincel.moveTo(480, 300);
    pincel.lineTo(700, 300);
    pincel.stroke();
    pincel.closePath();
}

function desenhaTracos() {
    pincel.lineWidth = 3;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.fillStyle = '#F3F5FC';
    pincel.strokeStyle = '#0A3871';

    let largura = 600/palavraSecreta.length;

    for(var i = 0; i < palavraSecreta.length; i++) {
        pincel.moveTo(300 + (largura * i), 450);
        pincel.lineTo(350 + (largura * i), 450);
    }
    pincel.stroke();
    pincel.closePath();
}

function escreverLetraCorreta(index){
    pincel.font = 'bold 50px Inter';
    pincel.lineCap = 'Round';
    pincel.fillStyle = '#0A3871';
    let largura = 600 / palavraSecreta.length;

    pincel.fillText(palavraSecreta[index], 308 + (largura * index), 440)
}

function escreverLetraIncorreta(letra, chances){
    pincel.font = 'bold 30px Inter';
    pincel.lineCap = 'Round';
    pincel.fillStyle = '#999';

    pincel.fillText(letra, 308 + (30 *(10 - chances)), 540, 30);
}

function desenhaForca() {
    pincel.lineWidth = 8;

    // Forca
    pincel.beginPath();
    pincel.moveTo(550, 300);
    pincel.lineTo(550, 10);
    pincel.lineTo(680, 10);
    pincel.stroke();
    pincel.closePath();

    //corda
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(680, 10);
    pincel.lineTo(680, 70);
    pincel.stroke();

    pincel.lineWidth = 7;
    //Cabeça
    pincel.beginPath();
    pincel.arc(680, 90, 20, 0, 2* Math.PI);
    pincel.stroke();
    //Tronco
    pincel.beginPath();
    pincel.moveTo(680, 110);
    pincel.lineTo(680, 170);
    pincel.stroke();
    //Perna Left
    pincel.beginPath();
    pincel.moveTo(680, 170);
    pincel.lineTo(660, 210);
    pincel.stroke();
    //Perna Right
    pincel.beginPath();
    pincel.moveTo(680, 170);
    pincel.lineTo(700, 210);
    pincel.stroke();
    //Left Arm
    pincel.beginPath();
    pincel.moveTo(680, 120);
    pincel.lineTo(650, 140);
    pincel.stroke();
    //Right Arm
    pincel.beginPath();
    pincel.moveTo(680, 120);
    pincel.lineTo(710, 140);
    pincel.stroke();
}