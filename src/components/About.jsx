import about from '../assets/hero.png'

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* ================= IMAGE SECTION ================= */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-72 sm:w-80 lg:w-96">

            {/* Star Background */}
            <div
              className="absolute -inset-8 lg:-inset-16
              bg-gradient-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b]
              rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            {/* Image */}
            <img
              src={about}
              alt="about"
              className="relative z-10 w-full h-auto transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />

          </div>
        </figure>

        {/* ================= TEXT SECTION ================= */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
              font-bold mb-6 text-transparent
              bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl
            mb-8 leading-relaxed
            bg-gradient-to-r from-orange-900/10 to-orange-900/5
            p-6 rounded-2xl backdrop-blur-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Telecommunication Technology student with strong foundations in
            Frontend Development. Skilled in programming (React JS, Node JS,
            Express JS, Mongo DB, JavaScript, HTML, CSS, Wordpress) and
            experienced in building modern web applications.
          </p>

          {/* ================= STATS ================= */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
            
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-3xl lg:text-4xl font-bold text-orange-400">
                4+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Education
              </div>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <div className="text-3xl lg:text-4xl font-bold text-orange-400">
                3+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Years Experience
              </div>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="800">
              <div className="text-3xl lg:text-4xl font-bold text-orange-400">
                17+
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Project Completed
              </div>
            </div>

          </div>

          {/* ================= BUTTON ================= */}
          <button
            className={`inline-flex items-center justify-center
            border-2 border-orange-500 py-3 px-6
            rounded-full text-base sm:text-lg font-semibold
            transition-all duration-300 transform hover:scale-105
            hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] ${
              darkMode
                ? 'text-white bg-orange-500/10'
                : 'text-gray-800 bg-white'
            }`}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About