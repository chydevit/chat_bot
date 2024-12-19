document.getElementById("send-button").addEventListener("click", sendMessage);
document
  .getElementById("message-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
document.getElementById("clear-word-button").addEventListener("click", clearChat);


function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    displayMessage(messageText, "sent");
    messageInput.value = "";
    // Simulate receiving a response after 1 second
    setTimeout(() => {
      let responseText;
      switch (messageText.toLowerCase()) {
        case "hi":
        case "hello":
        case "hey":
          responseText = getRandomResponse(["Hi, you", "Hello, you"]);
          break;
        case "how are you?":
          responseText = getRandomResponse([
            "I'm good, thank you!",
            "Doing well, how about you?",
          ]);
          break;
        case "what is your name?":
          responseText = getRandomResponse([
            "I'm a chatbot!",
            "You can call me Chatbot!",
          ]);
          break;
        case "what is artificial intelligence?":
          responseText =
            "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn.";
          break;
        case "what is machine learning?":
          responseText =
            "Machine Learning is a subset of AI that involves training algorithms to learn from and make predictions based on data.";
          break;
        case "what is cloud computing?":
          responseText =
            "Cloud Computing is the delivery of computing services—such as servers, storage, databases, networking, software—over the cloud (internet).";
          break;
        case "what is blockchain?":
          responseText =
            "Blockchain is a decentralized digital ledger used to record transactions across many computers so that the record cannot be altered retroactively.";
          break;
        case "what is cybersecurity?":
          responseText =
            "Cybersecurity involves protecting computer systems, networks, and data from digital attacks, theft, or damage.";
          break;
        case "what is a database?":
          responseText =
            "A database is an organized collection of data, generally stored and accessed electronically from a computer system.";
          break;
        case "what is a server?":
          responseText =
            "A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network.";
          break;
        case "what is a programming language?":
          responseText =
            "A programming language is a formal set of instructions that can be used to produce a wide range of outputs, including software applications.";
          break;
        case "who develop you?":
        case "who develop you":
        case "who are develop you":
        case "who are develop you?":
          responseText = "I was developed by Chy Devit in 2024.";
          break;
        case "what is artificial intelligence?":
        case "what is ai?":
        case "what is ai":
          responseText =
            "Artificial Intelligence (AI) គឺជាការសម្លឹងឃើញនៃការចេះដឹងរបស់មនុស្សក្នុងម៉ាស៊ីនដែលត្រូវបានកម្មវិធីឲ្យគិតនិងរៀន។";
          break;
        case "what is machine learning?":
          responseText =
            "Machine Learning គឺជាផ្នែកមួយនៃ AI ដែលពាក់ព័ន្ធនឹងការបណ្តុះបណ្តាលអាល់កូរីតមដែលរៀនពីនិងធ្វើការទាយមកលើទិន្នន័យ។";
          break;
        case "what is cloud computing?":
          responseText =
            "Cloud Computing គឺជាការផ្តល់សេវាកម្មកំព្យូទ័រ—ដូចជា Servers, Storage, Databases, Networking, Software—តាមរយៈពពក (Internet)។";
          break;
        case "what is blockchain?":
          responseText =
            "Blockchain គឺជាឡេជ័រឌីជីថលដែលមិនមានកណ្ដាលប្រើដើម្បីកត់ត្រាប្រតិបត្តិការនៅលើកុំព្យូទ័រជាច្រើន ដើម្បីឲ្យកំណត់ត្រាអាចមិនត្រូវបានផ្លាស់ប្ដូរត្រឡប់ក្រោយឡើយ។";
          break;
        case "what is cybersecurity?":
          responseText =
            "Cybersecurity មានន័យថាជាការពារបណ្ដាញកុំព្យូទ័រ, ប្រព័ន្ធនិងទិន្នន័យពីការវាយប្រហារ ឬ ការលួចឬការខូចខាត។";
          break;
        case "what is a database?":
          responseText =
            "Database គឺជាការប្រមូលផ្តុំទិន្នន័យដែលមានការរៀបចំដោយឡែក និងត្រូវបានរក្សាទុក និងចូលប្រើយ៉ាងអេឡិចត្រូនិកពីប្រព័ន្ធកុំព្យូទ័រ។";
          break;
        case "what is a server?":
          responseText =
            "Server គឺជាកុំព្យូទ័រ ឬ ប្រព័ន្ធដែលផ្តល់ធនធាន, ទិន្នន័យ, សេវាកម្ម ឬកម្មវិធីទៅកុំព្យូទ័រផ្សេងទៀតដែលត្រូវបានគេហៅថាឃ្លិន (Clients) តាមរយៈបណ្តាញ។";
          break;
        case "what is a programming language?":
          responseText =
            "Programming Language គឺជាការបញ្ជាក់ដ៏ផ្លូវការដែលអាចប្រើប្រាស់ដើម្បីផលិតលទ្ធផលជាច្រើនដូចជា កម្មវិធីទំនាក់ទំនង។";
          break;
        default:
          responseText = "I don't understand that.";
      }
      displayMessage(responseText, "received");
    }, 1000);
  }
}

function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

function displayMessage(text, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.innerText = text;
  document.getElementById("chat-box").appendChild(messageElement);
  document.getElementById("chat-box").scrollTop =
    document.getElementById("chat-box").scrollHeight;
}

function clearChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // This will remove all messages from the chat box
}

function clearWord() {
  const wordInput = document.getElementById("word-input");
  const word = wordInput.value.trim().toLowerCase();
  
  if (word !== "") {
    const messages = document.querySelectorAll("#chat-box .message");
    messages.forEach(message => {
      if (message.innerText.toLowerCase().includes(word)) {
        message.remove();
      }
    });
    wordInput.value = ""; // Clear the input field
  }
}
