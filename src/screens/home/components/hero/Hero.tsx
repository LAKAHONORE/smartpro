import { BoxArrowInRight } from "react-bootstrap-icons";

export default function Hero(){
  return(
    <>
      <section className="top-12 w-full h-[600px] md:h-[800px] bg-colorBlue bg-no-repeat bg-cover " style={{background: 'url("/assets/hero.jpg")'}}>
       <div className="absolute w-full h-[600px] md:h-[800px] mt-16 inset-0 bg-gradient-to-r from-black to-transparent"></div>
        
        <div className="absolute w-full h-[600px] md:h-[800px]">
          <div className="flex flex-row justify-between items-center h-[600px] md:h-[800px] mx-8">
            <div className="flex flex-col">
              <h1 className="merienda-font text-4xl text-center md:text-start md:text-6xl text-white animate__animated animate__bounce">
                Smart Pro
              </h1>
              
              <p className="text-white w-full text-center md:text-start md:w-2/3 md:text-xl my-6  ">
                Rejoignez une communauté d'apprenants et de professionnels motivés. Commencez dès aujourd'hui votre parcours vers l'excellence !
              </p>

              <div className="flex flex-col md:flex md:flex-row justify-start items-center gap-4 my-6">

                <a href="#" className="flex flex-row justify-center items-center border-[2px] border-colorBlue hover:text-colorBlue text-white gap-2 py-2 px-16 rounded-md animate__animated animate__slideInLeft">
                  <BoxArrowInRight className="text-xl" />
                  <span className="font-semibold">Se connecter</span>
                </a>

                <span className="md:hidden font-bold text-gray-400">OU</span>

                <button className="flex flex-row justify-center items-center border-[2px] border-white bg-white text-colorBlue hover:border-gray-200 hover:bg-gray-200 py-2 px-6 gap-2 rounded-md animate-pulse">
                  <img src="/assets/google-logo.png" className="w-6" alt="" />
                  <span className="font-semibold">Continuer avec google</span>
                </button>
              </div>


            </div>
          </div>
        </div>

      </section>
    </>
  );
}