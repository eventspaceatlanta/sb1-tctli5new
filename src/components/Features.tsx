import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Enterprise-grade security built into every layer',
    icon: Shield,
  },
  {
    name: 'Mobile First',
    description: 'Responsive design that works on any device',
    icon: Smartphone,
  },
  {
    name: 'Global Scale',
    description: 'Deploy worldwide with edge computing',
    icon: Globe,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Everything you need to succeed</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform provides all the tools you need to build and grow your digital presence.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-6 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-4">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}