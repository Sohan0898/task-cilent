/* eslint-disable react/no-unescaped-entities */
import Container from "../../Shared/Container/Container";

const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-white to-[#3F77C4]/50 ">
        <section className="py-10 sm:py-16 lg:py-24">
          <Container>
            <div className="">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h1 className="text-4xl font-semibold text-black sm:text-6xl lg:text-7xl">
                    Empower Your Workflow with
                    <h1 className="text-4xl mt-1 font-bold text-[#3F77C4] sm:text-6xl lg:text-7xl">
                      TaskOptima.
                    </h1>
                  </h1>

                  <p className="mt-8 text-base text-gray-600 sm:text-xl">
                    Where tasks meet precision, unlocking peak efficiency
                    effortlessly. Elevate your workflow with streamlined task
                    management for optimal productivity."
                  </p>

                  <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#3F77C4] hover:bg-blue-700"
                      role="button"
                    >
                      {" "}
                      Start Exploring{" "}
                    </a>
                  </div>
                </div>

                <div>
                  <img
                    className="w-full"
                    src="https://i.ibb.co/cXxvQHH/Untitled-1080-x-1080-px.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Banner;
