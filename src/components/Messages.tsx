import SectionComponent from "./ui/SectionComponent";
import Gift from "./ui/Gift";
import {christmasMessages} from '../lib/data'

const Messages = () => {

  return (
    <SectionComponent className="flex-col px-10 gap-5 bg-[url(/stone_mosaico2.jpg)] bg-repeat" style={{
      backgroundSize: '40%'
    }} >
      <div className="mt-20 bg-amber-950 relative p-10 -rotate-3 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
        <span className="absolute w-5 h-5 bg-radial from-black/50 to-gray-700 to-20% rounded-full top-4 left-4"></span>
        <span className="absolute w-5 h-5 bg-radial from-black/50 to-gray-700 to-20% rounded-full top-4 right-4"></span>
        <h1 className="title text-red-500">
          Estos son mis mejores regalos
        </h1>
      </div>
      <div className="mt-auto flex flex-row flex-wrap pt-4">
        {christmasMessages.map((m) => (
          <Gift message={m.message} key={m.id} />
        ))}
      </div>
    </SectionComponent>
  );
};

export default Messages;
