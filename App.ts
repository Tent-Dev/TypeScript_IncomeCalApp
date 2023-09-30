import * as readline from 'readline';

const MONTH_VALUE: number = 12;
let message: string = '=============================================\n' +
                      '=                   Welcome                 =\n' +
                      '=============================================';
console.log(message);

class CalculateMoney {

    salary: number;
    savingPercent: number;
    
    constructor(salary: number, savingPercent: number){
        this.salary = salary;
        this.savingPercent = savingPercent;
    }

    getDetail = (): void => {
        let getDetailMsg : string = '=============================================\n' +
                                    '=                   Your Detail             =\n' +
                                    '=============================================\n' +
                                    `Salary / Months: ${this.salary}\n` +
                                    `Saving (%) / Months: ${this.savingPercent}\n`;

        console.log(getDetailMsg);
        this.getSavingPerMonth();
    }

    getSavingPerMonth = (): void => {
        let getSavingAmt: number = 0;
        let getTotalSavingAmt: number = 0;

        getSavingAmt = (this.salary * this.savingPercent) / 100;
        getTotalSavingAmt = getSavingAmt * MONTH_VALUE;

        let getDetailMsg : string = '=============================================\n' +
                                    '=                  Total Saving             =\n' +
                                    '=============================================\n' +
                                    `Salary Amount / Year: ${this.salary * MONTH_VALUE}\n` +
                                    `Saving Amount / Months: ${getSavingAmt}\n` +
                                    `Saving Amount / Year: ${getTotalSavingAmt}\n`;

        console.log(getDetailMsg);
    }
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function start(){
    rl.question('Please enter your Salary per months: ', (inputSalary: string) => {
        rl.question('Please enter your saving money percent per months: ', (inputSavingPercent: string) => {
            const salary =  parseFloat(inputSalary);
            const savingPercent = parseFloat(inputSavingPercent);
            const calculateMoney = new CalculateMoney(salary, savingPercent);

            calculateMoney.getDetail();

        });
    });
}

start();