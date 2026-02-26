import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ChangeMoneyFormValues } from '@/lib/schemas';

export async function POST(req: Request) {
    try {
        const body: ChangeMoneyFormValues = await req.json();
        const { fullName, phone, amount, currency, paymentMethod } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true, // true for 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Convert enum value to readable text
        const getPaymentMethodText = (method: string) => {
            if (method === 'alipay') return 'Alipay';
            if (method === 'wechat_pay') return 'WeChat Pay';
            if (method === 'bank_transfer') return 'Virement Bancaire Chinois';
            return method;
        };

        const mailOptions = {
            from: `"China Link Africa Change" <${process.env.EMAIL_USER}>`,
            to: "contact@chinalinkafrica.net",
            subject: `Demande de Change - ${amount} ${currency} - ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
                    <h2 style="color: #d32f2f; text-align: center; border-bottom: 2px solid #d32f2f; padding-bottom: 10px;">Nouvelle Demande de Change de Monnaie</h2>
                    
                    <p>Une nouvelle requête d'échange a été soumise sur votre site.</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 40%;">Nom Complet</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Numéro WhatsApp</td>
                            <td style="padding: 12px; border: 1px solid #ddd;"><a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #007bff; text-decoration: none;">${phone}</a></td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Montant à Changer</td>
                            <td style="padding: 12px; border: 1px solid #ddd; color: #d32f2f; font-weight: bold; font-size: 16px;">${amount} ${currency}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Mode de Réception</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">${getPaymentMethodText(paymentMethod)}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 30px; padding: 15px; background-color: #fcf8e3; border: 1px solid #faebcc; border-radius: 5px;">
                        <strong>Action Requise :</strong> Veuillez contacter le client sur WhatsApp pour confirmer le taux du jour et finaliser la transaction.
                    </div>
                    
                    <p style="margin-top: 20px; font-size: 11px; color: #999; text-align: center;">
                        Email généré automatiquement depuis la plateforme China Link Africa.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Request sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error handling change money request:', error);
        return NextResponse.json({ message: 'Failed to process request' }, { status: 500 });
    }
}
