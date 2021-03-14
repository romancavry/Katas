// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest


// У мистера Скруджа есть денежная сумма «P», которую он хочет инвестировать. Прежде чем он это сделает, он хочет знать, сколько лет «Y» эта сумма «P» должна храниться в банке, чтобы она составила желаемую денежную сумму «D».
// Сумма хранится в течение «Y» лет в банке, где проценты «I» выплачиваются ежегодно. После уплаты налогов «Т» за год новая сумма реинвестируется.
// Примечание для налогообложения: налогом облагается не инвестированная основная сумма, а только годовые начисленные проценты.

// principal - деньги
// interest - проценты по вкладу
// tax - налоги
// desired - желаемая сумма

function calculateYears(principal, interest, tax, desired) {
    if (principal === desired) {return 0}

    let clearIncome = 0;
    let incomePerYear = 0;
    let taxPerYear = 0;
    let years = -1;

    for (let i = 0; principal <= desired; i++) {
        years++;
        principal += clearIncome;
        incomePerYear = principal + (principal * interest);
        taxPerYear = incomePerYear - principal;
        clearIncome = taxPerYear * (1 - tax);
    }
    return years;

    // let years = 0;
    // while(principal < desired) {
    //     principal += (principal * interest) * (1 - tax);
    //     years++
    // }
    // return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)) // 3
console.log(calculateYears(1000,0.01625,0.18,1200)) // 14
console.log(calculateYears(1000,0.05,0.18,1000)) // 0

// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00

// After 1st Year --> 50 за год -> налог с этих 50 = 9 => 41 за год
// P = 1041.00
// After 2nd Year --> 52,05 за год -> 42,681 =>
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

// Таким образом, мистеру Скруджу приходится ждать 3 года, пока первоначальная основная сумма долга не достигнет желаемой суммы.

// Ваша задача - выполнить предоставленный метод и вернуть количество лет «Y» в целом, чтобы мистер Скрудж получил желаемую сумму.

// Допущение: Предположим, что желаемый принципал «D» всегда больше, чем начальный принципал. Однако лучше принять во внимание, что если желаемый принципал «D» равен принципалу «P», это должно вернуть 0 лет. 