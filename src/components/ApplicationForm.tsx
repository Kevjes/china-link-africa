"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationFormValues } from "@/lib/schemas";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function ApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ApplicationFormValues>({
        resolver: zodResolver(applicationSchema),
    });

    const onSubmit = async (data: ApplicationFormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
    };

    if (isSuccess) {
        return (
            <Card className="max-w-md mx-auto mt-10 text-center p-8 border-green-200 bg-green-50">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-green-800 text-2xl">Candidature Envoyée !</CardTitle>
                <CardDescription className="text-green-700 mt-2">
                    Nous avons bien reçu votre demande. Un conseiller vous contactera sous 24h via WhatsApp ou Email.
                </CardDescription>
                <Button onClick={() => setIsSuccess(false)} className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                    Nouvelle demande
                </Button>
            </Card>
        )
    }

    return (
        <Card className="max-w-xl mx-auto mt-10 shadow-xl">
            <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl">Formulaire de Candidature</CardTitle>
                <CardDescription className="text-red-100">
                    Remplissez ce formulaire pour postuler à une bourse ou obtenir une assistance visa.
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Nom Complet
                        </label>
                        <Input
                            placeholder="Votre nom"
                            {...register("fullName")}
                            className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && (
                            <p className="text-sm text-red-500">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Email</label>
                        <Input
                            type="email"
                            placeholder="email@exemple.com"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Téléphone (WhatsApp)</label>
                        <Input
                            placeholder="+237 ..."
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Type de Programme</label>
                        <select
                            {...register("programType")}
                            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.programType ? "border-red-500" : ""}`}
                        >
                            <option value="">Sélectionnez une option</option>
                            <option value="bachelor">Licence (Bachelor)</option>
                            <option value="master">Master</option>
                            <option value="phd">Doctorat (PhD)</option>
                            <option value="language">Langue Chinoise</option>
                        </select>
                        {errors.programType && (
                            <p className="text-sm text-red-500">{errors.programType.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Université Préférée (Optionnel)</label>
                        <Input
                            placeholder="Ex: Tsinghua, Zhejiang..."
                            {...register("preferredUniversity")}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Message (Optionnel)</label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Détails supplémentaires..."
                            {...register("message")}
                        />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-red-700 text-white" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Envoi en cours...
                            </>
                        ) : (
                            "Envoyer ma candidature"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
