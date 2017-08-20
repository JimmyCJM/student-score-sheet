var readline = require("readline");
var scores = [];


var rl = readline.createInterface(process.stdin,process.stdout);

/*
rl.setPrompt(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
rl.prompt();
*/

class Student{
    constructor(name,number,math,chinese,english,program){
        this.name = name;
        this.number = number;
        this.math = math;
        this.chinese = chinese;
        this.english = english;
        this.program = program;
        this.average = (parseInt(math)+parseInt(chinese)+parseInt(english)+parseInt(program))/4;
        this.sum = (parseInt(math)+parseInt(chinese)+parseInt(english)+parseInt(program));
    }
    static isIn(line1) {
        let [math,chinese,english,program] = [0,0,0,0];
        let s = [];
        s = (line1.split(","));
        for(let i=2;i<s.length;i++) {
            switch (s[i].split(":")[0]) {
                case `数学`:
                    math = s[i].split(":")[1];break;
                case `语文`:
                    chinese = s[i].split(":")[1];break;
                case `英语`:
                    english = s[i].split(":")[1];break;
                case `编程`:
                    program = s[i].split(":")[1];break;
            }
        }
        scores.push(new Student(line1.split(",")[0],line1.split(",")[1],math,chinese,english,program));
        console.log(`学生 ${line1.split(",")[0]} 的成绩被添加 `);
    }
}

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

function addStudent(answer) {
    if (answer === `exit`) {
            interaction();
    }
    else if (answer.split(",").length < 7 && answer.split(",").length > 2) {
        Student.isIn(answer);
        interaction();
    }
    else {
        rl.question(`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：或输入'exit'返回至菜单\n`,function (answer) {
            addStudent(answer);
        });
    }
}



function interaction() {
    rl.question(`1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：`,function(line){
        switch (line.trim()){
            case '1':{
                rl.question(`请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：\n`,function (answer) {
                    addStudent(answer);
                })
                break;
            }
            case '2': {
                console.log(``);
                rl.question(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n`, function (answer) {
                    console.log(printScores(answer));
                    interaction();
                });
                break;
            }
            case '3':{
                console.log(`已退出！`);
                rl.close();
                break;
            }
            default:{
                console.log('输入错误，请输入1～3！');
                interaction();
                break;
            }
        }
    });

    rl.on('close',function(){
        process.exit(0);
    });
}

interaction();


