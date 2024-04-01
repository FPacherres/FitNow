export const routines = [
  {
    num: 1,
    exercise: {
      text: {
        spanish: "Parte Superior",
        english: "Upper Body",
      },
      groups: ["Pecho", "Bíceps", "Tríceps"],
    },
    day: {
      text: {
        spanish: "Lunes",
        english: "Monday",
      },
      abbr: {
        spanish: "Lu",
        english: "Mon",
      },
    },
    path: "routine1",
    disabled: false,
    break: false,
    go: false,
    percentage: 20,
  },
  {
    num: 2,
    exercise: {
      text: {
        spanish: "Pierna Completa",
        english: "Full Leg",
      },
      groups: ["Pierna", "Pantorrilla", "Gluteos"],
    },
    day: {
      text: {
        spanish: "Martes",
        english: "Tuesday",
      },
      abbr: {
        spanish: "Mar",
        english: "Tues",
      },
    },
    path: "routine2",
    disabled: false,
    break: false,
    go: false,
    percentage: 80,
  },
  {
    num: 3,
    exercise: {
      text: {
        spanish: "Parte Superior",
        english: "Upper Body",
      },
      groups: ["Espalda", "Hombro", "Trapecio"],
    },
    day: {
      text: {
        spanish: "Miércoles",
        english: "Wednesday",
      },
      abbr: {
        spanish: "Mier",
        english: "Wed",
      },
    },
    path: "routine3",
    disabled: false,
    break: false,
    go: false,
    percentage: 50,
  },
  {
    num: 4,
    exercise: {
      text: {
        spanish: "Descanso",
        english: "Break",
      },
      groups: [],
    },
    day: {
      text: {
        spanish: "Jueves",
        english: "Thursday",
      },
      abbr: {
        spanish: "Juev",
        english: "Thurs",
      },
    },
    disabled: true,
    break: true,
    go: false,
    percentage: 0,
  },
  {
    num: 5,
    exercise: {
      text: {
        spanish: "Parte Superior",
        english: "Upper Body",
      },
      groups: ["Pecho", "Bíceps", "Tríceps"],
    },
    day: {
      text: {
        spanish: "Viernes",
        english: "Friday",
      },
      abbr: {
        spanish: "Vie",
        english: "Fri",
      },
    },
    path: "routine1",
    disabled: false,
    break: false,
    go: false,
    percentage: 100,
  },
  {
    num: 6,
    exercise: {
      text: {
        spanish: "Pierna Completa",
        english: "Full Leg",
      },
      groups: ["Pierna", "Pantorrilla", "Gluteos"],
    },
    day: {
      text: {
        spanish: "Sábado",
        english: "Saturday",
      },
      abbr: {
        spanish: "Sab",
        english: "Sat",
      },
    },
    path: "routine2",
    disabled: false,
    break: false,
    go: false,
    percentage: 10,
  },
  {
    num: 7,
    exercise: {
      text: {
        spanish: "Parte Superior",
        english: "Upper Body",
      },
      groups: ["Espalda", "Hombro", "Trapecio"],
    },
    day: {
      text: {
        spanish: "Domingo",
        english: "Sunday",
      },
      abbr: {
        spanish: "Dom",
        english: "Sun",
      },
    },
    path: "routine3",
    disabled: false,
    break: false,
    go: false,
    percentage: 30,
  },
];

export const routine1 = {
  title: {
    spanish: "Tren Superior",
    english: "Upper Body",
  },
  groups: [
    {
      text: {
        spanish: "Pecho",
        english: "Chest",
      },
      exercise: {
        name: "Curl Martillo - Mancuernas",
        reps: 4,
        peso: 14,
        images: {
          main: "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1",
          secondary:
            "https://mui.fitness/__export/1673412131129/sites/muifitness/img/2023/01/11/vista-cultivo-hombre-camisa-haciendo-curl-biceps-triceps-pesas-entrenamiento-gimnasio_474717-24965.jpg_1301049368.jpg",
        },
      },
    },

    {
      text: {
        spanish: "Bíceps",
        english: "Bicep",
      },
      exercise: {
        name: "Curl Martillo - Mancuernas",
        reps: 4,
        peso: 14,
        images: {
          main: "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1",
          secondary:
            "https://mui.fitness/__export/1673412131129/sites/muifitness/img/2023/01/11/vista-cultivo-hombre-camisa-haciendo-curl-biceps-triceps-pesas-entrenamiento-gimnasio_474717-24965.jpg_1301049368.jpg",
        },
      },
    },
    {
      text: {
        spanish: "Bíceps",
        english: "Bicep",
      },
      exercise: {
        name: "Curl Concentrado - Mancuernas",
        reps: 4,
        peso: 14,
        images: {
          main: "https://boxlifemagazine.com/wp-content/uploads//2023/07/curl-concentre.gif",
          secondary:
            "https://giansalud.com/wp-content/uploads/2023/12/8.1-biceps-concentrado-concentrate-brazos-gian-salud-gianfranco-slepetis-explicacion-instructivo.webp",
        },
      },
    },
    {
      text: {
        spanish: "Bíceps",
        english: "Bicep",
      },
      exercise: {
        name: "Curl de Biceps - Polea",
        reps: 4,
        peso: 14,
        images: {
          main: "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/CURL-BICEPS-CON-BARRA-EN-POLEA-BAJA.gif?fit=360%2C360&ssl=1",
          secondary:
            "https://phantom-marca.unidadeditorial.es/02f3d953736119207d03876d327ef6fa/resize/828/f/jpg/assets/multimedia/imagenes/2023/10/03/16963513769306.jpg",
        },
      },
    },
    {
      text: {
        spanish: "Bíceps",
        english: "Bicep",
      },
      exercise: {
        name: "Curl de Biceps - Polea",
        reps: 4,
        peso: 14,
        images: {
          main: "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/CURL-BICEPS-CON-BARRA-EN-POLEA-BAJA.gif?fit=360%2C360&ssl=1",
          secondary:
            "https://phantom-marca.unidadeditorial.es/02f3d953736119207d03876d327ef6fa/resize/828/f/jpg/assets/multimedia/imagenes/2023/10/03/16963513769306.jpg",
        },
      },
    },

    {
      text: {
        spanish: "Tríceps",
        english: "Triceps",
      },
      exercise: {
        name: "Curl Martillo - Mancuernas",
        reps: 4,
        peso: 14,
        images: {
          main: "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1",
          secondary:
            "https://mui.fitness/__export/1673412131129/sites/muifitness/img/2023/01/11/vista-cultivo-hombre-camisa-haciendo-curl-biceps-triceps-pesas-entrenamiento-gimnasio_474717-24965.jpg_1301049368.jpg",
        },
      },
    },
  ],
};
