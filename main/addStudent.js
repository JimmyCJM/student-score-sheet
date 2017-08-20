
var Student = require("./student.js");

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

module.exports = addStudent;