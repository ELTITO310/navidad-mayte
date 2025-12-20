import { AnimatePresence, motion } from "motion/react";
import SectionComponent from "./SectionComponent";
import { useState } from "react";

const messages = [
  {
    id: 1,
    texto:
      "Mayte, amor, quiero que estés tranquila. Esta graduación no cambia nada de lo que siento por ti. Estoy aquí solo celebrando una etapa, pero mi corazón sigue contigo, como desde segundo de secundaria.",
  },
  {
    id: 2,
    texto:
      "Entiendo que a veces el miedo aparece, pero quiero que recuerdes todo lo que hemos vivido juntos. No te engañaría jamás, porque valoro demasiado lo nuestro.",
  },
  {
    id: 3,
    texto:
      "Aunque no estés conmigo esta noche, estás presente en todo lo que hago. Pienso en ti y en cómo quiero seguir creciendo a tu lado.",
  },
  {
    id: 4,
    texto:
      "Respira con calma, amor. Estoy actuando con respeto, con límites y con amor por nuestra relación. No tienes nada que temer.",
  },
  {
    id: 5,
    texto:
      "Llevamos 3 años construyendo algo bonito, con confianza y esfuerzo. No voy a poner eso en riesgo por una noche.",
  },
  {
    id: 6,
    texto:
      "Quiero que te sientas segura de mí, incluso cuando la ansiedad intenta decirte lo contrario. Yo estoy firme contigo.",
  },
  {
    id: 7,
    texto:
      "Esta fiesta es solo un momento, pero tú eres parte de mi vida. Eso no cambia, ni hoy ni mañana.",
  },
  {
    id: 8,
    texto:
      "Te prometo que me comporto como la persona que soy contigo: alguien que te respeta, te cuida y te elige.",
  },
  {
    id: 9,
    texto:
      "Si en algún momento te sientes mal, recuerda todo lo que hemos superado juntos. Seguimos aquí porque nos queremos de verdad.",
  },
  {
    id: 10,
    texto:
      "No hay nadie más en mis pensamientos ni en mis decisiones. Mi prioridad eres tú y lo que tenemos.",
  },
  {
    id: 11,
    texto:
      "Gracias por confiar, incluso cuando cuesta. Yo no voy a romper esa confianza, porque sé lo valiosa que es.",
  },
  {
    id: 12,
    texto:
      "Esta noche pasa rápido, pero nosotros seguimos. Mañana te abrazo y seguimos escribiendo nuestra historia.",
  },
];

const Messages = () => {
  const [openMessage, setOpenMessage] = useState<number | null>(null);

  const handleOpenMessage = (id: number) => {
    setOpenMessage(id);
  };

  return (
    <SectionComponent className="flex-col p-10 gap-5">
      <h1 className="text-5xl font-black text-red-500 font-christmas drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] text-center">
        Mensajitos hermosos
      </h1>
      <p className="max-w-3/4 md:max-w-280 font-happy">
        Amor mio, estos son mensajes para cuando te sientas ansiosa o triste.
        Recuerda que te amo mucho y que siempre estaré aquí para apoyarte en
        todo lo que necesites. Eres una persona increíble y mereces toda la
        felicidad del mundo. Nunca olvides lo especial que eres para mí y para
        todos los que te rodean. ¡Ánimo, mi amor!
      </p>
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 max-w-3/4 md:max-w-280">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-orange-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-2xl"
            onClick={() => handleOpenMessage(message.id)}
          >
            <h1 className="font-happy text-center p-4 text-xl">{message.id}</h1>
          </div>
        ))}
      </div>
      <AnimatePresence>
      {openMessage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setOpenMessage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-10 rounded-lg max-w-3/4 md:max-w-280"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Mensaje {openMessage}</h2>
            <p className="font-happy">
              {messages.find((msg) => msg.id === openMessage)?.texto}
            </p>
            <button onClick={() => setOpenMessage(null)} className="bg-red-200 px-4 py-3 rounded-lg mt-4 cursor-pointer">Cerrar mensaje</button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </SectionComponent>
  );
};

export default Messages;
