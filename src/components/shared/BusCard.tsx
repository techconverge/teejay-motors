"use client";

import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { urlFor } from "@/services/sanity/sanityClient";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Button from "../ui/Button";

// Define schema using zod
const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  pickupLocation: z
    .string()
    .min(2, { message: "Pickup location must be at least 2 characters." }),
  destination: z
    .string()
    .min(2, { message: "Destination must be at least 2 characters." }),
  timeOfPickup: z.string().nonempty({ message: "Pickup time is required." }),
  estimatedDuration: z
    .string()
    .nonempty({ message: "Estimated duration is required." }),
  numberOfPassengers: z
    .string()
    .nonempty({ message: "Number of passengers must not be empty" }),
});

// Infer TypeScript type from schema
type BookingFormValues = z.infer<typeof bookingSchema>;

interface BusProps {
  title: string;
  imageUrl: string;
  numberOfSeats: number;
}

export function BusCard({ title, imageUrl, numberOfSeats }: BusProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      numberOfPassengers: "",
      pickupLocation: "",
      destination: "",
      timeOfPickup: "",
      estimatedDuration: "",
    },
  });

  const [formStatus, setFormStatus] = React.useState<
    "success" | "error" | null
  >(null);

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    try {
      const message = `Booking Details: \n\n*${title}* \n\nName: ${
        data.name
      }\nNo of Passengers: ${data.numberOfPassengers},\nPickup Location: ${
        data.pickupLocation
      }\nDestination: ${data.destination}\nTime of Pickup: ${new Date(
        data.timeOfPickup
      ).toLocaleString()}\nEstimated Duration: ${data.estimatedDuration} hours`;

      // Construct WhatsApp URL
      const whatsappURL = `https://wa.me/+2349065566300?text=${encodeURIComponent(
        message
      )}`;

      // Redirect to WhatsApp
      window.location.href = whatsappURL;

      // Simulate successful submission
      setFormStatus("success");
      form.reset();
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <Dialog>
      <div className="w-full rounded-2xl flex flex-col h-[350px] lg:h-[450px] relative p-2 bg-[#f5f5f5]">
        <div className="flex-1 overflow-hidden rounded-2xl relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={urlFor(imageUrl).width(500).url()}
            alt="Bus image"
          />
        </div>
        <div className="w-full flex-row flex items-end bg-white p-2 px-3 lg:py-5 rounded-lg">
          <div className="flex-1">
            <h2 className="font-clash font-medium text-xl lg:text-xl">
              {title}
            </h2>
            <p className="subtext  mb-4 !text-sm lg:text-base">
              {numberOfSeats} Seaters
            </p>
            <DialogTrigger asChild>
              <div>
                <Button
                  type="button"
                  title="Book Now"
                  className="w-full !items-center !justify-center !text-center"
                />
              </div>
            </DialogTrigger>
          </div>
        </div>
      </div>
      <DialogContent className=" font-lexend  max-h-[80vh] overflow-y-scroll">
        <DialogHeader>
          <div>
            <div className=" w-16 border-2 border-black h-16 bg-slate-400 relative overflow-hidden rounded-2xl">
              <Image
                layout="fill"
                objectFit="cover"
                src={urlFor(imageUrl).width(500).url()}
                alt="Bus image"
              />
            </div>
          </div>
          <DialogTitle className="mt-4 font-lexend text-start ">
            {title}
          </DialogTitle>
          <p className="text-start">{numberOfSeats} Seater bus</p>
          <DialogDescription className="pr-20 font-lexend  text-start">
            To assist with your request, could you please provide the following
            details?
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfPassengers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number Of Passengers</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter number of passengers"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter pickup location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter destination" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeOfPickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time of Pickup</FormLabel>
                  <FormControl>
                    <Input
                      type="datetime-local"
                      placeholder="Select pickup time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="estimatedDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Duration (hours)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter estimated duration"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              title="  Submit"
              className="w-full !items-center !justify-center !text-center"
            />
          </form>
        </Form>
        {formStatus === "success" && (
          <Alert variant="default" className="mt-4">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your booking was submitted successfully.
            </AlertDescription>
          </Alert>
        )}
        {formStatus === "error" && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BusCard;
