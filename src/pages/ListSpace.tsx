import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Camera, DollarSign, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ListSpace() {
  const [formData, setFormData] = useState({
    venueName: '',
    address: '',
    capacity: '',
    price: '',
    description: '',
    amenities: '',
    images: null,
    contactName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send email to eventspaceatlanta@gmail.com
    const mailtoLink = `mailto:eventspaceatlanta@gmail.com?subject=New Venue Listing: ${formData.venueName}&body=${encodeURIComponent(`
      Venue Details:
      Name: ${formData.venueName}
      Address: ${formData.address}
      Capacity: ${formData.capacity}
      Price: ${formData.price}
      Description: ${formData.description}
      Amenities: ${formData.amenities}

      Contact Information:
      Name: ${formData.contactName}
      Email: ${formData.email}
      Phone: ${formData.phone}
    `)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">List Your Space</h1>
            <p className="mt-4 text-xl text-gray-600">
              Share your venue with event planners across Atlanta
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Venue Name
                    </span>
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Address
                    </span>
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Capacity
                      </span>
                    </label>
                    <Input
                      type="number"
                      required
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Price (per hour)
                      </span>
                    </label>
                    <Input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-3"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amenities (comma separated)
                  </label>
                  <Input
                    type="text"
                    placeholder="WiFi, Parking, Sound System, etc."
                    value={formData.amenities}
                    onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      Images
                    </span>
                  </label>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, images: e.target.files })}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Upload up to 10 high-quality images of your venue
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Listing
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}