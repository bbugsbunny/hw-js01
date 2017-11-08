const a = Number(prompt('Input a'));
const b = Number(prompt('Input b'));
const c = Number(prompt('input c'));

function solve(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d > 0 && a!==0) {
        var x1 = (-b - Math.sqrt(d)) / (2 * a);
        var x2 = (-b + Math.sqrt(d)) / (2 * a);
        return ['Рівняння має два кореня:' + '<br>' + 'x1 = ' + x1 + '<br>' + 'x2 = ' + x2];
    }
    else if (d == 0 && a!==0) {
        var x = -b / (2 * a);
        return ['Рівняння має один корінь:' + '<br>' + 'x = ' + x];
    }
    else if (d < 0 && a!==0) {
        var x3 = -b / (2 * a);
        var x31 = Math.sqrt(-d) / (2 * a);
        var x4 = -b / (2 * a);
        var x41 = Math.sqrt(-d) / (2 * a);
        return ['Рівняння дійсних коренів не має, але існують два комплексних спряжених кореня:' + '<br>' + 'x1 = ' + x3 + '+' + x31 + 'i' + '<br>' + 'x2 = ' + x4 + '-' + x41 + 'i'];
    }
    else if (a==0 && b!==0) {
        var x5 = -c/b;
        return ['При а=0 рівняння не є квадратичним i має один корінь:' + '<br>' + 'x = ' + x5];
    }
    else {
        return "Немає розв'язку";
    }
}
document.write(solve(a, b, c));
