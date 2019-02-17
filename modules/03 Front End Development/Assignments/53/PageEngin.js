var student = ['name1','name2','name3','name4']
var name_subject = {
    'name1':'subject1',
    'name2':'subject2',
    'name3':'subject3',
    'name4':'subject4'
}
var rand = Math.floor(Math.random() * (student.length-1));


function insertHtml(){

}
function MakeBackGroundBlock(){
    var txt = document.getElementById("text");
    txt.setAttribute('style','opacity: .25;');
}
function Engin() {
    insertHtml();
    makebackgroundblock();
}