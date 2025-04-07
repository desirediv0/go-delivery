"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Pricecards() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    plan: "Weekly Plan",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookNow = (plan) => {
    setFormData({ ...formData, plan });
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form data after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            plan: "Weekly Plan",
          });
          setErrors({});
          setSubmitSuccess(false);
          setOpen(false);
        }, 2000);
      } else {
        alert("Failed to send booking request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20 bg-gray-100">
      <div className="  px-4 text-center">
        <span className="text-[#5cdee2] block mt-2 text-6xl font-bold mb-4">
          Plan & Pricing
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-4xl mx-auto px-2 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {/* Weekly Plan Card */}
          <div className="border-2 border-[#0891b2] rounded-3xl p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Weekly Plan
            </h2>

            <div className="text-center">
              <span className="text-lg text-gray-600">Rs.</span>
              <span className="text-5xl font-bold text-[#0891b2] mx-2">
                1599<span className="text-3xl">*</span>
              </span>
              <span className="text-gray-600">7 days</span>
            </div>

            <div className="w-full mt-6 space-y-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Unlimited Ride</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Routine maintenance</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Telematics and GPS</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">No license</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">No registration required</span>
              </div>
            </div>

            <Button
              className="mt-8 w-full py-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-700 hover:to-blue-400 text-white font-medium"
              onClick={() => handleBookNow("Weekly Plan")}
            >
              Book Now
            </Button>
          </div>

          {/* Monthly Plan Card */}
          <div className="border-2 border-[#0891b2] rounded-3xl p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Weekly Plan
            </h2>

            <div className="text-center">
              <span className="text-lg text-gray-600">Rs.</span>
              <span className="text-5xl font-bold text-[#0891b2] mx-2">
                3199<span className="text-3xl">*</span>
              </span>
              <span className="text-gray-600">14 days</span>
            </div>

            <div className="w-full mt-6 space-y-2">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Unlimited Ride</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Routine maintenance</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Telematics and GPS</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">No license</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[#0891b2] mr-2 flex-shrink-0" />
                <span className="text-gray-700">No registration required</span>
              </div>
            </div>

            <Button
              className="mt-8 w-full py-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-700 hover:to-blue-400 text-white font-medium"
              onClick={() => handleBookNow("Monthly Plan")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-black text-white border-none">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">
              Book Your Scooter
            </DialogTitle>
          </DialogHeader>
          {submitSuccess ? (
            <div className="py-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Booking Request Sent!
              </h3>
              <p className="text-gray-300">
                We've received your booking request and will contact you
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div>
                <Input
                  placeholder="Full Name"
                  className={`bg-white text-black ${errors.name ? "border-red-500" : ""
                    }`}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>

              <div>
                <Input
                  placeholder="Email Id"
                  type="email"
                  className={`bg-white text-black ${errors.email ? "border-red-500" : ""
                    }`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              <div>
                <div
                  className={`flex items-center border rounded bg-white ${errors.phone ? "border-red-500" : ""
                    }`}
                >
                  <div className="px-2 border-r">
                    <span className="flex items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                        alt="India"
                        className="w-5 h-3 mr-1"
                      />
                      +91
                    </span>
                  </div>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="border-0 bg-white text-black"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>

              <div>
                <Input
                  placeholder="Enter Location"
                  className={`bg-white text-black ${errors.location ? "border-red-500" : ""
                    }`}
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  disabled={isSubmitting}
                />
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    {errors.location}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Book Now"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}