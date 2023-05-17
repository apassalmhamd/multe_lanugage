let arabic=document.getElementById("arabic");
let english=document.getElementById("english");
let title1=document.getElementById("title1");
let Welcome=document.getElementById("Welcome-text");
let about=document.getElementById("about");
let abouttext=document.getElementById("about-text");
let contact=document.getElementById("contact");

arabic.onclick= ()=>{
setlanuguge("arabic");

localStorage.setItem("lang","arabic");
};
english.onclick= ()=>{
    setlanuguge("english");
    localStorage.setItem("lang","english");
};
onload=()=>{
    setlanuguge(localStorage.getItem("lang"));
};
function setlanuguge(getlanugage){
if(getlanugage=== "english"){
title1.innerHTML="coder appas";
Welcome.innerHTML="Welcome to website of coder appas";
about.innerHTML=" About US";
abouttext.innerHTML="I am a teacher and a software Developer";
contact.innerHTML="contact us";

}else if(getlanugage==="arabic"){
title1.innerHTML="المبرمج عباس";
Welcome.innerHTML="مرحبا بكم في صفحه المبرمج عباس";
about.innerHTML="حولنا";
abouttext.innerHTML="انا مبرمج مواقع ويب";
contact.innerHTML="اتصل بنا";
}
}