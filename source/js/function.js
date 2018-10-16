function encode (){
    let uniChar;
    let obs = 0;
    let code = "";
    let password = document.getElementById("passw").value.toUpperCase();
    let lengthpassw = password.length - 1;

    for (i = 0; i <= lengthpassw; i++)
    {
        uniChar = password.split("")[i];

        if(obs == 0)
        {
            switch (uniChar)
            {
                case 'A':
                    code += Math.pow(1,2).toString() + ".";
                    break;
                case 'B':
                    code += Math.pow(2,2).toString() + ".";
                    break;
                case 'C':
                    code += Math.pow(3,2).toString() + ".";
                    break;
                case 'D':
                    code += Math.pow(4,2).toString() + ".";
                    break;
                case 'E':
                    code += Math.pow(5,2).toString() + ".";
                    break;
                case 'F':
                    code += Math.pow(6,2).toString() + ".";
                    break;
                case 'G':
                    code += Math.pow(7,2).toString() + ".";
                    break;
                case 'H':
                    code += Math.pow(8,2).toString() + ".";
                    break;
                case 'I':
                    code += Math.pow(9,2).toString() + ".";
                    break;
                case 'J':
                    code += Math.pow(10,2).toString() + ".";
                    break;
                case 'K':
                    code += Math.pow(11,2).toString() + ".";
                    break;
                case 'L':
                    code += Math.pow(12,2).toString() + ".";
                    break;
                case 'M':
                    code += Math.pow(13,2).toString() + ".";
                    break;
                case 'N':
                    code += Math.pow(14,2).toString() + ".";
                    break;
                case 'Ñ':
                    code += Math.pow(15,2).toString() + ".";
                    break;
                case 'O':
                    code += Math.pow(16,2).toString() + ".";
                    break;
                case 'P':
                    code += Math.pow(17,2).toString() + ".";
                    break;
                case 'Q':
                    code += Math.pow(18,2).toString() + ".";
                    break;
                case 'R':
                    code += Math.pow(19,2).toString() + ".";
                    break;
                case 'S':
                    code += Math.pow(20,2).toString() + ".";
                    break;
                case 'T':
                    code += Math.pow(21,2).toString() + ".";
                    break;
                case 'U':
                    code += Math.pow(22,2).toString() + ".";
                    break;
                case 'V':
                    code += Math.pow(23,2).toString() + ".";
                    break;
                case 'W':
                    code += Math.pow(24,2).toString() + ".";
                    break;
                case 'X':
                    code += Math.pow(25,2).toString() + ".";
                    break;
                case 'Y':
                    code += Math.pow(26,2).toString() + ".";
                    break;
                case 'Z':
                    code += Math.pow(27,2).toString() + ".";
                    break;
                case '0':
                    code += "D0.";
                    break;
                case '1':
                    code += "D1.";
                    break;
                case '2':
                    code += "D2.";
                    break;
                case '3':
                    code += "D3.";
                    break;
                case '4':
                    code += "D4.";
                    break;
                case '5':
                    code += "D5.";
                    break;
                case '6':
                    code += "D6.";
                    break;
                case '7':
                    code += "D7.";
                    break;
                case '8':
                    code += "D8.";
                    break;
                case '9':
                    code += "D9.";
                    break;
                default:
                    code = "fallo de conversion";  
                    obs = 1;         
            }
        }
        else
        {
            alert("Solo incluir letras y/o numeros sin espacios en blanco plox");
            break;
        }
    }
    code = code.substring(0,code.length - 1);
    document.getElementById("codif").value = code;
}

function decode(){
    let codePart;
    let passw = "";
    let obs = 0;
    let code = document.getElementById("codif").value.toUpperCase();
    let codeLength = code.split(".").length - 1;
    for(i = 0; i <= codeLength; i++)
    {
        codePart = code.split(".")[i];
        if(obs == 0)
        {
            switch (codePart)
            {
                case Math.pow(1,2).toString() :
                    passw += "A";
                    break;
                case Math.pow(2,2).toString() :
                    passw += "B";
                    break;
                case  Math.pow(3,2).toString() :
                    passw += "C";
                    break;
                case Math.pow(4,2).toString() :
                    passw += "D";
                    break;
                case Math.pow(5,2).toString() :
                    passw += "E";
                    break;
                case  Math.pow(6,2).toString() :
                    passw += "F";
                    break;
                case Math.pow(7,2).toString() :
                    passw += "G";
                    break;
                case Math.pow(8,2).toString() :
                    passw += "H";
                    break;
                case Math.pow(9,2).toString() :
                    passw += "I";
                    break;
                case Math.pow(10,2).toString() :
                    passw += "J";
                    break;
                case  Math.pow(11,2).toString() :
                    passw += "K";
                    break;
                case Math.pow(12,2).toString() :
                    passw += "L";
                    break;
                case Math.pow(13,2).toString() :
                    passw += "M";
                    break;
                case  Math.pow(14,2).toString() :
                    passw += "N";
                    break;
                case Math.pow(15,2).toString() :
                    passw += "Ñ";
                    break;
                case Math.pow(16,2).toString() :
                    passw += "O";
                    break;
                case Math.pow(17,2).toString() :
                    passw += "P";
                    break;
                case Math.pow(18,2).toString() :
                    passw += "Q";
                    break;
                case Math.pow(19,2).toString() :
                    passw += "R";
                    break;
                case Math.pow(20,2).toString() :
                    passw += "S";
                    break;
                case Math.pow(21,2).toString() :
                    passw += "T";
                    break;
                case Math.pow(22,2).toString() :
                    passw += "U";
                    break;
                case Math.pow(23,2).toString() :
                    passw += "V";
                    break;
                case Math.pow(24,2).toString() :
                    passw += "W";
                    break;
                case Math.pow(25,2).toString() :
                    passw += "X";
                    break;
                case Math.pow(26,2).toString() :
                    passw += "Y";
                    break;
                case Math.pow(27,2).toString() :
                    passw += "Z";
                    break;
                case "D0.":
                    passw += '0';
                    break;
                case "D1":
                    passw += '1';
                    break;
                case "D2":
                    passw += '2';
                    break;
                case "D3":
                    passw += '3';
                    break;
                case "D4":
                    passw += '4';
                    break;
                case "D5":
                    passw += '5';
                    break;
                case "D6":
                    passw += '6';
                    break;
                case "D7":
                    passw += '7';
                    break;
                case "D8":
                    passw += '8';
                    break;
                case "D9":
                    passw += '9';
                    break;
                default:
                    passw = "fallo de conversion";  
                    obs = 1;         
            }
        }
        else
        {
            alert("los caracteres no coinciden");
            break;
        }
    }
    document.getElementById("passw").value = passw;
}