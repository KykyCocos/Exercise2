var hor = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //массив горизонтали
var vert = ['1', '2', '3', '4', '5', '6', '7', '8'];//массив вертикали

var place, Hor="", Vert="", out="";

function placeHorVert() {
    var place = document.getElementById("magic").value; 
    for (i=0; i<place.length; i++) { // цикл связывает индекс массива со значением которое ввели
        var a = place[i];
        if (i==0) {
            for (g=0; g<hor.length; g++) {
                if (hor[g] == a) {
                    var indHor = g;
                }
            }
        }
        else if (i==1) {
            for (m=0; m<vert.length; m++) {
                if (vert[m] == a) {
                    var indVert = m;
                }
            }
        }                      
    }
    if(indHor-1>=0 && indVert-2>=0) { //Если интекс в пределах массива, то записываем положение по горизонтали и по вертикали(в отдельные строки)
                        Hor += hor[indHor-1];
                        Vert += vert[indVert-2];
                    }
                    if(indHor+1<8 && indVert-2>=0) {
                        Hor += hor[indHor+1];
                        Vert += vert[indVert-2];
                    }
                    if(indHor+2<8 && indVert-1>=0) {
                        Hor += hor[indHor+2];
                        Vert += vert[indVert-1];
                    }
                    if(indHor+2<8 && indVert+1<8) {
                        Hor += hor[indHor+2];
                        Vert += vert[indVert+1];
                    }
                    if(indHor+1<8 && indVert+2<8) {
                        Hor += hor[indHor+1];
                        Vert += vert[indVert+2];
                    }
                    if(indHor-1>=0 && indVert+2<8) {
                        Hor += hor[indHor-1];
                        Vert += vert[indVert+2];
                    }
                    if(indHor-2>=0 && indVert+1<8) {
                        Hor += hor[indHor-2];
                        Vert += vert[indVert+1];
                    }
                    if(indHor-2>=0 && indVert-1>=0) {
                        Hor += hor[indHor-2];
                        Vert += vert[indVert-1];
                    }             
    for (j=0; j<Hor.length; j++) { // Соединяем положения горизонтали и вертикали вместе и выводим
        var sum = Hor[j] + Vert[j];
        out += sum + " ";
    }
    alert("Возможные варианты хода: " + out);
    Hor="", Vert="", out=""; //очищаем значения переменных
}
// Работает только с заглавными буквами
       
        
    