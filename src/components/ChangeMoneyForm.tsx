"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changeMoneySchema, ChangeMoneyFormValues } from "@/lib/schemas";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function ChangeMoneyForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ChangeMoneyFormValues>({
        resolver: zodResolver(changeMoneySchema),
    });

    const onSubmit = async (data: ChangeMoneyFormValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/change-money', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard ou nous contacter directement sur WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <Card className="max-w-md mx-auto mt-10 text-center p-8 border-green-200 bg-green-50 shadow-xl">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-green-800 text-2xl">Demande Envoyée !</CardTitle>
                <CardDescription className="text-green-700 mt-2">
                    Nous avons bien reçu votre demande de change. Un conseiller vous contactera très rapidement via WhatsApp avec le taux préférentiel.
                </CardDescription>
                <Button onClick={() => setIsSuccess(false)} className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                    Nouvelle demande
                </Button>
            </Card>
        )
    }

    return (
        <Card className="max-w-xl mx-auto shadow-xl">
            <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl">Demande de Change</CardTitle>
                <CardDescription className="text-red-100">
                    Complétez ce formulaire pour initier une opération d'échange vers ou depuis le Yuan (RMB).
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">
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
                        <label className="text-sm font-medium leading-none">Numéro WhatsApp</label>
                        <Input
                            type="tel"
                            placeholder="+237 ..."
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Montant</label>
                            <Input
                                type="number"
                                placeholder="1000"
                                {...register("amount")}
                                className={errors.amount ? "border-red-500" : ""}
                            />
                            {errors.amount && (
                                <p className="text-sm text-red-500">{errors.amount.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Devise Mère (À Changer)</label>
                            <select
                                {...register("currency")}
                                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.currency ? "border-red-500" : ""}`}
                            >
                                <option value="">Sélectionnez</option>
                                <option value="USD">Dollar (USD)</option>
                                <option value="FCFA">Franc CFA (FCFA)</option>
                            </select>
                            {errors.currency && (
                                <p className="text-sm text-red-500">{errors.currency.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Moyen de Réception (Chine)</label>
                        <select
                            {...register("paymentMethod")}
                            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.paymentMethod ? "border-red-500" : ""}`}
                        >
                            <option value="">Sélectionnez un portemonnaie</option>
                            <option value="alipay">Alipay</option>
                            <option value="wechat_pay">WeChat Pay</option>
                            <option value="bank_transfer">Virement Bancaire (RMB)</option>
                        </select>
                        {errors.paymentMethod && (
                            <p className="text-sm text-red-500">{errors.paymentMethod.message}</p>
                        )}
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-red-700 text-white mt-4" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Envoi en cours...
                            </>
                        ) : (
                            "Soumettre la demande"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
