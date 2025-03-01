const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".body-chat");
const sendMessageButton = document.querySelector("#send-message");
const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const ul = document.querySelector("#ul");

// API SETUP
const apiKey="AIzaSyAk9GxiOT6LQFtko2A2lsI8bDawz9Lw_Mk";
const apiUrl= `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
main.addEventListener("mousemove",(event)=>{
    cursor.style.left = event.clientX - 10 + "px";
    cursor.style.top = event.clientY - 10 + "px";

})

const generateBotResponse = async (userMessage)=>{
    const resquestOption={
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            contents: [{
                parts: [{ text: userMessage }]
            }]

        })

    }

    try{
        const response = await fetch(apiUrl,resquestOption);
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);
        console.log(data);
        console.log(data.candidates[0].content.parts[0].text);
        return data.candidates[0].content.parts[0].text;
    }
    catch(error){
        console.log(error);
    }
};


const createMessageElement = (content,...classes) =>{
    const div = document.createElement("div");

    div.classList.add("message",...classes);
    div.innerHTML=content;
    return div;

};

messageInput.addEventListener("keydown",(e)=>{
    const userMessage = e.target.value.trim();
 
    if (e.key === "Enter" && !e.shiftKey && userMessage) {
        e.preventDefault(); // Prevents new line in textarea
        handleOutGoingMessage(userMessage);

    }});

const handleOutGoingMessage = async (userMessage)=> {

    // userData.message = messageInput.value.trim();
    const messageContent = `<div class="message-text"> ${userMessage} </div>`;
    const outGoingMessageDiv = createMessageElement(messageContent,"user-message");
    chatBody.appendChild(outGoingMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the latest message

    messageInput.value = ""; // Clear input field after sending

        /// settimeout for an boot to appear in within the second the user throw an question

        setTimeout( async ()=>{
            const messageContent2 =`<div class="message bot-message thinking"><svg class="boot-aavtar"xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
        </svg>
        <div class="message-text">
            <div class="thinking-indicator">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>`
        
   
            const incomingMessageDiv = createMessageElement(messageContent2,"bot-message", "thinking");
            // incomingMessageDiv.querySelector(".message-text").textContent = generateBotResponse();//Api response should be here';
            chatBody.appendChild(incomingMessageDiv);
                                   // Fetch API response and update the message
    const botResponse = await generateBotResponse(userMessage); // Pass userMessage
    incomingMessageDiv.innerHTML = `<div class="message-text">${botResponse}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
    const list = document.createElement("li");
    list.innerHTML=`<li>${userMessage}....</li>`;
    ul.appendChild(list);
    console.log(ul);
    // gettingLink(list);
       
        },200);
 
};

// click button - data sender
sendMessageButton.addEventListener("click",(e)=>{

        // messageInput.value
    
        handleOutGoingMessage(messageInput.value);

        
        
    });
// function gettingLink(list){
//     const li = document.querySelectorAll("ul li");

//     for (li of lis){
//         console.log(lis);
//     }
// }