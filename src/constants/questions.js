
const demoQues =  [{
  "category": "Demo",
  "type": "image",
  "difficulty": "medium",
  "question": `Verify Image correctly ? <br /> <br />
    <img src='https://www.gstatic.com/webp/gallery/1.jpg'>`,
  "correct_answer": "Correct option",
  "incorrect_answers": [
    "Incorrect option",
  ]
},{
  "category": "Demo",
  "type": "video",
  "difficulty": "medium",
  "question": `Verify Video correctly ? <br /> <br /> <video width="550" controls>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
  </video>`,
  "correct_answer": "Yes",
  "incorrect_answers": [
    "No",
  ]
},{
  "category": "Demo",
  "type": "image",
  "difficulty": "medium",
  "question": `Find the differences from image - <br /> <br />
    <img width="550" src='../assets/findthedifference-demo-img.jpg'>`,
  "correct_answer": null,
  "incorrect_answers": []
},{
  "category": "Demo",
  "type": "audio",
  "difficulty": "medium",
  "question": `Listen the audio and Guess? - <br /> <br />
    <audio controls>
      <source src="../assets/demo-audio.mp3" type="audio/mpeg">
    </audio>`,
  "correct_answer": null,
  "incorrect_answers": []
},{
  "category": "Demo",
  "type": "multiple",
  "difficulty": "medium",
  "question": "Select a fun loving team?",
  "correct_answer": "Verse",
  "incorrect_answers": [
    "Verse Dev",
    "Verse All",
    "Verse Automation"
  ]
}];


