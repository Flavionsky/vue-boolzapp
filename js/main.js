//attivazione di tu
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
            sentdate: "19.10",
            text: "Buonasera, come ti senti oggi?",
            direction: "received"
          },
          {
            sentdate: "19.20",
            text: "Buonasera, tutto bene grazie!",
            direction: "send"
          }
        ]
      },
      {
        name: "Fabio",
        url: "img/avatar_4.jpg",
        id: 1,
        lastseen:"22/10/2020 10:30",
        messages:[
          {
            sentdate: "19.30",
            text: "Ciao sono Fabio",
            direction: "received"
          },
          {
            sentdate: "10.30",
            text: "ciao, piacere di conoscerti!",
            direction: "send"
          },
          {
            sentdate: "24.00",
            text: "piacere, e tu?",
            direction: "received"
          },
          {
            sentdate: "11.30",
            text: "Sono Flavio :)",
            direction: "send"
          }
        ]
      },
      {
        name: "Samuele",
        url: "img/avatar_1.jpg",
        id: 2,
        lastseen:"22/10/2020 10:30",
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
        ]
      },
      {
        name: "Luisa",
        url: "img/avatar_2.jpg",
        id: 3,
        lastseen:"22/10/2020 10:30",
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
        ]
      },
      {
        name: "Giuseppe",
        url: "img/avatar_7.jpg",
        id: 4,
        lastseen:"22/10/2020 10:30",
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
        ]
      },
      {
        name: "Giulia",
        url: "img/avatar_3.jpg",
        id: 5,
        lastseen:"22/10/2020 10:30",
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
        ]
      },
      {
        name: "Gennaro",
        url: "img/avatar_8.jpg",
        id: 6,
        lastseen:"22/10/2020 10:30",
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
      const object = { sentdate: '5:45', text: textinput, direction: "send"};
      this.users[this.userId].messages.push(object);
      this.newMessage="";
    }
  },
  computed:{
    filterUsers() {
      return this.users.filter(el =>{return el.name.toLowerCase().includes(this.letter.toLowerCase())});
    }
  }
})