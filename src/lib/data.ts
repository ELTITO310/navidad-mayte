const christmas = new Date(2025, 11, 25);
const birthdayCuya = new Date(2025, 11, 28);
const newYear = new Date(2026, 0, 1);

const messagesHero = [
  {
    key: "beforeChristmas",
    msg: "La navidad ya se acerca!",
    range: (now: Date) => now <= christmas,
  },
  {
    key: "afterChristmas",
    msg: "Feliz Navidad!",
    range: (now: Date) => {
      return (
        now.getFullYear() === christmas.getFullYear() &&
        now.getMonth() === christmas.getMonth() &&
        (now.getDate() === christmas.getDate() ||
          now.getDate() === christmas.getDate() + 1)
      );
    },
  },
  {
    key: "beforeBirthday",
    msg: "Falta poco para tu cumpleaños!",
    range: (now: Date) => {
      return (
        now.getFullYear() === birthdayCuya.getFullYear() &&
        now.getMonth() === birthdayCuya.getMonth() &&
        now.getDate() === birthdayCuya.getDate() - 1
      );
    },
  },
  {
    key: "afterBirthday",
    msg: "Feliz cumpleaños te amooo muchisimo!",
    range: (now: Date) => {
      return (
        now.getFullYear() === birthdayCuya.getFullYear() &&
        now.getMonth() === birthdayCuya.getMonth() &&
        (now.getDate() === birthdayCuya.getDate() ||
          now.getDate() === birthdayCuya.getDate() + 1)
      );
    },
  },
  {
    key: "beforeNewYear",
    msg: "Ya esta proximo el nuevo año",
    range: (now: Date) => {
      const twoDaysBefore = new Date(newYear);
      twoDaysBefore.setDate(newYear.getDate() - 2);
      const oneDayBefore = new Date(newYear);
      oneDayBefore.setDate(newYear.getDate() - 1);
      return (
        (now.getFullYear() === twoDaysBefore.getFullYear() &&
          now.getMonth() === twoDaysBefore.getMonth() &&
          now.getDate() === twoDaysBefore.getDate()) ||
        (now.getFullYear() === oneDayBefore.getFullYear() &&
          now.getMonth() === oneDayBefore.getMonth() &&
          now.getDate() === oneDayBefore.getDate())
      );
    },
  },
  {
    key: "afterNewYear",
    msg: "Feliz año nuevoooo!",
    range: (now: Date) => now >= newYear,
  },
];

const christmasMessages = [
  {
    id: 0,
    message:
      "En esta navidad quiero decirte lo mucho que te amo y que eres una super chica muy especial para mi, que cumplamos todas nuestras metas a futuro y como siempre te digo que esta sea una navidad de muchas mas que vamos a tener juntos, porque siempre vamos a ser un equipo aunque usted sea renegona",
  },
  {
    id: 1,
    message:
      "Amor mio hoy dia no solo es navidad, tambien cumplimos 3 años y 4 meses, siempre te amo mucho y que este sea otro mes mas de muchos mas que vamos a cumplir mi amor, por que somos una gran pareja mi amor",
  },
  {
    id: 2,
    message:
      "En este timpo yo se que vas a cumplir todas tus metas, que vas a ser una excelnte profesional, que tu vas a ser una excelente chica y que vas a lograr todo lo que te propongas porque tu siempre vas a ser mi profesional favorita mi amor",
  },
  {
    id: 3,
    message:
      "Te amooo demasiado mi amorrr, eres una chica bellisima y muy guapa, eres la mas hermosa de entre todas las chicas del mundo, como tu no hay ninguna chica te amo demasiado mi amorrr",
  },
  {
    id: 4,
    message: "Mi amor, quiero que nunca dudes de lo mucho que te amo. Eres mi tranquilidad, mi alegría y mi razón para sonreír todos los días. Gracias por estar conmigo y por hacer mi vida tan bonita.",
  },
  {
    id: 5,
    message:
      "A tu lado aprendí que el amor verdadero sí existe, y que se construye con detalles, paciencia y mucho cariño. Prometo seguir cuidándote y amándote siempre, mi vida."
  },
  {
    id: 6,
    message:
      "Eres esa persona que llegó a mi vida para hacerla mejor. Gracias por apoyarme, por creer en mí y por regalarme tu amor tan sincero. Te amo más de lo que las palabras pueden decir."
  },
  {
    id: 7,
    message:
      "Mi amor, quiero que sepas que siempre voy a estar para ti, en los días buenos y en los difíciles. Juntos somos más fuertes y capaces de todo. Te amo con todo mi corazón."
  },
  {
    id: 8,
    message:
      "Cada momento contigo se vuelve especial, cada risa contigo vale oro y cada abrazo tuyo me llena el alma. Gracias por ser tú, mi amor hermoso."
  },
  {
    id: 9,
    message:
      "No importa lo que pase, siempre elegiré caminar contigo, apoyarte y amarte como el primer día. Eres mi persona favorita y mi mayor felicidad."
  }
];

export { messagesHero, christmas, birthdayCuya, newYear, christmasMessages };
