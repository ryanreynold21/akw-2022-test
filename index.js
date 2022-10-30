
const myname = "Aung Kyaw Win"

export function showMyname(){
    return myname;
};

export function showMynameUi(){
    const h1 = document.createElement("h1")
    h1.innerText = myname;
    h1.style.color = "black"
    h1.style.fontSize =  100+"px";
    h1.style.position = "fixed"
    h1.style.top = 0;
    document.body.append(h1);
};
