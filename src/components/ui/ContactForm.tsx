"use client";

import { useRef, useState, type FormEvent } from "react";
import { contactLimits, validateContactMessage } from "@/lib/contact-validation";
import toast from "react-hot-toast";
import { Button } from "./Button";

export function ContactForm() {
  const submitting = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    const result = validateContactMessage({
      name: values.get("name"),
      email: values.get("email"),
      message: values.get("message"),
    });

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    submitting.current = true;
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const message =
          body && typeof body === "object" && "error" in body && typeof body.error === "string"
            ? body.error
            : "Unable to send your message. Please try again.";
        toast.error(message, { id: toastId });
        return;
      }

      if (!body || typeof body !== "object" || !("success" in body) || body.success !== true) {
        toast.error("We couldn't confirm your message was sent. Please try again later.", { id: toastId });
        return;
      }

      form.reset();
      toast.success("Thank you! Your message has been sent.", { id: toastId });
    } catch {
      toast.error("Couldn't reach the server. Check your connection and try again.", { id: toastId });
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={isSubmitting} className="flex flex-col gap-6">
      <fieldset disabled={isSubmitting} className="flex min-w-0 flex-col gap-8 disabled:opacity-70">
        <legend className="sr-only">Send a message</legend>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-2">
            <label htmlFor="contact-name" className="text-muted">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={contactLimits.name}
              placeholder="Your name"
              className="w-full border-b border-primary/20 bg-transparent py-4 text-base"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <label htmlFor="contact-email" className="text-muted">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={contactLimits.email}
              placeholder="you@youremail.com"
              className="w-full border-b border-primary/20 bg-transparent py-4 text-base"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="contact-message" className="text-muted">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={contactLimits.message}
            placeholder="Tell me a little bit about it"
            rows={4}
            className="w-full resize-y border-b border-primary/20 bg-transparent py-4 text-base"
          />
        </div>
        <div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
