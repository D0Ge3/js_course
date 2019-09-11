'use strict';
let startBtn=document.getElementById("start"),
    budgetValue=document.getElementsByClassName("budget-value"),
    daybudgetValue=document.getElementsByClassName("daybudget-value"),
    levelValue=document.getElementsByClassName("level-value"),
    expensesValue=document.getElementsByClassName("expenses-value"),
    optionalexpensesValue=document.getElementsByClassName("optionalexpenses-value"),
    incomeValue=document.getElementsByClassName("income-value"),
    monthsavingsValue=document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue=document.getElementsByClassName("yearsavings-value"),
    
    ExpensesItem=document.getElementsByClassName("expenses-item"),
    expensesItemBtn=document.getElementsByTagName("button")[0],
    optionalExpensesBtn=document.getElementsByTagName("button")[1],
    countBudgetBtn=document.getElementsByTagName("button")[2],
    optionalexpensesItem=document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome=document.querySelector(".choose-income"),
    savings=document.querySelector("#savings"),
    chooseSum=document.querySelector(".choose-sum"),
    choosePercent=document.querySelector(".choose-percent"),
    yearValue=document.querySelector(".year-value"),
    monthValue=document.querySelector(".month-value"),
    dayValue=document.querySelector(".day-value");

    let money, time;
    
expensesItemBtn.setAttribute("disabled", "disabled");
optionalExpensesBtn.setAttribute("disabled", "disabled");
countBudgetBtn.setAttribute("disabled", "disabled");

startBtn.addEventListener('click', function() {
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appdata.budget = money;
    appdata.timeData = time;
    budgetValue[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
let sumExp;
expensesItemBtn.addEventListener('click', function() {
    let sum=0;

    for (let i = 0; i < ExpensesItem.length; i++) {
        let a = ExpensesItem[i].value,
            b = ExpensesItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appdata.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("bad result");
            i--;//дз готово
        }
    };
    expensesValue[0].textContent = sum;
    sumExp = sum;

});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let a = optionalexpensesItem[i].value;
        
        if ( typeof(a)==='string' && typeof(a) != null
            && a != '' && a.length < 50) {
            console.log("done");
            appdata.optionalExpenses[i]=a;
            optionalexpensesValue[0].textContent += appdata.optionalExpenses[i] + ' ';
        } else {
            console.log ("bad result");
            i--;//дз готово
        }
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appdata.budget != undefined) {
    appdata.moneyPerDay = ((appdata.budget - sumExp)/ 30).toFixed();
    daybudgetValue[0].textContent = appdata.moneyPerDay;

        if (appdata.moneyPerDay < 100) {
            levelValue[0].textContent = "Минимальный уровень достатка";
        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            levelValue[0].textContent = "Средний уровень достатка";
        } else if (appdata.moneyPerDay > 2000) {
            levelValue[0].textContent = "Высокий уровень достатка";
        } else {
            levelValue[0].textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue[0].textContent = "Произошла ошибка";
    }
}
);
chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
            if (typeof(items)==='string' && typeof(items) != null&& items != '') {
                appdata.income = items.split(", ");
                incomeValue[0].textContent = appdata.income;
            }
});

savings.addEventListener('click', function() {
    if (appdata.savings == true) {
        appdata.savings = false;
    } else {
        appdata.savings = true;
    }
 });

chooseSum.addEventListener('input', function() {
    if (appdata.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appdata.monthIncome = sum/100/12*percent;
        appdata.yearIncome = sum/100*percent;

        monthsavingsValue[0].textContent = appdata.monthIncome.toFixed(1);
        yearsavingsValue[0].textContent = appdata.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appdata.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appdata.monthIncome = sum/100/12*percent;
        appdata.yearIncome = sum/100*percent;

        monthsavingsValue[0].textContent = appdata.monthIncome.toFixed(1);
        yearsavingsValue[0].textContent = appdata.yearIncome.toFixed(1);
    }
});

let appdata={
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
};
