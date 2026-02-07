"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt className="text-neon-blue animate-pulse" />,
    title: "Phone",
    description: (
      <a href="tel:+916302242108" className="hover:underline">
        (+91) 630 224 2108{" "}
      </a>
    ),
  },
  {
    icon: <FaEnvelope className="text-neon-purple animate-spin-slow" />,
    title: "Email",
    description: (
      <a href="mailto:syedfarrukh55@gmail.com" className="hover:underline">
        syedfarrukh55@gmail.com
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="text-neon-pink animate-bounce" />,
    title: "Address",
    description: "India",
  },
];

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userPhone = formData.get("user_phone");
    const message = formData.get("message");

    if (!userName || !userEmail || !userPhone || !message) {
      setNotification({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ody1s39",
        "template_99n9s7n",
        form.current,
        "-LWPTfdkhLPgCvbTU"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setShowSuccessPopup(true);
          setNotification(null);
          setTimeout(() => {
            setShowSuccessPopup(false);
          }, 3000);
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setNotification({
            type: "error",
            message: "Failed to send message.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              className="flex flex-col gap-6 p-10 bg-accent rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-primary">Let's work together</h3>
              <p className="text-primary/60">
                Have a project in mind or need help bringing your ideas to life?
                Let's collaborate to create something amazing together. I'm
                always excited to take on new challenges and deliver impactful
                solutions!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  name="user_name"
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="user_lastname"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                  required
                />
                <div className="relative">
                  <PhoneInput
                    country={"us"}
                    inputProps={{
                      name: "user_phone",
                      required: true,
                      autoFocus: true,
                    }}
                    inputStyle={{
                      margin: "25px",
                      width: "90%", // Set to 100% for responsiveness
                      padding: "20px",
                      borderRadius: "10px",
                      backgroundColor: "black",
                      border: "1px solid #555",
                      color: "white",
                    }}
                    dropdownStyle={{
                      backgroundColor: "black",
                      border: "1px solid #555",
                      color: "white",
                    }}
                    buttonStyle={{
                      backgroundColor: "black",
                    }}
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full text-accent font-bold rounded-xl">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-accent">
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px] text-accent/80"
                placeholder="Type your message here."
                name="message"
                required
              />
              <Button size="md" className="max-w-40">
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 text-accent">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent text-primary rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-accent/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {notification && (
        <p
          className={
            notification.type === "success" ? "text-green-500" : "text-red-500"
          }
        >
          {notification.message}
        </p>
      )}
      {showSuccessPopup && (
        <div className="fixed bottom-4 right-4 p-4">
          <div className="bg-green-500 text-white p-3 rounded-lg shadow-lg">
            Message sent successfully!
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
