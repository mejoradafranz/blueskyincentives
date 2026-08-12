import { api } from "./client";

export interface ContactFormInput {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export function submitContact(input: ContactFormInput) {
  return api.post<{ ok: true }>("/contact", input);
}
