"use strict"
{
let x;
let y;
let z;

let verstka = prompt("Выбери тип вёрстки | 1 - Фиксированная | 2 - Резиновая | 3 - Адаптивная");
{
    {
    if (verstka == 1)
    verstka = "Фиксированная",
    x =  2222;
    }

    {
    if (verstka == 2)
    verstka = "Резиновая",
    x = 1111;
    }

    {
    if (verstka == 3)
    verstka = "Адаптивная",
    x = 3333;
    }
}

let tipSaita = prompt("Выбери тип сайта | 1 - Сайт-визитка | 2 - Форум | 3 - Интернет-магазин");

{

    {
        if (tipSaita == 1);
        tipSaita = "Сайт-визитка",
        y = 4444;
    }

    {
        if (tipSaita == 2)
        tipSaita = "Форум",
        y = 5555;
    }

    {
        if (tipSaita == 3)
        tipSaita = "Интернет-магазин",
        y = 6666;
    }


}

let design = prompt("Выбери дизайн: | 1 - Свой макет | 2 - Создание нового");
{

    {
        if (design == 1)
        design = "Свой макет",
        z = 0;
    }

    {
        if (design == 2)
        design = "Создание нового",
        z = 9999;
    }

}


let summa = (z + y + x) * 40;

console.log(summa);

alert("Тип верстки: " + verstka + " Тип сайта: " + tipSaita + " Дизайн: " + design);
alert("Стоимость: " + summa + " рублей.");

console.log("Тип верстки: " + verstka + " Тип сайта: " + tipSaita + " Дизайн: " + design);
}