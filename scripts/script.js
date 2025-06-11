// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with class 'nonhighlight'
    const nonhighlightedWords = document.querySelectorAll(".nonhighlight");

    // Apply incremental animation delay for each nonhighlighted word
    nonhighlightedWords.forEach((p, i) => {
        p.style.animationDelay = `${i * 1}s`; // Apply delay for each span (e.g., 0s, 0.5s, 1s, ...)
    });
});
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with class 'highlight'
    const highlightedWords = document.querySelectorAll(".highlight");

    // Apply incremental animation delay for each highlighted word
    highlightedWords.forEach((span, j) => {
        span.style.animationDelay = `${j * 0.7}s`; // Apply delay for each span (e.g., 0s, 0.5s, 1s, ...)
    });
});
var e = document.getElementById("edu");
var s = document.getElementById("spf");
var p = document.getElementById("prj");
var c = document.getElementById("crr");
var bdy = document.getElementById("bdy");
var sk = document.getElementById("skls")
e.style.display = "none"
s.style.display = "none"
c.style.display = "none"
p.style.display = "block"
sk.style.display = "none"
// function changeColor(color){
//     p.style.background=color;
// }
function edutgg() {
    s.style.display = "none"
    c.style.display = "none"
    p.style.display = "none"
    // e.style.display = "none"
    sk.style.display = "none"

    if (e.style.display === "none") {
        // bdy.style.display = "block";s
        e.style.display = "block";
        
    }
    else if (e.style.display === "block"){
        e.style.display = "none";

    }
    else{

    }
}
function skillsgg() {
    e.style.display = "none"
    s.style.display = "none"
    c.style.display = "none"
    p.style.display = "none"
    if (sk.style.display ==="none"){
        sk.style.display ="block"
    }
    else if (sk.style.display === "block"){
        sk.style.display = "none";

    }
    else{
    }
}
function spftgg() {
    e.style.display = "none"
    c.style.display = "none"
    p.style.display = "none"
    sk.style.display = "none"
    if(s.style.display === "none"){
        s.style.display = "block";
        
    }
    else if (s.style.display === "block"){
        s.style.display = "none";

    }
    else{
        
    }
}
function prjtgg() {
    e.style.display = "none"
    c.style.display = "none"
    s.style.display = "none"
    sk.style.display = "none"

    if(p.style.display === "none"){
        p.style.display = "block";
        changeColor('yellow');

        
    }
    else if (p.style.display === "block"){
        p.style.display = "none";

    }
    else{
        
    }
}
function crrtgg() {
    e.style.display = "none"
    s.style.display = "none"
    p.style.display = "none"
    sk.style.display = "none"

    if(c.style.display === "none"){
        c.style.display = "block";
        
    }
    else if (c.style.display === "block"){
        c.style.display = "none";

    }
    else{
        
    }
}
var eee = document.getElementById("more-catogory-lists")
var more_cnt_ner=document.getElementById("menu-content")
eee.style.display = "none";
more_cnt_ner.style.visibility="hidden"
more_cnt_ner.style.display="none"
function toggleMenu() {
    
    if (eee.style.display ==="none"){
        eee.style.display ="block";
        more_cnt_ner.style.display = "block"
    }
    else{
        eee.style.display = "none";
        more_cnt_ner.style.display = "none"
    }
}
