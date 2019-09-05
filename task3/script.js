'use strict';


let money, time;
    
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();
    //expenseItem=prompt("Введите обязательную статью расходов в этом месяце"),
    //expenseItemCost=prompt("Во сколько обойдется?");

let appdata={
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : true,
};
//console.log(appdata);
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appdata.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;//дз готово
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appdata.moneyPerDay = (appdata.budget / 30).toFixed();
    alert("Бюджет на 1 день: "+ appdata.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appdata.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appdata.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel()


function checkSavings() {
    if (appdata.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процента?");
        
        appdata.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appdata.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?");
        
        if ( typeof(a)==='string' && typeof(a) != null
            && a != '' && a.length < 50) {
            console.log("done");
            appdata.optionalExpenses[i+1]=a;
        } else {
            console.log ("bad result");
            i--;//дз готово
        }
    }
}
chooseOptExpenses();