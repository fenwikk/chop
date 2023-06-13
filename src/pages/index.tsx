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
      <div className="absolute z-50 w-full">
        <div className="container flex grid-cols-[20%,60%,20%] items-center justify-between py-6 text-white md:grid">
          <Image src="/logo.png" height={56} width={100} alt="Logo" />
          <nav>
            <div className="hidden items-center justify-center gap-4 font-black uppercase md:flex">
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href=""
              >
                Vår meny
              </a>
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href=""
              >
                Beställ
              </a>
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href=""
              >
                Hitta hit
              </a>
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href=""
              >
                Kontakt
              </a>
            </div>
          </nav>
          <div className="flex justify-end">
            <button className="w-fit rounded-full border-none bg-ts-red px-3 py-2">
              (0)12-345 67 89
            </button>
          </div>
        </div>
      </div>

      <main>
        <div
          className="relative flex h-[80vh] items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/30"></div>
          <div className="z-20">
            <h1 className="text-3xl font-bold text-white">
              Lorem ipsum dolor sit...
            </h1>
          </div>
        </div>

        <div className="container flex flex-col items-center py-12">
          <h2 className="text-4xl font-black text-blue-950">Våra favoriter</h2>
          <div className="my-6 grid grid-rows-3 gap-6 sm:grid-cols-3 sm:grid-rows-none">
            {favorites.map((favorite) => (
              <div
                key={favorite.name}
                className="relative flex flex-col items-center overflow-hidden rounded-lg bg-blue-950 text-white"
              >
                <span className="absolute right-3 top-2 text-2xl font-black text-ts-red">
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

          <button className="w-fit rounded-full border-none bg-ts-red px-5 py-3 text-lg text-white">
            Se hela menyn
          </button>
        </div>

        <div className="bg-ts-blue text-white">
          <div className="container flex justify-center gap-12 py-12">
            <div className="flex justify-end gap-2">
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
          <div className="container flex max-w-[75%] items-center justify-between">
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

      <div className="h-14 md:h-auto">
        <a className="fixed bottom-0 right-0 z-50 flex w-full justify-center bg-ts-red px-4 py-2 hover:cursor-pointer hover:opacity-80 md:bottom-1/2 md:-m-20 md:w-auto md:-rotate-90 md:duration-200">
          <span className="text-4xl font-black text-white">beställ nu</span>
        </a>
      </div>
    </>
  );
};

export default Home;
