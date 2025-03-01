let btn = document.querySelector("button");
let textInBtn =document.querySelector("button span");
let voice = document.querySelector("#voice");
let backh1 = document.querySelector("#backh1");

function speak(text){
    let textSpeak=new SpeechSynthesisUtterance(text);
    textSpeak.rate=1;
    textSpeak.pitch=1;
    textSpeak.volume=1;
    window.speechSynthesis.speak(textSpeak);

}

function wishMe(){
    let date= new Date();
    let hours=date.getHours();
    if(hours>0 && hours<12){
        speak("Good Morning Vraj");
    } else if (hours>=12 && hours<=17){
        speak("Good Afternoon Vraj");
    } else if (hours>=18 && hours<=20){
        speak("Good Evening Vraj");
    } else{
        speak("Good Night Vraj");
    };
    console.log(date.getHours());

};

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recogintion =new speechRecognition();
recogintion.onresult=(event)=>{
console.log(event);
console.log(event.results[0][0].transcript);
textInBtn.innerHTML=event.results[0][0].transcript;
takeCommand(event.results[0][0].transcript.toLowerCase());

} 
btn.addEventListener("click",()=>{
    recogintion.start();
    btn.style.display="none";
    voice.style.display="block";
    backh1.innerHTML="AL&nbsp;&nbsp;&nbsp;&nbsp;EX";
 

});
voice.addEventListener("click",()=>{
    recogintion.start();
    // btn.style.display="none";
    // voice.style.display="block";

});

function takeCommand(message){
    textInBtn.innerHTML="click here, what's next ?";
    btn.style.display="block";
    voice.style.display="none";
    backh1.innerHTML="VANP&nbsp;&nbsp;&nbsp;&nbsp;IREX";



    if(message.includes("hello alex")||message.includes("hii alex") || message.includes("hey alex")|| message.includes("hi alex") || message.includes("yes")){
        speak("hello sir,how can i help you?");
    } else if (message.includes("alex who are you") || message.includes("alex tell me about you")){
        speak("you can call me alex, i am an subpart of vanpirex, created by, vraj patel");
    } else if (message.includes("alex open youtube") || message.includes("youtube")|| message.includes("open youtube")){
        window.open("https://www.youtube.com/");
        speak("opening youtube!");
    } else if (message.includes("alex open google") || message.includes("google open")|| message.includes("google")){
        window.open("https://www.google.ca/");
        speak("opening google!");
    } else if (message.includes("alex who is raj")||message.includes("tell me about vraj") || message.includes("tell me about vraj")){
        speak("He is my owner, and I’m thrilled to introduce him to you! He currently resides in Scarborough, Canada, and is pursuing a Computer Programming diploma at Seneca College. He is a kind-hearted, hardworking individual who stays focused and motivated toward his future. Thank you! !");
    } else if (message.includes("alex qualification of raj")||message.includes("alex tell me about raj education") || message.includes("alex whats raj backgroud in qualifacation")){
        speak("Vraj is a disciplined and dedicated individual who achieved 74% in his 10th grade and 69% in his 12th grade in the Science stream with Mathematics. Currently, he is learning Full Stack MERN development. Beyond academics, he is a spiritually inclined person with a strong connection to God. As far as I know, he has been volunteering at the BAPS Organization, a non-profit organization, for the past 8-9 years.!");
    } else if (message.includes("alex who is vivek")||message.includes("alex who is vivek panchal")){
        speak("he is an nice harted person ! , he works at axes medical and he is an rich person who's annual income is 60,000 canadian dollers, i wish he earn more and do best in his feature also wait , i know that he is in searching for his future wife , dammm thats good , best of luck vivek you will get nice one , like me , have a good day vivek");
    } else if (message.includes("alex who is taksh")||message.includes("alex who is taksh patel") || message.includes("alex who is tax")){
        speak("he is an future billinore ! , he works at rova products canada, he is also an rich person who's annual income is 50,000 canadian dollers, i wish he earn more and more and do best in his feature also wait , i know that he is in searching for his future wife and stressed for PR in canada ,don't worry buddy you are gona crack all so be focused and motivated, have a good day taksh");
    } else if (message.includes("alex who is vaibhavi")||message.includes("alex who is vaibhavi Patel ") || message.includes("alex who is vaibhavi")){
        speak("she is an future dentist! , she is an nice hearted girl, who cares for all , and vaibhavi i listen that you love fruits oooooooooooooo, damm !! thats good, keep it up , and also i love food that you preapre, let me tast someday, stay motivated , and workhard you are gona endup with success, have a good day vaibhavi !");
    } else if (message.includes("alex thank you")||message.includes("thanks ") || message.includes("thank you very much")){
        speak("always welcome buddy, anything else i can help you with?");
    } else if (message.includes("alex play chesta") || message.includes("play chester")|| message.includes("alex chesta please")){
        window.open("https://www.youtube.com/watch?v=cTD8WC56bjE&ab_channel=sonisnehal");
        speak("playing chesta!");
    } else if (message.includes("alex play gangstar") || message.includes("alex play gangster") ){
        window.open("https://www.youtube.com/watch?v=V79D8__4W9g&ab_channel=LatinHype");
        speak("playing ganster paradise!");
    } else if (message.includes("alex play tmkoc") || message.includes("alex tmkoc") ){
        window.open("https://www.youtube.com/watch?v=tVNwepUgOVE&ab_channel=TaarakMehtaKaOoltahChashmah");
        speak("playing tmkoc");
    } else if (message.includes("alex play winning speech") || message.includes("alex winning speech please") ){
        window.open("https://www.youtube.com/watch?v=vsWxs1tuwDk&list=RDvsWxs1tuwDk&start_radio=1&ab_channel=KaranAujla");
        speak("playing winning speech by, karan aujhela");
    } else if (message.includes("play 52 bar") || message.includes("alex 52 bar") ){
        window.open("https://www.youtube.com/watch?v=4DfVxVeqk2o&list=RDvsWxs1tuwDk&index=2&ab_channel=KaranAujla");
        speak("playing 52 bar by, karan aujhela");
    } else if (message.includes("alex time please") || message.includes("alex current time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
    } else if (message.includes("alex today's date") || message.includes("alex current day")){
        let day= new Date().toLocaleString(undefined,{month:"short",day:"numeric"})
        speak(day);
    } else {
        let value = message.replace("alex","");
        window.open(`https://www.google.com/search?q=${value}`);
        speak(`that's what i found on google , ${value}`);
    }
}

//---------------------------------------------
