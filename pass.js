let count=0
let counter=document.getElementById("count")
let savel=document.getElementById("entries")
function increment(){
    count+=1
    counter.innerText=count
}
function save(){
    let countstr=count+" - "
    savel.textContent+=countstr
    counter.textContent=0
    count=0
}