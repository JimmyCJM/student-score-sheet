
var scores = require("./main.js");

function printScores(number){
    let printIfo = [];
    number = number.split(",");
    scores.forEach(value => {
        for (let i = 0; i < number.length; i++) {
            if (value.number === number[i]) printIfo.push(value);
        }
    })
    let [sumScores,sum,count] = [0,[],0];
    let print = `成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================`;
    for (let i=0;i<printIfo.length;i++){
        print += `\n${printIfo[i].name}|${printIfo[i].math}|${printIfo[i].chinese}|${printIfo[i].english}|${printIfo[i].program}|${printIfo[i].average}|${printIfo[i].sum}`;
        sumScores += printIfo[i].sum;
        sum.push(printIfo[i].sum);
        count++;
    }
    sum = sum.sort((a,b)=>a-b);
    print += `\n========================
全班总分平均数：${parseInt(sumScores)/count}
全班总分中位数：${(parseInt(sum[parseInt(sum.length/2)])+parseInt(sum[parseInt((sum.length-1)/2)]))/2}`;
    return print;
}


module.exports = printScores;