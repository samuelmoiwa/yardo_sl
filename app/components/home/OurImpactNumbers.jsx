import React from "react";
import { FaUsers, FaHeart, FaMapMarkedAlt, FaLayerGroup } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import me from '../../images/image_t.jpg'

const successStories = [
  {
    title: "Empowering Farmers",
    description:
      "Through sustainable agricultural practices, we’ve helped local farmers increase crop yields by 30%, ensuring food security and economic stability.",
    image: me,
  },
  {
    title: "Clean Water Initiative",
    description:
      "Our clean water projects have provided access to safe drinking water for over 5,000 people in underserved communities, reducing waterborne diseases by 50%.",
    image: me,
  },
  {
    title: "Youth Leadership Program",
    description:
      "We’ve trained 200+ young leaders in governance and community development, empowering them to drive positive change in their communities.",
    image: me,
  },
  {
    title: "Environmental Protection",
    description:
      "Our tree-planting initiatives have restored 100+ hectares of degraded land, promoting biodiversity and combating climate change.",
    image: me,
  },
];

const OurImpactNumbers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-wide text-gray-800 dark:text-gray-200">
          Our Impact in Numbers
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          At YARDO-SL, we are committed to creating lasting change in communities. Here’s a glimpse of the impact we’ve made so far:
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "300+", label: "Active Volunteers", icon: <FaUsers /> },
            { number: "10,000+", label: "Lives Impacted", icon: <FaHeart /> },
            { number: "50+", label: "Communities Reached", icon: <FaMapMarkedAlt /> },
            {
              number: "4",
              label: "Key Focus Areas",
              icon: <FaLayerGroup />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-70 rounded-xl shadow-lg backdrop-blur-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-extrabold">{stat.number}</h3>
              <p className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{stat.label}</p>
              {stat.subtext && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.subtext}</p>
              )}
            </div>
          ))}
        </div>

        {/* Success Stories Carousel */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Success Stories
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Discover how our initiatives are transforming lives and communities across the region.
          </p>
          <Slider {...settings}>
            {successStories.map((story, index) => (
              <div key={index} className="p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-60 object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <div className="text-left text-white">
                      <h4 className="text-2xl font-bold">{story.title}</h4>
                      <p className="text-lg text-gray-300">{story.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};


export default OurImpactNumbers;
