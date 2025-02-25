import { HouseExclamationFill } from "react-bootstrap-icons"

export default function NotFoundComponent(){
  return(
    <>
      <div className="md:flex md:flex-row justify-center items-center w-full h-[603px] my-8">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <img src="/assets/not-found.png" className="w-[300px] md:w-[500px] animate-bounce" alt="" />
          </div>
        <span className="text-center text-xl">La page sollicitée n'est pas disponible pour le moment...</span>
        <div className="flex flex-row justify-center items-center my-4">
          <a href="/" className="flex flex-row bg-colorBlue text-white justify-center py-3 px-5 items-center gap-3 rounded-md">
            <HouseExclamationFill className="text-xl text-white"/>
            <span> Retourner à l'accueil </span>
          </a>
        </div>
        </div>
      </div>
    </>
  );
}