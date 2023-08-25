
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

/** Next Round block*/
const nextRound = (info) => {
  return {
    "category":"next",
    "type":"image",
    "difficulty":"easy",
    "question": info,
    "correct_answer": null,
    "incorrect_answers": []
  };
}

/** Actual Questions are below */
// Technical
const round1Ques = [
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of these packages contains the exception Stack Overflow in Java?",
    "correct_answer": "java.lang",
    "incorrect_answers": [
      "java.system",
      "java.io",
      "java.util"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which exception is thrown when java is out of memory?",
    "correct_answer": "MemoryFullException",
    "incorrect_answers": [
      "MemoryError",
      "OutOfMemoryError",
      "MemoryOutOfBoundsException"
    ]
  },  {
    "category": "Programming",
    "type": "image",
    "difficulty": "medium",
    "question": `What will be the output of the following Java program?
      <img width="400" src='../assets/round/Prog_Q1.jpg'>`,
    "correct_answer": "1 2 5 8",
    "incorrect_answers": [
      "2 1 8 5",
      "1 5 8 2",
      "2 8 5 1"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Select the command which is used to compare the contents of a table with expected values.",
    "correct_answer": "verifyTable",
    "incorrect_answers": [
      "verifyTables",
      "verifyTableData",
      "verifyTableCell"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which process will be used in JavaScript to find an element?",
    "correct_answer": "By DOM query",
    "incorrect_answers": [
      "BY CSS sector",
      "BY XPath query",
      "All of these"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": " What is the basic difference between JavaScript and Java?",
    "correct_answer": "Functions are values, and there is no hard distinction between methods and fields",
    "incorrect_answers": [
      "Functions are considered as fields",
      "Variables are specific",
      "There is no difference"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which is a possible way of finding all the img elements in the document?",
    "correct_answer": "document.images[]",
    "incorrect_answers": [
      'document(images)', 
      'document(img)', 
      "doc(img)"
    ]
  },
  {
    "category": "Programming",
    "type": "image",
    "difficulty": "medium",
    "question": `What will be the output of the following JavaScript code?
      <img width="550" src='../assets/round/Prog_Q2.jpg'>`,
    "correct_answer": "13.4",
    "incorrect_answers": [
      "13",
      "13.3714",
      "13.3"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which keyword must be used to get a more granular insight into the memory usage?",
    "correct_answer": "verbose",
    "incorrect_answers": [
      "verb",
      "granule",
      "gran"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the purpose of the event onAirEvent?",
    "correct_answer": "Content is played",
    "incorrect_answers": [
      "Content is transferred",
      "Both Content is played and transferred",
      "Content is changed"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the purpose of the mimeTypes property of a plug-in entry?",
    "correct_answer": "Contains MIME types",
    "incorrect_answers": [
      "Contains MIME properties",
      "Contains MIME sizes",
      "Contains MIME methods"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The different variant of Date() constructor to create date object is/are ____ <br> i. new Date(date), <br> ii. new Date(milliseconds), <br> iii. new Date(date string), <br> iv. new Date(year, month, date[hour, minute, second, millisecond])",
    "correct_answer": "ii, iii and iv only",
    "incorrect_answers": [
      "i, ii and iii only",
      "i, ii and iv only",
      "i, ii, iii and iv"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following symbol is used to declare the preprocessor directives in C++?",
    "correct_answer": "#",
    "incorrect_answers": [
      "$", 
      "^",
      "*"
    ]
  },
  {
    "category": "Programming",
    "type": "image",
    "difficulty": "medium",
    "question": `What will be the output of the following C++ program?
      <img width="350" src='../assets/round/Prog_Q3.jpg'>`,
    "correct_answer": "Error",
    "incorrect_answers": [
      "Segmentation fault",
      "Value of a: 5",
      "Value of a: 10"
    ]
  },
  {
    "category": "Programming",
    "type": "image",
    "difficulty": "medium",
    "question": `What will be the output of the following C++ code snippet?
      <img width="350" src='../assets/round/Prog_Q4.jpg'>`,
    "correct_answer": "10   2.5",
    "incorrect_answers": [
      "10.0   5",
      "10.0   5.0",
      "5.0  2.5"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "How structures and classes in C++ differ?",
    "correct_answer": "In Structures, members are public by default whereas, in Classes, they are private by default",
    "incorrect_answers": [
      "Structures by default hide every member whereas classes do not", 
      "Structures cannot have private members whereas classes can have",
      "In Structures, members are private by default whereas, in Classes, they are public by default" 
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "When a copy constructor is called?",
    "correct_answer": "All of the mentioned",
    "incorrect_answers": [
      "When an object of the class is returned by value",
      "When an object of the class is passed by value to a function",
      "When an object is constructed based on another object of the same class"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Pick out the correct statement for error handling alternatives.",
    "correct_answer": "Use the stack",
    "incorrect_answers": [
      "Terminate the program",
      "Exit from the block",
      "Use the queue" 
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following is the correct syntax of declaring a complex number? ",
    "correct_answer": "complex<type> variable_name; ",
    "incorrect_answers": [
      "complex variable_name<type>;",
      "Complex<type> variable_name;", 
      "Complex variable_name<type>;"
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which alternative can replace the throw statement?",
    "correct_answer": "return",
    "incorrect_answers": [
      "for",
      "break",
      "exit" 
    ]
  },
  {
    "category": "Programming",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What are the disadvantages if use return keyword to return error codes? ",
    "correct_answer": "All of the mentioned",
    "incorrect_answers": [
      "You have to handle all exceptional cases explicitly ",
      "Your code size increases dramatically", 
      "The code becomes more difficult to read"
    ]
  },
];
// Bollywood
const round3Ques = [
  {...nextRound('NEXT round: <br> <br> Read question properly before buzz.... ;) <br> <br> Ready?')},
  {
    "category":"Bollywood",
    "type":"image",
    "difficulty":"medium",
    "question": `Identify this famous actor - <img width="550" src='../assets/round/pahchan-ak.png'>`,
    "correct_answer": null,
    "incorrect_answers": []
  },{
    "category":"Bollywood",
    "type":"image",
    "difficulty":"medium",
    "question": `Identify this famous actor - <img width="550" src='../assets/round/pahchan-jimmy.png'>`,
    "correct_answer": null,
    "incorrect_answers": []
  },{
    "category":"Bollywood",
    "type":"image",
    "difficulty":"medium",
    "question": `Identify this famous actor - <img width="550" src='../assets/round/pahchan-fardeenK.png'>`,
    "correct_answer": null,
    "incorrect_answers": []
  },{
    "category":"Bollywood",
    "type":"image",
    "difficulty":"medium",
    "question": `Identify this superhit movie - <img width="550" src='../assets/round/identify-movie-paheli.png'>`,
    "correct_answer": null,
    "incorrect_answers": []
  },{
    "category":"Bollywood",
    "type":"image",
    "difficulty":"medium",
    "question": `Identify this famous actor - <img width="550" src='../assets/round/pahchan-aish.png'>`,
    "correct_answer": null,
    "incorrect_answers": []
  },
  {...nextRound('NEXT round: <br> <br> Identify the movie from famous dialogue! <br> <br> Ready?')},
  {
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Identify the movie from famous dialogue - <br>
    "Pata hai, yahan se bahut door, galat aur sahi ke paar, ek maidan hai, main vahaan milunga tujhe"`,
    "correct_answer": "Rockstar",
    "incorrect_answers": [
      "Zindagi Na Milegi Dobara",
      "Yeh Jawaani Hai Deewani",
      "Its not from any movie",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Identify the movie from famous dialogue - <br>
    "Keh diya na. Bas, keh diya"`,
    "correct_answer": "Kabhi Khushi Kabhi Gham",
    "incorrect_answers": [
      "Bhagban",
      "Kuch Kuch Hota Hai",
      "Its not from any movie",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Identify the movie from famous dialogue - <br>
    "Itna susu laate kaha se ho tum? Hamare pas to nahi hai. Ye taalab tumne bhara hai?"`,
    "correct_answer": "Bhool Bhulaiya",
    "incorrect_answers": [
      "Bhool Bhulaiya 2",
      "Hera Pheri",
      "Phir Hera Pheri",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Identify the movie from famous dialogue - <br>
    "Rahuuuul… Take a chill pill"`,
    "correct_answer": "Kabhi Khushi Kabhi Gham",
    "incorrect_answers": [
      "Kal Ho Naa Ho",
      "Kuch Kuch Hota Hai",
      "Dil Toh Pagal Hai",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Identify the movie from famous dialogue - <br>
    "Yeh zindagi bohot lambi hai aur hamare paas waqt bahut kam"`,
    "correct_answer": "Hum Tum",
    "incorrect_answers": [
      "Pushpa",
      "Kal Ho Naa Ho",
      "Dil Toh Pagal Hai",
    ]
  }, // complete lyrics
  {...nextRound('NEXT round: <br> <br> Complete the song lyrics.... <br> <br> Ready?')},
  {
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Jis ko chaahey paagal kar de apne husn ke jaadu se..."
    <img width="550" src='../assets/round/song-jis-ko.png'>`,
    "correct_answer": "Iske lambe lambe, kaale kaale, naagin se baal ray kee, ankhiyon se goli maare",
    "incorrect_answers": [
      "Iske kaale kaale, lambe lambe, naagin se baal ray kee, ankhiyon se goli maare",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Chupke se, chori se, milne woh aaya..."
    <img width="550" src='../assets/round/song-chupke-se.png'>`,
    "correct_answer": "Na na jo kee maine, toh gussa dikhaaya",
    "incorrect_answers": [
      "Na na jo kee maine, toh nakhra dikhaaya",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Channa ve ghar aa jaa ve, dhola ve ghar aa jaa ve..."
    <img width="550" src='../assets/round/song-channa-ve.png'>`,
    "correct_answer": "Teriya udika vich muk challe saal, aaja takdi de rog muka jaa ve",
    "incorrect_answers": [
      "Teriya udika vich muk challe saah, aaja ishq de rog muka jaa ve",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Shaam sawere teri yaadein aati hain..."
    <img width="550" src='../assets/round/song-shaam-sawere.png'>`,
    "correct_answer": "Aa ke dil ko mere yun tadpati hain",
    "incorrect_answers": [
      "Ye dil ko mere yun hi tarsati hain",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Ye tikhi tikhi nazrein, tu ru ru, tu ru ru..."
    <img width="550" src='../assets/round/song-turu-ru.png'>`,
    "correct_answer": "Yeh hirni jaisi chaal",
    "incorrect_answers": [
      "Yeh gorey gorey gaal",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Aaja na chhoole meri chunari sanam, kuchh na main boloon tujhe meri kasam..."
    <img width="550" src='../assets/round/song-aaja-na.png'>`,
    "correct_answer": "Aayi jawaani sar pe mere, tere pe kya karun jawaani pe rehem",
    "incorrect_answers": [
      "Aayi jawaani sar pe mere, kaise mein na karoon uspe rehem",
    ]
  },{
    "category":"Bollywood",
    "type":"multiple",
    "difficulty":"medium",
    "question": `Complete the song lyrics by matching them with the right option. - <br>
    "Ab mujhe raat din, tumhara hi khayaal hai..."
    <img width="550" src='../assets/round/song-ab-mujhe.png'>`,
    "correct_answer": "Kya kahun pyaar mein, deewano jaisa haal hai",
    "incorrect_answers": [
      "Kya karun yaar mein, deewano jaisa haal hai",
    ]
  }, // Audio round lyrics
  {...nextRound('NEXT round: <br> <br> Guess movie from the AUDIO .... <br> <br> Ready? It will auto play...')},
  {
    "category":"Bollywood",
    "type":"audio",
    "difficulty":"medium", // Hum aapke hai kon
    "question": `Listen the audio and Guess the movie? - <br /> <br />
      <audio controls>
        <source src="../assets/11/Hindi3.mp3" type="audio/mpeg">
      </audio>`,
    "correct_answer": null,
    "incorrect_answers": []
  },{
    "category":"Bollywood",
    "type":"audio",
    "difficulty":"medium",// Munna bhai MBBS
    "question": `Listen the audio and Guess the movie? - <br /> <br />
      <audio controls>
        <source src="../assets/11/Hindi5.mp3" type="audio/mpeg">
      </audio>`,
    "correct_answer": null,
    "incorrect_answers": []
  },{
    "category":"Bollywood",
    "type":"audio",
    "difficulty":"medium",// Qayamat se Qayamat Tak
    "question": `Listen the audio and Guess the movie? - <br /> <br />
      <audio controls>
        <source src="../assets/11/Hindi4.mp3" type="audio/mpeg">
      </audio>`,
    "correct_answer": null,
    "incorrect_answers": []
  }
];
// GK
const round2Ques = [
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Which company is set to offer multipurpose drones for strategic operations of the Indian Army?",
  "correct_answer":"Garuda Aerospace",
  "incorrect_answers":[
      "Pixel Aerospace",
      "Bharat Dynamics Ltd",
      "Bharat Electronics Ltd", 
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Which organisation manufacturers Tejas Mark-2 Fighter Jets?",
  "correct_answer":"HAL",
  "incorrect_answers":[
      "DRDO",
      "BEL",
      "BDL",
    ]
  },
  {
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Indian Army, along with which institution flight-tested Quick Reaction Surface to Air Missile (QRSAM) system?",
  "correct_answer":"DRDO",
  "incorrect_answers":[
      "ISRO",
      "BDL",    
      "HAL",
    ]
  },{
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Which country tested the Minuteman III intercontinental ballistic missile?",
  "correct_answer":"USA",
  "incorrect_answers":[
      "Japan",
      "Israel",
      "France",
    ]
  },{
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Kibithu military garrison, which was named after General Bipin Rawat, is located in which state/UT?",
  "correct_answer":"Arunachal Pradesh",
  "incorrect_answers":[
      "Uttarakhand",
      "Ladakh",
      "Punjab",
    ]
  },{
  "category":"GK",
  "type":"multiple",
  "difficulty":"easy",
  "question": "Which Indian Armed Force conducted the 'Parvat Prahar' Exercise?",
    "correct_answer": "Indian Army",
    "incorrect_answers": [
      "Indian Air Force",
      "Indian Navy",
      "Indo-Tibetan Border Police",
    ]
  },{
  "category":"GK",
  "type":"multiple",
  "difficulty":"medium",
  "question":"Indian Army recently installed India's first Avalanche Monitoring Radar in which state/UT?",
  "correct_answer":"Sikkim",
  "incorrect_answers":[
      "Ladakh",
      "Arunachal Pradesh",
      "Jammu and Kashmir",
    ]
  },{
    "category":"GK",
    "type":"multiple",
    "difficulty":"medium",
    "question":"Zojila pass, which was seen in the news recently, is located in which state/ UT?",
    "correct_answer":"Ladakh",
    "incorrect_answers":[
        "Sikkim",
        "Arunachal Pradesh",
        "West Bengal",
      ]
    },{
    "category":"GK",
    "type":"multiple",
    "difficulty":"medium",
    "question":"Which Indian armed force has registered 'Intellectual Property Rights (IPR)' of its new camouflage pattern uniform?",
    "correct_answer":"Indian Army",
    "incorrect_answers":[
        "Indian Coast Guard",
        "Indian Navy",
        "Indian Air Force",
      ]
    },{
    "category":"GK",
    "type":"multiple",
    "difficulty":"medium",
    "question":"'Samudra Shakti-23' is a bilateral exercise conducted between India and which country?",
    "correct_answer":"Indonesia",
    "incorrect_answers":[
        "France",
        "Sri Lanka",
        "Israel",
      ]
    }, {
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":" Which launcher is used for Chandrayaan-3?",
      "correct_answer":"GSLV-Mk3",
      "incorrect_answers":[
        "GSLV",
        "LVSM",
        "PSLV",
      ]
    }, {
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"What was the launch date for Chandrayaan 3 mission?",
      "correct_answer":"14 July 2023",
      "incorrect_answers":[
        "13 July 2023",
        "24 July 2023",
        "15 July 2023",
      ]
    }, {
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"The Chandrayaan 3 mission's rover is known as - ",
      "correct_answer":"Pragyaan",
      "incorrect_answers":[
        "Dhruv",
        "Bheem",
        "Vikram",
      ]
    }, {
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"The mission life of the Lander and Rover equal to - ",
      "correct_answer":"14 Earth Days",
      "incorrect_answers":[
        "24 Earth Days",
        "16 Earth Days",
        "12 Earth Days",
      ]
    }, {
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"What is that one thing in Chandrayaan 3 and not in Chandrayaan 2?",
      "correct_answer":"(r). Laser Doppler Velocimeter (LDV)",
      "incorrect_answers":[
        "(p). Laser-based Interferometry",
        "(q). Ultrasonic Doppler methods",
        "All p, q, r",
      ]
    }, {
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"Which of the following is missing in Chandrayaan 3?",
      "correct_answer":"Orbiter",
      "incorrect_answers":[
        "Rover",
        "Lander",
      ]
    },{
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"The mission objectives of Chandrayaan-3?",
      "correct_answer":"All p, q, r",
      "incorrect_answers":[
        "(p). To demonstrate Rover roving on the moon",
        "(q). To demonstrate a Safe and Soft Landing on Lunar Surface",
        "(r). To conduct in-situ scientific experiments",
      ]
    },{
      "category":"GK",
      "type":"multiple",
      "difficulty":"medium",
      "question":"How much did the Chandrayaan-3 mission cost?",
      "correct_answer":"$74 Million",
      "incorrect_answers":[
        "$65 Million",
        "$72 Million",
        "$58 Million",
      ]
    },
];
// Rapid fire
const round4Ques = [{
  ...nextRound(`
  <style>.round { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } table.round td, table.round th { border: 1px solid #dddddd; text-align: left; padding: 8px; } .bonus { background-color: green; } .penelty { background-color: red; }</style>
  <br><i>Bonus Round - Rapid fire</i><br>(5 Ques for each team)<br>
  <br><table class='round'>
  <tr> <th>Answers</th> <th>(+ or -) Points</th> <th>Note</th></tr>
  <tr class='bonus'> <td>5 Ans</td> <td>+50 Points</td> <td>Bonus</td> </tr>
  <tr> <td>4 Ans</td> <td>+10 Points</td> <td></td> </tr>
  <tr> <td>3 Ans</td> <td>&nbsp;&nbsp;&nbsp; 0 Point </td> <td>&nbsp;&nbsp;&nbsp; - </td> </tr>
  <tr> <td>2 Ans</td> <td>-10 Points</td> <td></td> </tr>
  <tr class='penelty'> <td>1 or 0 Ans</td> <td>-30 Points</td> <td> Loss </td> </tr>
  </table><br> Ready!?! <br>`)
  }, {...nextRound('Get Ready: <br> <br> Team 1')},
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "If a grasshopper is eaten by a frog, then the energy transfer will be from ?",
    "correct_answer": "primary consumer to secondary consumer",
    "incorrect_answers": [
      "secondary consumer to primary consumer ",
      "producer to primary consumer ",
      "producer to decomposer "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which group of organisms are not constituents of a food chain ?",
    "correct_answer": "Wolf, grass, snake, tiger ",
    "incorrect_answers": [
      "Frog, snake, eagle, grass, grasshopper",
      "Plankton, man, fish, grasshopper ",
      "Grass, lion, rabbit "
    ]
  }, 
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "An ecosystem includes ?",
    "correct_answer": "both living organisms and non-living objects ",
    "incorrect_answers": [
      "non-living objects ",
      "all living organisms ",
      "sometimes living organisms and sometimes non-living objects "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Food web is ?",
    "correct_answer": "Interlinked food chains ",
    "incorrect_answers": [
      "Display of different food items ",
      "Using food items for a fashion dress",
      "Food served through websites "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": " Trophic level in an ecosystem represents ?",
    "correct_answer": "energy levels",
    "incorrect_answers": [
      "salt level ",
      "water level ",
      "oxygen level "
    ]
  },  {...nextRound('Get Ready: <br> <br> Team 2')},
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following is biodegradable ?",
    "correct_answer": "Leather belts ",
    "incorrect_answers": [
      'Iron nails ', 
      'Silver foil ', 
      'Plastic mugs '
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Excessive exposure to ultraviolet radiation causes ?",
    "correct_answer": "cancer of skin ",
    "incorrect_answers": [
      "jaundice",
      "damage to the lungs ",
      "inflammation of liver "
    ]
  },  
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Acid rain is caused by the oxides of ?",
    "correct_answer": "sulphur and nitrogen ",
    "incorrect_answers": [
      "sulphur only ",
      "nitrogen only ",
      "carbon "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "First link in any food chain is usually green plants because ?",
    "correct_answer": "hey alone have the capacity to synthesise food using sunlight ",
    "incorrect_answers": [
      "there are more herbivores than carnivores ",
      "they are fixed at one place in the soil ",
      "they are widely distributed "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which one of the following will undergo fastest bio-degradation ?",
    "correct_answer": "Mango pulp ",
    "incorrect_answers": [
      "Mango peel ",
      "Wood",
      "Mango seed"
    ]
  },  {...nextRound('Get Ready: <br> <br> Team 3')},
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The depletion of the ozone layer causes ?",
    "correct_answer": "increased UV radiations",
    "incorrect_answers": [
      "acid rain ", 
      "earthquakes",       
      "global warming"
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Accumulation of non- biodegradable pesticides in different trophic levels is called ?",
    "correct_answer": "Biological magnification ",
    "incorrect_answers": [
      "Biological deposition ",
      "Biological concentration ",
      "Biological degradation "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which one of the following pairs belong to the category of primary consumers?",
    "correct_answer": "Grasshoppers & cattle",
    "incorrect_answers": [
      "Water beetles & fish ",
      "Snake and frog ",
      "Eagle and snake "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In an ecosystem, herbivores represent ?",
    "correct_answer": "primary consumers ",
    "incorrect_answers": [
      "decomposers",
      "secondary consumers ",
      "producers"
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following is a logical sequence of food chain ?",
    "correct_answer": "producer -> consumer -> decomposer ",
    "incorrect_answers": [
      "decomposer -> producer -> consumer ",
      "consumer -> producer -> decomposer ",
      "producer -> decomposer -> consumer "
    ]
  },  {...nextRound('Get Ready: <br> <br> Team 4')},
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following chemicals causes depletion of the ozone layer ?",
    "correct_answer": "Chloro fluoro carbon ",
    "incorrect_answers": [
      "Carbon monoxide  ",
      "Methane", 
      "Carbon tetrachloride "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the two in the following sets belong to the same trophic level ?",
    "correct_answer": "Frog ; Lizard ",
    "incorrect_answers": [
      "Hawk ; Rat ",
      "Goat; Spider ",
      "Grass; Grasshopper "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "	In the garden ecosystem, which of the following are producers ?",
    "correct_answer": "Grasses",
    "incorrect_answers": [
      "Rabbits",
      "Snakes",
      "Insects"
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What will happen if all the deer are killed in the given food chain Grass -> Deer -> Lion ?",
    "correct_answer": "The population of lions decreases and grass increases.  ",
    "incorrect_answers": [
      "The population of lions remains unchanged. ",
      "The population of lions increases. ",
      "The population of grass decreases. "
    ]
  },
  {
    "category": "RapidFire",
    "type": "multiple",
    "difficulty": "medium",
    "question": "A food chain comprising birds, green plants, fish and man. The concentration of harmful chemical entering the food chain will be maximum in ?",
    "correct_answer": "man",
    "incorrect_answers": [
      "fish ",
      "birds", 
      "green plants  "
    ]
  }
];

export {
  demoQues,   // demo round
  round1Ques, // round 1
  round2Ques, // round 2
  round3Ques, // round 3
  round4Ques, // round 4
}