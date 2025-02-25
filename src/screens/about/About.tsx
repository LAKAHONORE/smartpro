export default function About(){
  return(
    <>
      <div className="flex flex-col mt-4 my-4">
          <h1 className="text-center text-colorBlue font-bold text-3xl my-20 section-title">
            <span
              className="relative after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-colorBlue after:bottom-0"
            >
              Qui sommes-nous ?
            </span>
          </h1>

          <div className="flex flex-col-reverse md:flex md:flex-row justify-center items-center gap-8 mx-6">
            <div className="flex flex-col w-full md:w-1/2">
                <h1 className="merienda-font text-3xl font-semibold text-colorBlue text-center my-4">Smart Pro

                </h1>

                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam autem beatae soluta ad, eveniet, vero vel ipsa iste sit itaque optio ipsum nihil quae quas ab fugiat reprehenderit necessitatibus!
                  Maxime repellat accusantium suscipit, natus nulla incidunt numquam eum, officia distinctio sapiente esse voluptatibus inventore impedit architecto voluptatem facilis ad, placeat nesciunt reiciendis molestias fugiat libero? Tenetur ad ab nostrum!
                  Nesciunt debitis autem reiciendis exercitationem atque expedita laboriosam deserunt culpa enim? Ipsum consequuntur at unde officia ullam quaerat voluptatem, consectetur consequatur id tempore distinctio quos ex odit voluptas iusto vitae.
                  Quidem eligendi dolore magni? Magnam praesentium dolor voluptates inventore. Numquam ut tempore ipsum praesentium id amet dolore quidem aperiam odit nostrum error, dolorem suscipit tempora fuga! Tempore nesciunt excepturi quae?
                  Perferendis assumenda voluptatum nam inventore cupiditate necessitatibus aliquam deserunt porro facere? Velit perspiciatis sint tempore ipsam quasi quis nobis, sit repellendus sapiente nihil id, adipisci vel quam voluptates rerum illo.
                </p>
            </div>

            <img src="/assets/about.jpg" className="w-full md:w-1/3 md:h-[400px] shadow-lg shadow-black rounded-md" alt="" />
          </div>
      </div>
    </>
  );
}