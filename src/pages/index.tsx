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
      name: "Pad Thai",
      description:
        "Stekta risnudlar, blandade grönsaker, ägg, krossade jordnötter, gräslök, koriander, böngroddar, soja och chili.",
      price: 99,
      image: "/Pad_Thai.jpeg",
    },
    {
      name: "Maki Ebi",
      description: "6 bitars räkor",
      price: 55,
      image: "/Maki_Ebi.jpeg",
    },
    {
      name: "Panko Chicken",
      description: "Marinerad kyckling med jordnötssås och ris.",
      price: 99,
      image: "/Panko_Chicken.jpeg",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="absolute z-50 w-full">
        <div className="container flex grid-cols-[20%,60%,20%] items-center justify-between py-6 text-white md:grid">
          <Image src="/logo.png" height={56} width={100} alt="Logo" />
          <nav>
            <div className="hidden items-center justify-center gap-8 font-black uppercase md:flex">
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href="https://thainsushi.qopla.com/restaurant/thai-n-sushi-for-you---rosengard-centrum/q98Mm2PvzA/order"
              >
                Vår meny
              </a>
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href="https://www.foodora.se/restaurant/s7gw/thai-n-sushi-for-you"
              >
                Beställ
              </a>
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href="https://goo.gl/maps/TkaPMBSvaadxNx5YA"
              >
                Hitta hit
              </a>
              <a
                className="relative after:absolute after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:duration-200 after:hover:w-full"
                href="mailto:filip.martensson@seabird.digital"
              >
                Kontakt
              </a>
            </div>
          </nav>
          <div className="flex justify-end">
            <button className="w-fit rounded-full border-none bg-ts-red px-3 py-2">
              <a href="tel:040930630">
                <span className="hidden md:block">(0)40-93 06 30</span>
                <span className="md:hidden">Ring hit</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      <main>
        <div
          className="relative flex h-[80vh] flex-col items-center justify-center gap-4 bg-cover bg-center text-white"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/40"></div>
          <div className="z-20 flex flex-col items-center gap-2 text-center ">
            <h1 className=" font-serif text-4xl font-bold sm:text-5xl">
              Love at first bite
            </h1>
            <p className="text-lg">Välkommen till Thai n&apos; Sushi For You</p>
          </div>
          <div className="z-20 flex gap-2">
            <button className="bg-ts-blue px-5 py-2">
              <a href="https://thainsushi.qopla.com/restaurant/thai-n-sushi-for-you---rosengard-centrum/q98Mm2PvzA/order">
                Meny
              </a>
            </button>
            <button className="bg-ts-blue px-5 py-2">
              <a href="https://goo.gl/maps/TkaPMBSvaadxNx5YA">Hitta hit</a>
            </button>
          </div>
        </div>

        <div className="container flex flex-col items-center py-12">
          <h2 className="text-4xl font-black text-ts-blue-dark">
            Våra favoriter
          </h2>
          <div className="my-6 grid grid-rows-3 gap-6 lg:grid-cols-3 lg:grid-rows-none">
            {favorites.map((favorite) => (
              <div
                key={favorite.name}
                className="relative flex w-full flex-col items-center overflow-hidden rounded-lg bg-ts-blue-dark text-white"
              >
                <span className="absolute right-1 top-1 rounded-xl bg-ts-red p-2 text-2xl font-black">
                  {favorite.price} kr
                </span>
                <img
                  src={favorite.image}
                  alt={favorite.name}
                  className="w-full object-cover lg:max-h-52 xl:max-h-60"
                />

                <div className="absolute bottom-0 w-full bg-ts-blue-dark p-4 lg:static">
                  <h3 className="font-black">{favorite.name}</h3>
                  <p>{favorite.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-fit rounded-full border-none bg-ts-red px-5 py-3 text-lg text-white">
            <a href="https://thainsushi.qopla.com/restaurant/thai-n-sushi-for-you---rosengard-centrum/q98Mm2PvzA/order">
              Se hela menyn
            </a>
          </button>
        </div>

        <div className="bg-ts-blue text-white">
          <div className="container flex justify-center gap-12 py-12">
            <div className="flex justify-end gap-2">
              <div>
                <Image
                  src="/kicki.png"
                  width={40}
                  height={40}
                  alt="Kicki Szabo"
                />
              </div>
              <div>
                <h3>Kicki Szabo</h3>
                <p className="text-xs">Local Guide, Google Maps</p>
              </div>
            </div>
            <p className="max-w-md text-xl font-bold">
              Trevligt bemötande, tipsade och rekommenderade, då jag inte kände
              till menyn. Noga allergi info och hantering av maten.
            </p>
          </div>
        </div>

        <footer className="bg-ts-blue-dark py-12 text-white">
          <div className="container flex max-w-[75%] items-center justify-between">
            <div className="flex flex-col">
              <a href="https://thainsushi.qopla.com/restaurant/thai-n-sushi-for-you---rosengard-centrum/q98Mm2PvzA/order">
                Meny
              </a>
              <a href="https://www.foodora.se/restaurant/s7gw/thai-n-sushi-for-you">
                Beställ
              </a>
              <a href="https://goo.gl/maps/TkaPMBSvaadxNx5YA">Hitta Hit</a>
              <a href="mailto:filip.martensson@seabird.digital">Kontakt</a>
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
        <a
          href="https://www.foodora.se/restaurant/s7gw/thai-n-sushi-for-you"
          className="fixed bottom-0 right-0 z-50 flex w-full justify-center bg-ts-red px-4 py-2 hover:cursor-pointer hover:opacity-80 md:bottom-1/2 md:-m-20 md:w-auto md:-rotate-90 md:duration-200"
        >
          <span className="text-4xl font-black text-white">beställ nu</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
