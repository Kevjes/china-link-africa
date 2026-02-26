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

export const changeMoneySchema = z.object({
    fullName: z.string().min(2, "Le nom complet est requis"),
    phone: z.string().min(8, "Numéro WhatsApp requis"),
    amount: z.string().min(1, "Le montant est requis"),
    currency: z.enum(["USD", "FCFA"]),
    paymentMethod: z.enum(["alipay", "wechat_pay", "bank_transfer"]),
});

export type ChangeMoneyFormValues = z.infer<typeof changeMoneySchema>;
