import Carousel from './Components/Carousel';
import DynamicMenu from './Components/DynamicMenu';
import './App.css';
import logo from "./logo.svg";

const photos = [
  {
  img:"https://cdn.pixabay.com/photo/2023/10/19/02/32/butterfly-8325417_1280.png",
  title:"Butterfly"
  },
  {
  img:"https://cdn.pixabay.com/photo/2023/11/16/15/17/sea-8392560_1280.jpg",
  title:"marina sea"
  },
  {
  img:"https://cdn.pixabay.com/photo/2023/09/28/17/10/cat-8282097_1280.jpg",
  title:"Domestic cat animal"
  },
  {
  img:"https://cdn.pixabay.com/photo/2023/10/16/03/44/daughter-8318355_1280.jpg",
  title:"Daughter Child"
  },
  {
  img:"https://cdn.pixabay.com/photo/2023/12/08/10/20/winter-8437400_1280.jpg",
  title:"Winter Lake Landscape"
  },
  
];

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
    <DynamicMenu />

    <div className="grow pt-10  space-y-32 px-20">

      <div className="w-full h-28 flex-col justify-start items-center  lg:gap-6 flex">
        <h1 className="text-stone-800 text-3xl lg:text-6xl font-bold  leading-10 whitespace-nowrap ">
          Featured Products
        </h1>
        <h2 className="w-full text-center text-stone-800 text-sm sm:text-lg lg:text-2xl font-normal leading-loose">
          Explore and discover a variety of products
        </h2>
      </div>

      <Carousel photoItems={photos} />

    </div>
  </div>
  );
}

export default App;
