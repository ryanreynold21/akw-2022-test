
const myname = "Aung Kyaw Win"

export function showMyname(){
    return myname;
};

export function showMynameUi(selector){
    document.querySelector(selector).innerHTML = myname;
}