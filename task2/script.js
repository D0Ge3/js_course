'use strict';

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
    //expenseItem=prompt("Введите обязательную статью расходов в этом месяце"),
    //expenseItemCost=prompt("Во сколько обойдется?");

var appdata={
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false,
};
//console.log(appdata);
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appdata.expenses[a] = b;
    } else {
        i--;//дз готово
    }
}
/*var i=0;
while (i < 2) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appdata.expenses[a] = b;
    } else {
        i=0;//дз готово
    }
}
*/
/*var i = 0;
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appdata.expenses[a] = b;
    } else {
        i=0;//дз готово
    } 
} while (i < 2);*/
appdata.moneyPerDay = appdata.budget / 30
alert("Бюджет на 1 день: "+ appdata.moneyPerDay);

if (appdata.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appdata.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}