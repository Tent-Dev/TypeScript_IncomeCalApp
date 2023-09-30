"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var MONTH_VALUE = 12;
var message = '=============================================\n' +
    '=                   Welcome                 =\n' +
    '=============================================';
console.log(message);
var CalculateMoney = /** @class */ (function () {
    function CalculateMoney(salary, savingPercent) {
        var _this = this;
        this.getDetail = function () {
            var getDetailMsg = '=============================================\n' +
                '=                   Your Detail             =\n' +
                '=============================================\n' +
                "Salary / Months: ".concat(_this.salary, "\n") +
                "Saving (%) / Months: ".concat(_this.savingPercent, "\n");
            console.log(getDetailMsg);
            _this.getSavingPerMonth();
        };
        this.getSavingPerMonth = function () {
            var getSavingAmt = 0;
            var getTotalSavingAmt = 0;
            getSavingAmt = (_this.salary * _this.savingPercent) / 100;
            getTotalSavingAmt = getSavingAmt * MONTH_VALUE;
            var getDetailMsg = '=============================================\n' +
                '=                  Total Saving             =\n' +
                '=============================================\n' +
                "Salary Amount / Year: ".concat(_this.salary * MONTH_VALUE, "\n") +
                "Saving Amount / Months: ".concat(getSavingAmt, "\n") +
                "Saving Amount / Year: ".concat(getTotalSavingAmt, "\n");
            console.log(getDetailMsg);
        };
        this.salary = salary;
        this.savingPercent = savingPercent;
    }
    return CalculateMoney;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function start() {
    rl.question('Please enter your Salary per months: ', function (inputSalary) {
        rl.question('Please enter your saving money percent per months: ', function (inputSavingPercent) {
            if (!inputSalary || !inputSavingPercent) {
                var message_1 = '=============================================\n' +
                    '=        Please fill infomation             =\n' +
                    '=============================================';
                console.log(message_1);
                start();
            }
            else {
                var salary = parseFloat(inputSalary);
                var savingPercent = parseFloat(inputSavingPercent);
                var calculateMoney = new CalculateMoney(salary, savingPercent);
                calculateMoney.getDetail();
            }
        });
    });
}
start();
