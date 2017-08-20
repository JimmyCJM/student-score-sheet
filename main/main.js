
var readline = require("readline");
var scores = [];
module.exports = scores;
var rl = readline.createInterface(process.stdin,process.stdout);
var printScores = require ("./printScores.js");


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

module.export = interaction;

interaction();