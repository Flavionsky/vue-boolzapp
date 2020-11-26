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
        lastseen:"26/10/2020 11:43",
        messages:[
          {
            sentdate: "19.30",
            text: "Ciao sono Fabio",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
            sentdate: "19.35",
            text: "ciao, piacere di conoscerti!",
            direction: "send",
            hiddenDisplay : "none"
          },
          {
            sentdate: "20.03",
            text: "piacere, e tu?",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
            sentdate: "21.07",
            text: "Sono Flavio :)",
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
        name: "Samuele",
        url: "img/avatar_1.jpg",
        lastseen:"01/11/2020 23.12",
        messages:[
          {
            sentdate: "10.30",
            text: "hai portato a spasso il cane?",
            direction: "send",
            hiddenDisplay : "none"
          },
          {
            sentdate: "10.31",
            text: "ricordati di dargli da mangiare!",
            direction: "send",
            hiddenDisplay : "none"
          },
          {
            sentdate: "11.00",
            text: "tutto fatto!",
            direction: "received",
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
        name: "Luisa",
        url: "img/avatar_2.jpg",
        lastseen:"03/09/2020 09:10",
        messages:[
          {
            sentdate: "9.30",
            text: "la marianna va in campagna",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
            sentdate: "19.30",
            text: "sicura di non aver sbagliato chat?",
            direction: "send",
            hiddenDisplay : "none"
          },
          {
            sentdate: "24.00",
            text: "ah scusa",
            direction: "received",
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
        name: "Giuseppe",
        url: "img/avatar_7.jpg",
        lastseen:"23/11/2020 22:14",
        messages:[
          {
            sentdate: "11.04",
            text: "ciao, come va oggi?",
            direction: "send",
            hiddenDisplay : "none"
          },
          {
            sentdate: "11.22",
            text: "un pò così, sono carico di lavoro",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
            sentdate: "11.24",
            text: "te invece che mi dici?",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
            sentdate: "12.40",
            text: "le solite cose",
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
        name: "Giulia",
        url: "img/avatar_3.jpg",
        lastseen:"12/11/2020 20:10",
        messages:[
          {
            sentdate: "19.50",
            text: "ciao Flavio, quanto tempo! ti ricordi di me?",
            direction: "received",
            hiddenDisplay : "none"
          },
          {
            sentdate: "21.20",
            text: "ciao Giulia, certo che mi ricordo!",
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
        name: "Gennaro",
        url: "img/avatar_8.jpg",
        lastseen:"24/11/2020 10:30",
        messages:[
          {
            sentdate: "24.00",
            text: "ci sei?",
            direction: "send",
            hiddenDisplay : "none"
          },
          {
            sentdate: "02.00",
            text: "si scusa, ho avuto da fare in questi giorni",
            direction: "received",
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
      }
    ],
    letter: "",
    activeContact: null,
    activeMessage: null,
    editActive : false,
    newMessage: ""
  },
  created() {
    this.activeContact = this.users[0];
    this.activeMessage = this.activeContact.messages[0];
  },
  methods: {
    selectItem(contact){
      this.activeContact = contact;
    },
    selectMessage(mex){
      this.activeMessage = mex;
    },
    insertNewMessage(textinput){
      const object = { sentdate: todayDate(), text: textinput, direction: "send",hiddenDisplay : "none"};
      this.activeContact.messages.push(object);
      this.newMessage="";
      this.autoscroll();
    },
    replyMessage(){
      let position = this.activeContact;
      setTimeout(()=>{
          position.messages.push(position.answers[getRandom(0, 3)])
      }, 3000)
    },
    autoscroll(){
      Vue.nextTick(function () {
        let myChat = document.getElementById("chat-section");
        myChat.scrollTop = myChat.scrollHeight;
      })

    },
    removeUser(user){
      let myindex = this.users.findIndex(el => el == user);
      this.users.splice(myindex, 1);
      this.users.unshift(user);
    },
    removeMessage(i){
      this.activeContact.messages.splice(i, 1);
    },
    openEditMessage(mex){
      this.newMessage = mex.text;
      mex.hiddenDisplay="none";
      this.editActive = true;
    },
    editMessage(){
      this.activeMessage.text = this.newMessage;
      this.newMessage="";
      this.editActive = false;
    },
    editMessageClose(){
      this.newMessage="";;
      this.editActive = false;
      this.activeMessage.hiddenDisplay="none";
    },
    changeDisplay(mex) {
      if(mex.hiddenDisplay=="none"){
        mex.hiddenDisplay="block";
      } else {
        mex.hiddenDisplay="none";
      }
    }
  },
  computed:{
    filterUsers() {
      return this.users.filter(el => el.name.toLowerCase().includes(this.letter.toLowerCase()));
    }
  }
})
