import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  type Favorite = {
    name: string;
    description: string;
    price: number;
    image: string;
  };
  const favorites: Favorite[] = [
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies.",
      price: 99,
      image: "https://picsum.photos/500/300",
    },
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies.",
      price: 99,
      image: "https://picsum.photos/500/300",
    },
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies.",
      price: 99,
      image: "https://picsum.photos/500/300",
    },
  ];

  return (
    <>
      <div className="absolute w-full">
        <div className="container grid grid-cols-[20%,60%,20%] items-center py-6 text-white">
          <img src="" alt="Logo" />
          <nav className="flex items-center justify-center gap-4 font-black uppercase">
            <a href="">Vår meny</a>
            <a href="">Beställ</a>
            <a href="">Kontakt</a>
          </nav>
          <div className="flex justify-end">
            <button className="w-fit rounded-full border-none bg-orange-500 px-3 py-2">
              (0)12-345 67 89
            </button>
          </div>
        </div>
      </div>

      <a className="fixed right-0 top-1/2 -m-20 -rotate-90 bg-orange-500 px-4 py-2 duration-200 hover:cursor-pointer hover:opacity-80">
        <span className="text-4xl font-black text-white">beställ nu</span>
      </a>

      <main>
        <div className="flex h-[80vh] items-center justify-center bg-blue-900">
          <h1 className="text-3xl font-bold text-white">
            Lorem ipsum dolor sit...
          </h1>
        </div>

        <div className="container flex flex-col items-center py-12">
          <h2 className="text-4xl font-black text-blue-950">Våra favoriter</h2>
          <div className="my-6 grid grid-cols-3 gap-6">
            {favorites.map((favorite) => (
              <div
                key={favorite.name}
                className="relative flex flex-col items-center overflow-hidden rounded-lg bg-blue-950 text-white"
              >
                <span className="absolute right-3 top-2 text-2xl font-black text-orange-300">
                  {favorite.price} kr
                </span>
                <img
                  src={favorite.image}
                  alt={favorite.name}
                  className="max-h-40 w-full object-cover"
                />
                <div className="m-4">
                  <h3 className="font-black">{favorite.name}</h3>
                  <p>{favorite.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-fit rounded-full border-none bg-orange-500 px-5 py-3 text-lg text-white">
            Se hela menyn
          </button>
        </div>

        <div className="bg-blue-900 text-white">
          <div className="container grid grid-cols-[50%,50%] py-12">
            <div className="flex gap-2">
              <div>
                <Image
                  src="https://picsum.photos/40/40"
                  width={40}
                  height={40}
                  alt="jörgen gustafson"
                  className="aspect-square rounded-full"
                />
              </div>
              <div>
                <h3>Jörgen Gustafson</h3>
                <p className="text-sm">Google Maps</p>
              </div>
            </div>
            <p className="text-2xl font-black">
              Bästa pizzan i stan!
              <br />
              Utan tvekan.
            </p>
          </div>
        </div>

        <footer className="bg-blue-950 py-12 text-white">
          <div className="container flex items-center justify-between">
            <div className="flex flex-col">
              <a href="">Meny</a>
              <a href="">Beställ</a>
              <a href="">Kontakt</a>
            </div>

            <div className="text-right">
              Copyright 2023 &copy; Seabird Digital.
              <br />
              All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
