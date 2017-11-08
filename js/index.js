function diskriminans(a, b, c) {
    let d = (b * b) - (4 * a * c);
    return d;
}

function quadraticEquation(a, b, c, d) {
    if (d > 0) {
        let decision1 = (-(b) + Math.sqrt(d)) / (a * 2);
        let decision2 = (-(b) - Math.sqrt(d)) / (a * 2);
        return "<br>= " + decision1 + "<br>= " + decision2;
    } else if (d == 0) {
        let decision = (-b) / (a * 2);
        return decision;
    } else {
        return "no decision";
    }
}

//start 
let a = Number(prompt("A: "));
let b = Number(prompt("B: "));
let c = Number(prompt("C: "));

document.write("A= " + a + " B= " + b + " C= " + c + "<br>");
document.write("ax<sup>2</sup>+bx+c=0 <br>");
document.write(a + "x<sup>2</sup>+" + b + "x+" + c + "=0" + "<br><br>");
document.write("Diskriminans is: " + diskriminans(a, b, c) + "<br><br>");
document.write("So there is: " + quadraticEquation(a, b, c, diskriminans(a, b, c)) + "<br>");
