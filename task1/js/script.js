'use strict';

var money=prompt("Ваш бюджет на месяц?"),
    time=prompt("Введите дату в формате YYYY-MM-DD"),
    expenseItem=prompt("Введите обязательную статью расходов в этом месяце"),
    expenseItemCost=prompt("Во сколько обойдется?");

var appdata={
    budget : money,
    timeData : time,
    expenses: {
        [expenseItem] : expenseItemCost
    },
    optionalExpenses: {},
    income : [],
    savings : false,
};
console.log(appdata);
alert("Бюджет на 1 день: "+appdata.budget/30);