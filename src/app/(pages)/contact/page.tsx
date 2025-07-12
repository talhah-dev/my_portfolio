"use client";
import BodyWrapper from "@/app/bodyWrapper";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!data.name.trim() || !data.email.trim()) {
            return toast.error("Name and Email are required");
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return toast.error("Please enter a valid email address");
        }

        setIsSubmitting(true);

        try {

            const api = process.env.NEXT_PUBLIC_WEB3FORM_API;

            const response = await axios.post(
                "https://api.web3forms.com/submit",
                {
                    access_key: api,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    botcheck: false, // Ensure botcheck is false
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.success) {
                toast.success("Message sent successfully!");
                setData({ name: "", email: "", message: "" }); // Reset form on success
            } else {
                toast.error(response.data.message || "Failed to send message");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while sending the message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 lg:pt-0 pt-5">
                <h2 className="lg:text-3xl text-2xl lg:font-semibold font-medium text-zinc-300">
                    Contact Me
                </h2>
                <div className="w-16 lg:w-20 h-1.5 lg:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <form
                    onSubmit={submitFormHandler}
                    className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:mt-8 mt-6"
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value={process.env.NEXT_PUBLIC_WEB3FORM_API || ""}
                    />

                    <input
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        value={data.name}
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="w-full rounded-lg border border-zinc-700 p-3 bg-transparent"
                        required
                    />
                    <input
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        value={data.email}
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="w-full rounded-lg border border-zinc-700 p-3 bg-transparent"
                        required
                    />
                    <textarea
                        placeholder="Message"
                        name="message"
                        rows={5}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        value={data.message}
                        className="w-full lg:col-span-2 rounded-lg border border-zinc-700 p-3 bg-transparent"
                    />

                    <input type="checkbox" name="botcheck" className="hidden" />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-medium transition-all duration-500 hover:opacity-60 rounded-lg bg-white text-black text-center p-3 lg:col-span-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>

                <div className="mt-5 lg:mt-8">
                    <iframe
                        className="w-full grayscale brightness-50 h-80 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.039042704875!2d67.10544807401315!3d24.89664984381109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUzJzQ3LjkiTiA2N8KwMDYnMjguOSJF!5e0!3m2!1sen!2s!4v1751865494755!5m2!1sen!2s"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </BodyWrapper>
    );
};

export default Page;