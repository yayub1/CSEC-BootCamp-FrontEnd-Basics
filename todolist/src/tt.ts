
console.log("ayub");
const  a:number[] = [1,2,3,4,5,6];
console.log(a.length);
console.log(a);
a.push(44);
for (let i:number = 0; i < a.length; i++) {
    console.log(a[i] + " ");
    console.log();


}
const modal = document.getElementById("modal");
const add_btn = document.getElementById("add_btn");
const cancelbtn = document.getElementById("cancelbtn");
const ligt = document.getElementById("ligth");
const main = document.getElementById("main");
const body = document.body;

const applybtn = document.getElementById("appbtn");
const noteget = document.getElementById("noteget");
const mainbody = document.getElementById("mainbody");
const modalcard = document.getElementById("modalcard") as HTMLDivElement;

function add():void {
    if (modalcard.style.display === "none") {
        modalcard.style.display = "flex";
    } else {
        modalcard.style.display = "none";
    }
}