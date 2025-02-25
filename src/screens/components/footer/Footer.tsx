import { CaretRight, Envelope, Facebook, GeoAlt, Instagram, Linkedin, PhoneFill, Twitter, Whatsapp } from "react-bootstrap-icons";

export default function Footer(){
  return(
    <>
      <footer className="flex flex-col md:grid grid-cols-3 w-full p-6 bg-white shadow-lg border-t-[2px] border-colorBlue">

          <div className="flex flex-col">
              <div className="flex flex-row justify-start items-center gap-2">
                  <img src="/assets/logo_insam.png" alt="" className="w-16" />
                  <span className="merienda-font text-xl">Smart Pro</span>
              </div>

              <div className="flex flex-row justify-start items-center my-1 md:my-3 gap-2">
                <GeoAlt className="text-xl text-colorBlue"/>
                <span>Tamdja Bafoussam, Derrière Camtel Douala, Entrée IUT</span>
              </div>


              <div className="flex flex-row justify-start items-center my-1 md:my-3 gap-2">
                <PhoneFill className="text-xl text-colorBlue"/>
                <a href="tel:698550451" className="hover:text-colorBlue transition-all">698 550 451 / 680 244 692 / 696 523 672</a>
              </div>



              <div className="flex flex-row justify-start items-center my-1 md:my-3 gap-2">
                <Envelope className="text-xl text-colorBlue"/>
                <a href="mailto:serviceestuaires@gmail.com" className="hover:text-colorBlue transition-all">serviceestuaires@gmail.com</a>
              </div>
          </div>

          <div className="flex flex-col mt-8 md:mt-0">
            <h1 className="text-start text-xl font-semibold">
              <span
                className="relative after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-colorBlue after:bottom-0"
              >
                Liens utiles
              </span>
            </h1>

              <div className="flex flex-row justify-start items-center mt-8 gap-2">
                <CaretRight className="text-xl text-colorBlue"/>
                <a href="/planification" className="hover:text-colorBlue transition-all">Planification</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <CaretRight className="text-xl text-colorBlue"/>
                <a href="/motivation" className="hover:text-colorBlue transition-all">Motivation</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <CaretRight className="text-xl text-colorBlue"/>
                <a href="developpement-personnel" className="hover:text-colorBlue transition-all">Développement personnel</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <CaretRight className="text-xl text-colorBlue"/>
                <a href="gestion-financiere" className="hover:text-colorBlue transition-all">Gestion financière</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <CaretRight className="text-xl text-colorBlue"/>
                <a href="auto-evaluation" className="hover:text-colorBlue transition-all">Auto-évaluation</a>
              </div>


          </div>
          
          <div className="flex flex-col mt-8 md:mt-0">
            <h1 className="text-start text-xl font-semibold">
              <span
                className="relative after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-colorBlue after:bottom-0"
              >
                Contactez-nous
              </span>
            </h1>

              <div className="flex flex-row justify-start items-center mt-8 gap-2">
                <Whatsapp className="text-xl text-colorBlue"/>
                <a href="#" className="hover:text-colorBlue transition-all">Whatsapp</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <Facebook className="text-xl text-colorBlue"/>
                <a href="#" className="hover:text-colorBlue transition-all">Facebook</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <Twitter className="text-xl text-colorBlue"/>
                <a href="#" className="hover:text-colorBlue transition-all">Twitter</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <Instagram className="text-xl text-colorBlue"/>
                <a href="#" className="hover:text-colorBlue transition-all">Instagram</a>
              </div>

              <div className="flex flex-row justify-start items-center mt-2 gap-2">
                <Linkedin className="text-xl text-colorBlue"/>
                <a href="#" className="hover:text-colorBlue transition-all">Linkedin</a>
              </div>


          </div>

      </footer>
      <div className="flex flex-row justify-center items-center gap-4 text-white text-sm h-12 bg-colorBlue">

          <span>© Designed by <a href="#">Digital Shift</a></span>
      </div>
    </>
  );
}