export default function Service() {
  return (
    <>
      <div className="flex flex-col mb-12">
        <h1 className="text-center text-colorBlue font-bold text-3xl my-20 section-title">
          <span
            className=" relative after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-colorBlue after:bottom-0"
          >
            Nos Services
          </span>
        </h1>


        <div className="flex flex-col px-3 md:grid md:grid-cols-3 md:justify-center md:items-center md:gap-4 md:px-40 md:my-5">

          <div className="my-3 flex flex-col shadow-sm shadow-black hover:shadow-colorBlue transition-all bg-white rounded-md ">
            <a href="#">
              <img src="/assets/planification.jpg" alt="" className="rounded-tl-md rounded-tr-md h-[280px] w-full" />
            </a>

            <h1 className="text-center mt-5 text-colorBlue font-bold capitalize text-2xl">Planification</h1>

            <p className="my-10 mx-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores minus omnis quo voluptatem delectus. Minima enim illo esse nemo et, officiis dolore voluptates quaerat, voluptatum delectus at, placeat exercitationem adipisci!
            </p>

            <div className="flex flex-row justify-center items-center my-2">
              <a href="" className="border-[2px] border-colorBlue py-3 px-5 hover:bg-colorBlue hover:text-white rounded-md transition-all">
                En savoir plus
              </a>
            </div>
          </div>

          <div className="my-3 flex flex-col shadow-sm shadow-black hover:shadow-colorBlue transition-all bg-white rounded-md ">
            <a href="#">
              <img src="/assets/motivation.jpg" alt="" className="rounded-tl-md rounded-tr-md  h-[280px] w-full" />
            </a>

            <h1 className="text-center mt-5 text-colorBlue font-bold capitalize text-2xl">Motivation</h1>

            <p className="my-10 mx-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores minus omnis quo voluptatem delectus. Minima enim illo esse nemo et, officiis dolore voluptates quaerat, voluptatum delectus at, placeat exercitationem adipisci!
            </p>

            <div className="flex flex-row justify-center items-center my-2">
              <a href="" className="border-[2px] border-colorBlue py-3 px-5 hover:bg-colorBlue hover:text-white rounded-md transition-all">
                En savoir plus
              </a>
            </div>
          </div>

          <div className="my-3 flex flex-col shadow-sm  shadow-black hover:shadow-colorBlue transition-all bg-white rounded-md ">
            <a href="#">
              <img src="/assets/personal-development.jpg" alt="" className="rounded-tl-md rounded-tr-md  h-[280px] w-full" />
            </a>

            <h1 className="text-center mt-5 text-colorBlue font-bold capitalize text-2xl">Développement personnel</h1>

            <p className="my-10 mx-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores minus omnis quo voluptatem delectus. Minima enim illo esse nemo et, officiis dolore voluptates quaerat, voluptatum delectus at, placeat exercitationem adipisci!
            </p>

            <div className="flex flex-row justify-center items-center my-2">
              <a href="" className="border-[2px] border-colorBlue py-3 px-5 hover:bg-colorBlue hover:text-white rounded-md transition-all">
                En savoir plus
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col px-3 md:grid md:grid-cols-2 md:justify-center md:items-center md:gap-4 md:px-96 md:my-5">


          <div className="my-3 flex flex-col shadow-sm shadow-black hover:shadow-colorBlue transition-all bg-white rounded-md">
            <a href="#">
              <img src="/assets/financial.jpg" alt="" className="rounded-tl-md rounded-tr-md  h-[280px] w-full" />
            </a>

            <h1 className="text-center mt-5 text-colorBlue font-bold capitalize text-2xl">Gestion finacière</h1>

            <p className="my-10 mx-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores minus omnis quo voluptatem delectus. Minima enim illo esse nemo et, officiis dolore voluptates quaerat, voluptatum delectus at, placeat exercitationem adipisci!
            </p>

            <div className="flex flex-row justify-center items-center my-2">
              <a href="" className="border-[2px] border-colorBlue py-3 px-5 hover:bg-colorBlue hover:text-white rounded-md transition-all">
                En savoir plus
              </a>
            </div>
          </div>

          <div className="my-3 flex flex-col shadow-sm shadow-black hover:shadow-colorBlue transition-all bg-white rounded-md">
            <a href="#">
              <img src="/assets/evaluation.jpg" alt="" className="rounded-tl-md rounded-tr-md  h-[280px] w-full" />
            </a>

            <h1 className="text-center mt-5 text-colorBlue font-bold capitalize text-2xl">Auto-évaluation</h1>

            <p className="my-10 mx-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores minus omnis quo voluptatem delectus. Minima enim illo esse nemo et, officiis dolore voluptates quaerat, voluptatum delectus at, placeat exercitationem adipisci!
            </p>

            <div className="flex flex-row justify-center items-center my-2">
              <a href="" className="border-[2px] border-colorBlue py-3 px-5 hover:bg-colorBlue hover:text-white rounded-md transition-all">
                En savoir plus
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}