/** Actual Questions are below */
const compQuests = [
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In computing terms, typically what does CLI stand for?",
    "correct_answer": "Command Line Interface",
    "incorrect_answers": [
      "Common Language Input",
      "Control Line Interface",
      "Common Language Interface"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines. ",
    "correct_answer": "WAN (Wide Area Network) ",
    "incorrect_answers": [
      "URL (Universal Resource Locator) ",
      "LAN (Local Area Network) ",
      "World Wide Web ", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which is not a feature of Object-Oriented Programming in general definitions?",
    "correct_answer": "Duplicate/Redundant data",
    "incorrect_answers": [
      "Efficient Code",
      "Code reusability",
      "Modularity" 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which feature of OOP indicates code reusability?",
    "correct_answer": "Inheritance",
    "incorrect_answers": [
      "Abstraction",
      "Polymorphism",
      "Encapsulation"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The sampling rate, (how many samples per second are stored) for a CD is?",
    "correct_answer": "44.1 kHz",
    "incorrect_answers": [
      "48.4 kHz ",
      "22,050 Hz ",
      "48 kHz "
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which is not an application layer protocol?",
    "correct_answer": "TCP",
    "incorrect_answers": [
      'HTTP', 
      'SMTP', 
      'FTP', 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In which access should a constructor be defined, so that object of the class can be created in any function? ",
    "correct_answer": "Public",
    "incorrect_answers": [
      "Any access specifier will work ",
      "Private",
      "Protected"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Agile Software Development is based on ",
    "correct_answer": "Both Incremental Development & Iterative Development ",
    "incorrect_answers": [
      "Linear Development",
      "Incremental Development ",
      "Iterative Development "
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": '"Kanban" means?',
    "correct_answer": "Todo List ",
    "incorrect_answers": [
      "Signboard",
      "Trello board ",
      "Progress Overview "
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "'.INI' extension refers usually to what kind of file? ",
    "correct_answer": "System file ",
    "incorrect_answers": [
      "Image file ",
      "Hypertext related file ",
      "Image Color Matching Profile file ",
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What does SSL stand for? ",
    "correct_answer": "Secure Socket Layer ",
    "incorrect_answers": [
      "System Socket Layer", 
      "Super Socket Layer",       
      "Secure System Layer", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The first web server was built in: ",
    "correct_answer": "1990 in Geneva, Switzerland ",
    "incorrect_answers": [
      "1985 in Berkeley, California", 
      "1988 in Cambridge, Massachusetts", 
      "1947 in Birmingham, UK", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following word processors came first? ",
    "correct_answer": "Word Star",
    "incorrect_answers": [
      "Word Perfect ",
      "Lotus Notes",
      "MS Word" 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "When an S/MIME signed message has a disclaimer added by the server and is received by a Notes user, which of the following is the result? ",
    "correct_answer": "The signature cannot be verified ",
    "incorrect_answers": [
      "The signature is stripped from the message",
      "The message cannot be read by the recipient",
      "The message cannot be transmitted and is returned to the user", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which database maintains a record of each use of a certifier to register a user or server and also keeps track of certification changes? ",
    "correct_answer": "Certlog.nsf ",
    "incorrect_answers": [
      "Log.nsf",
      "Names.nsf",
      "Admin4.nsf", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In order to register servers and users, the administrator must have access to:  ",
    "correct_answer": "Server id file (server.id)",
    "incorrect_answers": [
      "Administrators ID file.",
      "Certifier ID file",
      "Organization ID file", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The first Domino server setup process will create a few ID files, choose the ID file which is optional in this process: ",
    "correct_answer": "Organizational unit certifier ID (oucert.id)",
    "incorrect_answers": [
      "Server ID (server.id) ",
      "Organization certifier ID (cert.id)", 
      "Domino Administrator ID (user.id)", 
    ]
  },
  {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Cross certification is a two-way process and must happen at symmetric level. ",
    "correct_answer": "False",
    "incorrect_answers": [
      "True", 
    ]
  },
];

const sportQues = [
  {
  "category":"GK : Sports",
  "type":"multiple",
  "difficulty":"medium",
  "question":"What cricketing term denotes a batsman being dismissed with a score of zero?",
  "correct_answer":"Duck",
  "incorrect_answers":[
      "Bye",
      "Beamer",
      "Carry"
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Which period is referred as the Classical Age or Golden Age of Ancient India?",
  "correct_answer":"Gupta Period",
  "incorrect_answers":[
      "Maurya Period",
      "Satwahan Period",
      "Sakya Period",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"When Alexander the great invaded India, the dynasty which was ruling over entire north India was :",
  "correct_answer":"Nanda Dynasty",
  "incorrect_answers":[
      "Gupta Dynasty",
      "Maurya Dynasty",
      "Sakya Dynasty",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Khajuraho temples were built by: ",
  "correct_answer":"The Chandelas",
  "incorrect_answers":[
      "The Panchalas",
      "The Haryanks",
      "Nandas"
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Among the four Vedas, which one is a collection of spells and charms?",
  "correct_answer":"The Atharvaveda",
  "incorrect_answers":[
      "The Sama Veda",
      "The Rig Veda",
      "The Yajur Veda",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Which among the following served as Monsoon Capital of Bombay Presidency during the British Era? ",
  "correct_answer":"Pune",
  "incorrect_answers":[
      "Nagpur",
      "Khandala",
      "Solapur", 
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"One horse power is equal to",
  "correct_answer":"746",
  "incorrect_answers":[
      "748 watts",
      "756 watts",
      "736 watts",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"The tree which sends down roots from its branches to the soil is known as:",
  "correct_answer":"Banyan",
  "incorrect_answers":[
      "Oak",
      "Pine",
      "Palm",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Electric bulb filament is made of",
  "correct_answer":"Tungsten",
  "incorrect_answers":[
      "Copper",
      "Aluminum",
      "Lead",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Sodium metal is kept under:",
  "correct_answer":"Kerosene",
  "incorrect_answers":[
      "Petrol",
      "Alcohol",
      "Water",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"The ratio of width of our National flag to its length is ",
  "correct_answer":"2:3",
  "incorrect_answers":[
      "3:5",
      "2:4",
      "3:4",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"What is the number of 'Rajya Sabha' seats from Maharashtra?",
  "correct_answer":"19",
  "incorrect_answers":[
      "17", "18", "20",
    ]
  },
];


const oddManOutQues = [
  {
  "category":"GK: ODD MAN OUT",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Find the odd number/letters from the given alternatives.",
  "correct_answer":"Driving",
  "incorrect_answers":[
      "Swimming",
      "Sailing",
      "Diving", 
    ]
  },
  {
  "category":"GK: ODD MAN OUT",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Find the odd number / letters / word from the given alternative. ",
  "correct_answer":"Chicken",
  "incorrect_answers":[
      "Snake",
      "Swan",
      "Crocodile",
      "Frog",
    ]
  },
  {
  "category":"GK: ODD MAN OUT",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Find the odd number / letters / word from the given alternative. ",
  "correct_answer":"Seminar",
  "incorrect_answers":[
      "Semicolon",
      "Semifinal",    
      "Semicircle",    
      "Semitone",
    ]
  },
  {
  "category":"GK: ODD MAN OUT",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Find the odd number / letters / word from the given alternative. ",
  "correct_answer":"Sarnath",
  "incorrect_answers":[
      "Plassey",
      "Haldighati",
      "Panipat",
      "Kurukshetra", 
    ]
  },
  {
  "category":"GK: ODD MAN OUT",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Find the odd number / letters / word from the given alternative. ",
  "correct_answer":"Telescope",
  "incorrect_answers":[
      "Transistor",
      "Taperecorder",
      "Telephone",
    ]
  },
  {
  "category":"GK: ODD MAN OUT",
  "type":"multiple",
  "difficulty":"easy",
  "question": "Find the odd number / letters / word from the given alternative",
    "correct_answer": "Minister",
    "incorrect_answers": [
      "King",
      "Queen",
      "Bishop",
      "Knight", 
    ]
  },
];

export {
  demoQues,
  compQuests,
  sportQues,
  oddManOutQues,
}