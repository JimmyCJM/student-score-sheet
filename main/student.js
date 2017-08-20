var scores = require("./main.js");

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
module.exports = Student;


//张三,0001,数学:89,语文:89,英语:89,编程:89
//李四,0002,数学:90,语文:90,英语:90,编程:90
