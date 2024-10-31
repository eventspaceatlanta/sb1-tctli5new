import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useVenue } from '@/hooks/useVenue';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Loader2, Clock } from 'lucide-react';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

export default function VenueAvailability() {
  const { id } = useParams<{ id: string }>();
  const { venue, loading, error } = useVenue(id);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error || !venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Venue not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Check Availability
          </h1>
          <p className="mt-2 text-gray-600">
            {venue.name} - {venue.location}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Select Date</h2>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Available Time Slots</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Clock className="h-4 w-4" />
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
          {selectedDate && (
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Date</span>
                <span className="font-medium">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Venue</span>
                <span className="font-medium">{venue.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Base Price</span>
                <span className="font-medium">${venue.price.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}