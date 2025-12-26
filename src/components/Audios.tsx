import SectionComponent from "./ui/SectionComponent";

const audios = [
    {
        id: 1,
        src: '/audios/audio1.ogg',
    },
    {
        id: 2,
        src: '/audios/audio2.ogg',
    },
    {
        id: 3,
        src: '/audios/audio3.ogg',
    },
    {
        id: 4,
        src: '/audios/audio4.ogg',
    }
]

const Audios = () => {
    return ( <SectionComponent className="flex-col gap-5">
        <h1 className="title text-red-500">
        Audios para ti de mi hermosa Voz
      </h1>
      <p className="max-w-3/4 md:max-w-280 font-happy">
        Amor mio, estos son algunos audios que he grabado para ti. Espero que te
        gusten y que te hagan sentir especial. Recuerda que siempre estoy aquí
        para ti, escuchándote y apoyándote en todo lo que necesites. Eres una
        persona maravillosa y mereces todo lo bueno que la vida tiene para
        ofrecerte. Te amo mucho, mi amor.
      </p>
      <div>
        {audios.map((audio) => (
            <div key={audio.id} className="mb-5">
                <h2 className="font-happy font-bold mb-2">Audio {audio.id}</h2>
                <audio controls className="w-full">
                    <source src={audio.src} type="audio/ogg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        ))}
      </div>
    </SectionComponent> );
}
 
export default Audios;