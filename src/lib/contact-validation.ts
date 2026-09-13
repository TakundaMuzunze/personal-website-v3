export const contactLimits = { name: 100, email: 254, message: 5000 };

export type ContactMessage = { name: string; email: string; message: string };

export function validateContactMessage(input: unknown): { success: true; data: ContactMessage } | { success: false; error: string } {
  if (!input || typeof input !== "object") {
    return { success: false, error: "Please provide your name, email and message." };
  }

  const fields = input as Record<string, unknown>;
  if (typeof fields.name !== "string" || typeof fields.email !== "string" || typeof fields.message !== "string") {
    return { success: false, error: "Please provide your name, email and message." };
  }

  const data = { name: fields.name.trim(), email: fields.email.trim(), message: fields.message.trim() };
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "All fields are required." };
  }

  if (data.name.length > contactLimits.name || data.email.length > contactLimits.email || data.message.length > contactLimits.message) {
    return { success: false, error: "Please keep your name under 100 characters, email under 254 and message under 5,000." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || /[\r\n]/.test(data.name)) {
    return { success: false, error: "Please enter a valid name and email address." };
  }

  return { success: true, data };
}
