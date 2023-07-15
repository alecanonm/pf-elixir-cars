"use client";
import Carousel from "../carousel/Carousel";

const LandingPage = () => {
  const images = [
    "https://img1.wallspic.com/crops/4/0/4/0/7/170404/170404-porsche-porsche_911_gt3_r_991-coche-deportivo-wapcar-3840x2160.jpg",
    "https://img1.wallspic.com/crops/2/5/7/7/6/167752/167752-carretera-cargador_esquivar_2022-dodge-dodge_charger_srt_hellcat-coche-3840x2160.jpg",
  ];

  return (
    <section className=" flex  max-sm:flex-col ">
      <section className="flex-grow w-96 max-md:w-auto">
        <Carousel images={images} />
      </section>
      <article className="flex-grow flex flex-col text-center justify-center  text">
        <h1 className="mb-2 text-4xl font-bold">Compra con nosotros!</h1>
        <ul className="flex max-sm:flex-col py-5 justify-center flex-wrap gap-4 text-lg font-bold text-slate-700">
          <li>Mas seguro</li>
          <li>Nos adaptamos al usuario</li>
          <li>Manejamos todos los precios y marcas</li>
        </ul>
        <section>
          <button
            type="button"
            className="bg-[rgb(53,180,6)] hover:bg-[rgba(40,163,2,0.9)] active:scale-105 inline-block rounded border-2 px-10 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50  max-sm:rounded-full mb-4"
          >
            Comprar
          </button>
        </section>
      </article>
    </section>
  );
};

export default LandingPage;
