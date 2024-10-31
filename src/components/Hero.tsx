import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Digital</span>
            <span className="block text-indigo-400">Presence Today</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create stunning digital experiences with our cutting-edge solutions. Elevate your brand with modern design and powerful functionality.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="#contact" className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 flex items-center gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="rounded-md bg-white/10 backdrop-blur-sm px-6 py-3 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}