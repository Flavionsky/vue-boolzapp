function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function todayDate(){
  let today = new Date();
  let dates = today.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit'
  });
  return (dates);

};

//attivazione di vue tools web
Vue.config.devtools = true;
var app = new Vue({
  el: '#app',
  data: {
    myUser:{
      name:"Flavio",
      url:"img/avatar_io.jpg"
    },
    users:[
      {
        name: "Matteo",
        url: "img/avatar_5.jpg",
        id: 0,
        lastseen:"22/10/2020 10:30",
        messages:[
          {
            sentdate: "19.15",
            text: "Buonasera, come ti senti oggi?",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
          sentdate: "19.30",
            text: "Buonasera, tutto bene grazie!",
            direction: "send",
            hiddenDisplay : "none"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received",
             hiddenDisplay : "none"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received",
             hiddenDisplay : "none"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received",
             hiddenDisplay : "none"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received",
             hiddenDisplay : "none"
          }
        ]
      },
      {
        name: "Fabio",
        url: "img/avatar_4.jpg",
        id: 1,
        lastseen:"26/10/2020 11:43",
        messages:[
          {
            sentdate: "19.30",
            text: "Ciao sono Fabio",
            direction: "received"
          },
          {
            sentdate: "19.35",
            text: "ciao, piacere di conoscerti!",
            direction: "send"
          },
          {
            sentdate: "20.03",
            text: "piacere, e tu?",
            direction: "received"
          },
          {
            sentdate: "21.07",
            text: "Sono Flavio :)",
            direction: "send"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received"
          }
        ]
      },
      {
        name: "Samuele",
        url: "img/avatar_1.jpg",
        id: 2,
        lastseen:"01/11/2020 23.12",
        messages:[
          {
            sentdate: "10.30",
            text: "hai portato a spasso il cane?",
            direction: "send"
          },
          {
            sentdate: "10.31",
            text: "ricordati di dargli da mangiare!",
            direction: "send"
          },
          {
            sentdate: "11.00",
            text: "tutto fatto!",
            direction: "received"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received"
          }
        ]
      },
      {
        name: "Luisa",
        url: "img/avatar_2.jpg",
        id: 3,
        lastseen:"03/09/2020 09:10",
        messages:[
          {
            sentdate: "9.30",
            text: "la marianna va in campagna",
            direction: "received"
          },
          {
            sentdate: "19.30",
            text: "sicura di non aver sbagliato chat?",
            direction: "send"
          },
          {
            sentdate: "24.00",
            text: "ah scusa",
            direction: "received"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received"
          }
        ]
      },
      {
        name: "Giuseppe",
        url: "img/avatar_7.jpg",
        id: 4,
        lastseen:"23/11/2020 22:14",
        messages:[
          {
            sentdate: "11.04",
            text: "ciao, come va oggi?",
            direction: "send"
          },
          {
            sentdate: "11.22",
            text: "un pò così, sono carico di lavoro",
            direction: "received"
          },
          {
            sentdate: "11.24",
            text: "te invece che mi dici?",
            direction: "received"
          },
          {
            sentdate: "12.40",
            text: "le solite cose",
            direction: "send"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received"
          }
        ]
      },
      {
        name: "Giulia",
        url: "img/avatar_3.jpg",
        id: 5,
        lastseen:"12/11/2020 20:10",
        messages:[
          {
            sentdate: "19.50",
            text: "ciao Flavio, quanto tempo! ti ricordi di me?",
            direction: "received"
          },
          {
            sentdate: "21.20",
            text: "ciao Giulia, certo che mi ricordo!",
            direction: "send"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received"
          }
        ]
      },
      {
        name: "Gennaro",
        url: "img/avatar_8.jpg",
        id: 6,
        lastseen:"24/11/2020 10:30",
        messages:[
          {
            sentdate: "24.00",
            text: "ci sei?",
            direction: "send"
          },
          {
            sentdate: "02.00",
            text: "si scusa, ho avuto da fare in questi giorni",
            direction: "received"
          }
        ],
        answers:[
          {
            sentdate: todayDate(),
            text: "alla prossima!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "certo, perchè no!",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "come preferisci",
             direction: "received"
          },
          {
            sentdate: todayDate(),
            text: "a presto, ciao",
             direction: "received"
          }
        ]
      }
    ],
    letter: "",
    userId: 0,
    newMessage: [],
  },
  methods: {
    selectItem(el){
      this.userId = el.id;
    },
    insertNewMessage(textinput){
      const object = { sentdate: todayDate(), text: textinput, direction: "send",hiddenDisplay : "none"};
      this.users[this.userId].messages.push(object);
      this.newMessage="";
      this.autoscroll();
    },
    replyMessage(){
      let position = this.userId;
      setTimeout(()=>{
          this.users[position].messages.push(this.users[position].answers[getRandom(0, 3)])
      }, 3000)
    },
    autoscroll(){
      Vue.nextTick(function () {
        let myChat = document.getElementById("chat-section");
        myChat.scrollTop = myChat.scrollHeight;
      })

    },
    removeMessage(i){
      this.users[this.userId].messages.splice(i, 1);
    },
    changeDisplay(i) {
      if(this.users[this.userId].messages[i].hiddenDisplay=="none"){
        this.users[this.userId].messages[i].hiddenDisplay="block"
      } else {
        this.users[this.userId].messages[i].hiddenDisplay="none"
      }
    }
  },
  computed:{
    filterUsers() {
      return this.users.filter(el =>{return el.name.toLowerCase().includes(this.letter.toLowerCase())});
    }
  }
})
