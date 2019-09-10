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
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appdata.moneyPerDay = (appdata.budget / 30).toFixed();
        alert("Бюджет на 1 день: "+ appdata.moneyPerDay);
    },
    detectLevel: function() {
        if (appdata.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appdata.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appdata.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процента?");
            
            appdata.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appdata.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет доп. доход? (Перечислите через запятую)", "");
            if (typeof(items)==='string' && typeof(items) != null&& items != '') {
                appdata.income = items.split(", ");
                appdata.income.push(prompt("Может что-то еще?"));
                appdata.income.sort();
            } else {
                i--;
            }
        }
        //alert("Способы доп. заработка: ", );
        appdata.income.forEach(function(item, i) {
            let c=i+1;
            alert("Способы доп. заработка: " + c +" " + item);
        })
    }
};

function display() {
    for(let key in appdata) {
        console.log("Наша программа включает в себя данные: " + key + "=" + appdata[key]);
    }
}
//console.log(appdata);

/*appdata.chooseExpenses();

appdata.detectDayBudget();

appdata.detectLevel();

appdata.checkSavings();

appdata.chooseOptExpenses();

appdata.chooseIncome();*/

    