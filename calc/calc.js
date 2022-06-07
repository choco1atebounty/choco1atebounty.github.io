"use strict"
{
let ver1;
let ver2;
let ver3;
let ver4;
let ver5;
let ver6;

let tseni = {

    tseniVerstka:
    [
        ver1 = ["1 - Адаптивная", " 2 - Фиксированная", " 3 - Резиновая"]
    ],

    tseniSait: 
    [
        ver3 = ["1 - Сайт-визитка", " 2 - Форум", " 3 - Интернет-магазин"]
    ],


    tseniDesign: 
    [
    ver5 = ["1 - Свой макет", " 2 - Новый макет"]
    ],

}

let sroki = {
        srokVerstka:
        [
            ver2 = [7, 5, 3]
        ],
    
        srokSait:
        [
            ver4 = [3, 5, 7]
        ],
    
        srokDesign:
        [
        ver6 = [0, 7]
        ],
}


let verstka12 = prompt("Выбери тип верстки: " + ver1);
let nameSait = prompt("Выбери тип сайта: " + ver3);
let nameDesign = prompt("Выбери тип дизайна: " + ver5);

if (verstka12 == this.ver1 + this.ver3 + this.ver5);
alert(" Тип верстки: " + verstka12 + " Тип сайта: " + nameSait + " Тип дизайна: " + nameDesign);



if (verstka12 == this.ver1, this.ver3, this.ver5);
    console.log(verstka12)

ver1[0] = 6666,
ver1[1] = 4444,
ver1[2] = 2222,

ver3[0] = 2222,
ver3[1] = 4444,
ver3[2] = 6666,
    
ver5[0] = 0,
ver5[1] = 6666

// Стоимость
let c, v, b;

{
    if(verstka12 == 1)
{
    c = ver1[0]
}

if(verstka12 == 2)
{
    c = ver1[1]
}

if(verstka12 == 3)
{
    c = ver1[2]
}

if(nameSait == 1)
{
    v = ver3[0]
}

if(nameSait == 2)
{
    v = ver3[1]
}

if(nameSait == 3)
{
    v = ver3[2]
}

if(nameDesign == 1)
{
    b = ver5[0]
}

if(nameDesign == 2)
{
    b = ver5[1]
}
}

let summa = (c + v + b) * 20;

console.log(summa);

let z, y, x;



// Сроки
{
if(verstka12 == 1)
{
    z = ver2[0]
}

if(verstka12 == 2)
{
    z = ver2[1]
}

if(verstka12 == 3)
{
    z = ver2[2]
}

if(nameSait == 1)
{
    y = ver2[0]
}

if(nameSait == 2)
{
    y = ver2[1]
}

if(nameSait == 3)
{
    y = ver2[2]
}

if(nameDesign == 1)
{
    x = ver2[0]
}

if(nameDesign == 2)
{
    x = ver2[1]
}

let srokiObs;
let stoimost;

let faster = prompt("Срочность: 1 - Быстро | 2 - Обычно");

if (faster == 1)
{
    stoimost = (summa * 2)
    srokiObs = (z + x + y) / 2
}

if (faster == 2)
{
    stoimost = summa
    srokiObs = (z + x + y)
}

alert("Сроки выполнения: " + Math.round(srokiObs) + " дней.");
alert (stoimost);
}

}
