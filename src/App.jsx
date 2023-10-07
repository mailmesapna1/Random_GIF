import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-full h-screen relative flex flex-col background items-center h-full">
      <h1 className="bg-white w-full text-center rounded-md
      mt-[40px] px-10 py-2 text-4xl font-bold ">
        RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  )
}
