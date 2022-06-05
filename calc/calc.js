"use strict"

{
let sait = [];

let x;
let y;
let z;


let verstka = [" 1 - Фиксированная", " 2 - Резиновая", " 3 - Адаптивная"];
prompt("Выбери тип верстки: " + verstka);
let verstka2 = [];

{
    if (verstka == 1)
    verstka2["Фиксированная"] = x,
    x = 1111;
}
{
    if (verstka == 2)
    verstka2["Резиновая"] = x,
    x = 2222;
}
{
    if (verstka == 3)
    verstka2["Адаптивная"] = x,
    x = 5555;
}


let tipSaita = [" 1 - Сайт-визитка", " 2 - Форум", " 3 - Интернет-магазин"];
prompt("Выбери тип сайта: " + tipSaita);
let tipSaita2 = [];

{
    if (tipSaita == 1)
    tipSaita2 = "Сайт-визитка",
    y = 4444;
}
{
    if (tipSaita == 2)
    tipSaita2 = "Форум",
    y = 5555;
}
{
    if (tipSaita == 3)
    tipSaita2 = "Интернет-магазин",
    y = 6666;
}


let design = [" 1 - Свой макет", " 2 - Создание нового"];
prompt("Выбери тип дизайна: " + design);
let design2 = [];

    if (design == 1)
    design2 = "Свой макет",
    z = 0;


    if (design == 2)
    design2 = "Создание нового",
    z = 9999;


alert("Тип верстки: " + verstka2 + " Тип сайта: " + tipSaita2 + " Дизайн: " + design2);

let summa = (x + y + z) * 20;
alert("Стоимость: " + summa + " рублей.");

};

/*
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


let summa = (x + y + z) * 20;

console.log(summa);

alert("Тип верстки: " + verstka + " Тип сайта: " + tipSaita + " Дизайн: " + design);
alert("Стоимость: " + summa + " рублей.");

console.log("Тип верстки: " + verstka + " Тип сайта: " + tipSaita + " Дизайн: " + design);
*/
