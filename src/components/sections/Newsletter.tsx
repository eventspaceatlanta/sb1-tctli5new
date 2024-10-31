import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-purple-600 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95" />
          </div>
          
          <div className="relative px-6 py-16 sm:px-12 lg:px-16">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Stay Updated</span>
                </h2>
                <p className="mt-4 text-lg text-purple-100">
                  Get exclusive venue recommendations and special offers delivered to your inbox.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <Button 
                      size="lg"
                      className="w-full bg-white text-purple-600 hover:bg-purple-50 flex items-center gap-2"
                    >
                      <Mail className="h-5 w-5" />
                      Subscribe
                    </Button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-purple-100">
                  We care about your data. Read our{' '}
                  <a href="#" className="font-medium text-white underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}