var n1 = Number(prompt("Enter The Value Of N1 : "));
var n2 = Number(prompt("Enter The Value Of N2 : "));
var n3 = Number(prompt("Enter The Value Of N3 : "));
var n4 = Number(prompt("Enter The Value Of N4 : "));

document.querySelectorAll('p')[0].innerHTML = "Value Of N1 : " + n1;
document.querySelectorAll('p')[1].innerHTML = "Value Of N2 : " + n2;
document.querySelectorAll('p')[2].innerHTML = "Value Of N3 : " + n3;
document.querySelectorAll('p')[3].innerHTML = "Value Of N4 : " + n4;

if (n1 > n2) {
    if (n1 > n3) {
        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1 Is Greater";
        }
        else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "N1 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
    else if (n1 == n3) {
        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1 And N3 Are Equal And Greater";
        }
        else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "N1, N3 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
    else {
        if (n3 > n4) {
            document.querySelector('h1').innerHTML = "N3 Is Greater";
        }
        else if (n3 == n4) {
            document.querySelector('h1').innerHTML = "N3 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
}

else if (n1 == n2) {
    if (n1 > n3) {
        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1 And N2 Are Equal And Greater";
        }
        else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "N1, N2 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
    else if (n1 == n3) {
        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1, N2 And N3 Are Equal And Greater";
        }
        else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "All Are Equal";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
    else {
        if (n3 > n4) {
            document.querySelector('h1').innerHTML = "N3 Is Greater";
        }
        else if (n3 == n4) {
            document.querySelector('h1').innerHTML = "N3 And N4 Are Equal And Greater";  
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
}

else {
    if (n2 > n3) {
        if (n2 > n4) {
            document.querySelector('h1').innerHTML = "N2 Is Greater";
        }
        else if (n2 == n4) {
            document.querySelector('h1').innerHTML = "N2 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
    else if (n2 == n3) {
        if (n2 > n4) {
            document.querySelector('h1').innerHTML = "N2 And N3 Are Equal And Greater";
        }
        else if (n2 == n4) {
            document.querySelector('h1').innerHTML = "N2, N3 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
    else {
        if (n3 > n4) {
            document.querySelector('h1').innerHTML = "N3 Is Greater";
        }
        else if (n3 == n4) {
            document.querySelector('h1').innerHTML = "N3 And N4 Are Equal And Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "N4 Is Greater";
        }
    }
}