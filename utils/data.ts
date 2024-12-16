import {COLORS} from './colors'

export const dateCardStatus = [
    {
      id:1,
      title:'Gratuits',
      img: require("../assets/question.png"),
      bgColor:COLORS.BLEULIGHT,
      page: 'ChoixQuiz'
    },
    {
      id:2,
      title:'Payants',
      img:require("../assets/pay.png"),
      bgColor:COLORS.ROSE,
      page: 'ChoixQuiz'
    },
    {
      id:3,
      title:'Acceder au quiz precommandé',
      img:require("../assets/shopping-cart.png"),
      bgColor:COLORS.GREENLIGHT,
      page: 'Precommande'
    },
    {
      id:4,
      title:'Rejoindre un quiz',
      img:require("../assets/multipleUsers.png"),
      bgColor:COLORS.VIOLETPUR,
      page: 'Rejoindre'
    },
  ]

export const dataProfil = [
    {
      id:1,
      text:'Information profil',
      icon:require("../assets/user.png"),
      bgColor:COLORS.BLEULIGHT,
      page: "InformationProfil"
    },
    {
      id:2,
      text:'Parametres',
      icon:require("../assets/settings.png"),
      bgColor:COLORS.GREEN,
      page: "Parametre"
    },
    {
      id:3,
      text:'Regles du jeu',
      icon: require("../assets/stickNyote.png"),
      bgColor:COLORS.YELLOWLIGHT,
      page: "RegleJeu"
    },
    {
      id:4,
      text:'Politique et confidentialité',
      icon:require("../assets/file.png"),
      bgColor:COLORS.ORANGE,
      page: "Confidentialite"
    },
    {
      id:5,
      text:"Condition d'utilisation",
      icon:require("../assets/add.png"),
      bgColor:COLORS.ROSE,
      page: "ConditionUtilisation"
    },
    {
      id:6,
      text:"Nous contacter",
      icon:require("../assets/call.png"),
      bgColor:COLORS.VIOLET,
      page: "Contacts"
    },
]

export const dataNational = [
  {
    question: 'La plus grande planete au monde?',
    question_type : 'text',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correct_option: 'Neptune',
    correct_option_point: 5,
    time: 30
  },
  {
    question: 'What attraction in India is one of the famus in the world?',
    question_type : 'text',
    options: ['Chand Minar', 'Taj Mahal', 'Stadium'],
    correct_option: 'Stadium',
    correct_option_point: 5,
    time: 30
  },
  {
    question: require('../assets/basketballshock-20200128-0001.mp4'),
    question_type : 'video',
    options: ['Alligator', 'Crocodile', 'Baboon', 'Hippo'],
    correct_option: 'Baboon',
    correct_option_point: 15,
    time: 90
  },
  {
    question: 'What is the largest animal on Earth?',
    question_type : 'text',
    options: [
      'The African elephant',
      'The blue whale',
      'The sperm whale',
      'The giant squid',
    ],
    correct_option: 'The blue whale',
    correct_option_point: 5,
    time: 30
  },
  {
    question: require('../assets/son.mp3'),
    question_type : 'music',
    options: ['The bat', 'The flying squirrel', 'The bald eagle', 'The colugo'],
    correct_option: 'The bat',
    correct_option_point: 10,
    time: 60
  },
  {
    question: 'Qui a gagné la CAN 2024?',
    question_type : 'text',
    options: ['Côte d\'Ivoire', 'Sénégal', 'Congo', 'Nigéria'],
    correct_option: 'Côte d\'Ivoire',
    correct_option_point: 5,
    time: 30
  },
  {
    question: 'Qui est l\'actuel président de la Côte d\'Ivoire?',
    question_type : 'text',
    options: ['Laurent Gbagbo', 'Alassane Ouattara', 'Konan Bédié', 'Soro Gullaume'],
    correct_option: 'Alassane Ouattara',
    correct_option_point: 5,
    time: 30
  },
  {
    //question: 'https://relationship2.000webhostapp.com/relationship/images/nimba.jpg',
    question: require('../assets/nimba.jpg'),
    question_type : 'image',
    options: ['Mont Tonkoui', 'Mont momi', 'Kilimandjaro', 'Mont Nimba'],
    correct_option: 'Mont Nimba',
    correct_option_point: 10,
    time: 30
  },
  {
    question: 'Qui est le plus riche de la Côte d\'Ivoire?',
    question_type : 'text',
    options: ['Yérim Sow', 'Didier Drogba', 'Jean-Louis Billon', 'Fabrice Sawegnon'],
    correct_option: 'Jean-Louis Billon',
    correct_option_point: 5,
    time: 30
  },
  {
    question: 'Où à eu lieu la CAN 2024?',
    question_type : 'text',
    options: ['Côte d\'Ivoire', 'Cameroun', 'Maroc', 'Ghana'],
    correct_option: 'Côte d\'Ivoire',
    correct_option_point: 5,
    time: 30
  },
];

export const dataInternational = [
  {
    question: 'La plus grande planete au monde?',
    question_type : 'text',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mercury'],
    correct_option: 'Neptune',
    correct_option_point: 5,
    time: 30
  },
  {
    question: 'What attraction in India is one of the famus in the world?',
    question_type : 'text',
    options: ['Chand Minar', 'Taj Mahal', 'Stadium'],
    correct_option: 'Stadium',
    correct_option_point: 5,
    time: 30
  },
  {
    question: 'As -tu raison?',
    question_type : 'text',
    options: ['Alligator', 'Crocodile', 'Baboon', 'Hippo'],
    correct_option: 'Baboon',
    correct_option_point: 5,
    time: 30
  },
];