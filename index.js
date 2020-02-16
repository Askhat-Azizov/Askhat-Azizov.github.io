let p = document.querySelector("#example-1");
let input = document.querySelector("#check4");
let bold = document.querySelector("#example-3");
let bolder = false;
bold.oninput = function() {
    bolder = !bolder;
    if(bolder){
       p.style.fontWeight = "bold";
}
    else{
       p.style.fontWeight = "400";
}
};
let italic = document.querySelector("#example-4");
let italicer = false;
italic.oninput = function() {
    italicer = !italicer;
    if(italic){
        p.style.fontStyle = "oblique";
    }
    else{
        p.style.fontStyle = "inherit";
    }
};
let underline = document.querySelector("#example-5");
let underlinier = false;
underline.oninput = function() {
    underlinier = !underlinier;
    if(underlinier){
        p.style.textDecoration = "underline";

    }
    else{
        p.style.textDecoration = "none";
    }
};