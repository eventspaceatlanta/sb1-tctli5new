import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import imageLoader from '@/utils/imageLoader';

export default function Categories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore by Category
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Find the perfect space for your next event
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const { url: optimizedImage, alt } = imageLoader(
              category.image,
              400,
              category.name,
              category.name
            );

            return (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3 }
                  }
                }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-white p-6 rounded-lg shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/categories/${category.id}`} className="block">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {category.count} spaces
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}