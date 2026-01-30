import { z } from "zod";

export const applicationSchema = z.object({
    fullName: z.string().min(2, "Le nom complet est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone requis"),
    programType: z.enum(["bachelor", "master", "phd", "language"]),
    preferredUniversity: z.string().optional(),
    message: z.string().optional(),
    documents: z.any().optional(), // File handling is complex, keeping it simple for now
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
