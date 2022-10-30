
const myname = "Aung Kyaw Win"

export function showMyname(){
    return myname;
};

export function showMynameUi(){
    const h1 = document.createElement("h1")
    h1.innerText = myname;
    h1.style.color = "black"
    h1.style.fontSize = "100px"
    document.body.append(hq)
};
