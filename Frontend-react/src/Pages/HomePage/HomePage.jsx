import React, { useContext } from "react";
import image9 from "../../assets/image2.jpg";
import {
  FaClipboardList,
  FaShippingFast,
  FaMedal,
  FaHeart,
} from "react-icons/fa";
import image3 from "../../assets/image3.jpg";
import { ShopContext } from "../../Hooks/ShopContext/ShopContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "motion/react";

function HomePage() {
  const { product } = useContext(ShopContext);
  const filteredProducts = product.filter((product) =>
    [1, 3, 4, 6].includes(product.id)
  );
  const {
    handleAddtoCart,
    clients,
    handleAddtoFavorites,
    favorite,
    setFavorite,
  } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen py-20 bg-cover bg-center dark:bg-gradient-to-br bg-gray-200 shadow-sm dark:bg-color-browwn flex items-center">
        <div className="container px-20 mb-0 max-w-[1390px] mx-auto grid lg:grid-cols-2 gap-12 mt-12 items-center">
          {/* Text Content */}
          <motion.div
          initial={{opacity: 0, y:100}}
          transition={{duration:2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
           className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-900 leading-tight">
              <span className="bg-orange-600  dark:bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent">
                Unleash Quality Food
              </span>
            </h1>
            <p className="text-lg px-1 md:px-0 md:text-xl font-semibold text-gray-500 dark:text-color-yellow max-w-lg mx-auto lg:mx-0">
              <i>
                Discover the finest culinary experiences crafted with passion
                and precision. Every bite tells a story of excellence.
              </i>
            </p>
            <button className="btn" onClick={navigate.bind(this, "/Menu")}>
              Our Menu
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
          initial={{opacity: 0, y:100}}
          transition={{duration:2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}} className="relative">
            <div className="relative overflow-hidden rounded-full shadow-2xl">
              <img
                src={image9}
                alt="Quality Food"
                className="w-full h-auto max-w-full rounded-full shadow-2xl transform cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Foodie */}

      <div className="py-36 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-color-browwn dark:to-color-brown">
        <motion.div
          initial={{opacity: 0, y:100}}
          transition={{duration:2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}} className="container text-center m-auto mb-16 md:mb-20 md:w-1/2">
          <h1 className="tittle">
            <i>Why</i>{" "}
            <span className="span">
              <i>Foodie</i>
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Experience the difference with our premium food delivery service
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{opacity: 0, y:100}}
          transition={{duration:2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 md:px-8 lg:px-[90px]">
          {/* Card 1 - Easy To Order */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl cursor-pointer p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 dark:border-color-yellow">
            <div className="bg-orange-200 dark:bg-color-brown w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClipboardList className="text-4xl text-orange-600 dark:text-color-yellow" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-2xl mb-3">
              Easy To Order
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Simple and intuitive ordering process that gets your favorite
              meals to you in just a few clicks.
            </p>
          </div>

          {/* Card 2 - Fastest Delivery */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl cursor-pointer p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 dark:border-color-yellow">
            <div className="bg-orange-200 dark:bg-color-brown w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShippingFast className="text-4xl text-orange-600 dark:text-color-yellow" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-2xl mb-3">
              Fastest Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Lightning-fast delivery service ensuring your meals arrive hot and
              fresh at your doorstep.
            </p>
          </div>

          {/* Card 3 - Best Quality */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl cursor-pointer p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 dark:border-color-yellow">
            <div className="bg-orange-200 dark:bg-color-brown w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMedal className="text-4xl text-orange-600 dark:text-color-yellow" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-2xl mb-3">
              Best Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Premium ingredients and expert chefs ensure every meal meets the
              highest quality standards.
            </p>
          </div>
        </motion.div>

        {/* Over view section */}

        <motion.div
          initial={{opacity: 0, x:200}}
          transition={{duration:2}}
          whileInView={{opacity:1, x:0}} className="flex flex-col items-center justify-center md:flex-row md:items-start gap-20 md:gap-32 py-8  px-4 lg:px-[90px] mx-auto md:mt-32 mt-20">
          <img
            src={image3}
            alt=""
            className="w-full sm:w-1/2 max-w-lg rounded-lg"
          />

          <div className="w-full">
            <p className="text-2xl font-bold text-orange-700 dark:text-color-yellow mb-6">
              OVERVIEW
            </p>
            <div className="flex flex-col items-center md:items-start mt-10 text-orange-700 dark:text-color-yellow">
              <div className="grid grid-cols-2 gap-6 md:gap-8 w-full 2xl:pr-28">
                <div>
                  <p className="text-4xl font-medium text-orange-700 dark:text-color-yellow">
                    10K+
                  </p>
                  <p className="">Happy Customer</p>
                </div>

                <div>
                  <p className="text-4xl font-medium text-orange-700 dark:text-color-yellow">
                    3+
                  </p>
                  <p className="">Award Win</p>
                </div>

                <div>
                  <p className="text-4xl font-medium text-orange-700 dark:text-color-yellow">
                    4K+
                  </p>
                  <p className="">Food Menu</p>
                </div>

                <div>
                  <p className="text-4xl font-medium text-orange-700 dark:text-color-yellow">
                    10K+
                  </p>
                  <p className="">Happy Customer</p>
                </div>
              </div>
              <p className="my-10 max-w-lg text-black font-medium dark:text-white">
                Join thousands of satisfied customers enjoying delicious meals
                delivered right to their doorsteps. Experience quality,
                convenience, and exceptional service with every order. From
                farm-fresh ingredients to doorstep delivery, we make gourmet
                dining effortless
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </motion.div>

        {/* Trending recipes */}

        <motion.div
          initial={{opacity: 0, y:100}}
          transition={{duration:2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}  className="py-36 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-color-browwn dark:to-color-brown lg:px-[27px]">
          <div className="text-center">
            <h1 className="tittle">
              <i>Trending </i>
              <span className="span">
                <i>Recipes</i>
              </span>
            </h1>
          </div>

          {/* Trending recipes grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
            {filteredProducts.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white dark:bg-color-browwn rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <img
                  src={recipe.image}
                  alt=""
                  className=" w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute top-4 right-4">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {recipe.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-color-yellow mb-2">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600 dark:text-color-yellow">
                      ${recipe.price}
                    </span>
                    <div className="flex">
                      <div
                        className={`text-xl cursor-pointer p-2 ${
                          favorite.some((item) => item.id === recipe.id)
                            ? "text-color-browwn dark:text-orange-600"
                                                : "text-orange-600 dark:text-color-yellow"
                        }`}
                      >
                        <FaHeart onClick={() => handleAddtoFavorites(recipe)} />
                      </div>

                      <button
                        onClick={() => navigate(`recipe/${recipe.id}`)}
                        className=" bg-orange-600 dark:bg-color-yellow text-white dark:text-color-brown py-2 px-3  rounded-md hover:from-green-600 hovertoorange-700 font-semibold"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddtoCart(recipe)}
                    className="w-full bg-orange-600 dark:bg-color-yellow dark:text-color-brown hover:to-orange-700 text-white py-3 px-4 rounded-md font-semibold"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clients reviews */}

        <motion.div
          initial={{opacity: 0, y:100}}
          transition={{duration:2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}  className="py-24 lg:container md:mx-11 mx-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-color-browwn dark:to-color-brown">
          <div className="text-center">
            <h1 className="tittle">
              <i>What Our </i>
              <span className="span">
                <i>Client Say</i>
              </span>
            </h1>
          </div>
          <div className="relative flex items-center">
            <div className="custom-swiper-button-prev cursor-pointer text-orange-600 dark:text-color-yellow text-3xl select-none z-10 mr-4">
              &#10094;
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={600}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                // 1024: { slidesPerView: 3 },
              }}
              className="flex-1"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id} className="">
                  <div className="bg-color-yellow dark:bg-gray-800 text-color-brownn border border-orange-100 dark:border-color-yellow dark:text-color-yellow p-6 rounded-2xl shadow-lg">
                    <img
                      src={client.image}
                      alt=""
                      className="w-20 h-20 mx-auto rounded-full border-4 border-orange-600 dark:border-color-brown mb-4"
                    />
                    <h3 className="text-xl font-semibold">{client.name}</h3>
                    <p className="text-sm mt-2">{client.review}</p>
                    <div className="mt-3 text-orange-600 dark:text-color-yellow text-lg">
                      ★★★★★
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="custom-swiper-pagination flex justify-center mt-6 space-x-2 text-orange-600 dark:text-color-yellow"></div>
            </Swiper>
            <div className="custom-swiper-button-next cursor-pointer text-orange-600 dark:text-color-yellow  text-3xl select-none z-10 ml-4">
              &#10095;
            </div>
          </div>
          <style>{`
            .custom-swiper-button-prev,
            .custom-swiper-button-next {
              background: none;
              border: none;
              outline: none;
            }
            .custom-swiper-pagination .swiper-pagination-bullet {
              background-color: #ea580c;
            }
            .custom-swiper-pagination .swiper-pagination-bullet-active {
              background-color: #ea580c;
            }
          `}</style>
        </motion.div>
      </div>

      {/* Recipe */}
    </div>
  );
}

export default HomePage;
