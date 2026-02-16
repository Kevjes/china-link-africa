import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ApplicationFormValues } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body: ApplicationFormValues = await req.json();

    const {
      fullName,
      email,
      phone,
      programType,
      preferredUniversity,
      message,
    } = body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Site Web China Link Africa" <${process.env.EMAIL_USER}>`,
      to: "contact@chinalinkafrica.net", // Send to admin
      replyTo: email, // Allow reply directly to the applicant
      subject: `Nouvelle Candidature de ${fullName}`,
      html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #d32f2f;">Nouvelle Soumission de Formulaire</h2>
                    <p>Un nouvel utilisateur a soumis une candidature via le site web.</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nom Complet</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                         <tr style="background-color: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Téléphone / WhatsApp</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Type de Programme</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${programType}</td>
                        </tr>
                         <tr style="background-color: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Université Préférée</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${preferredUniversity || "Non spécifié"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${message || "Aucun message supplémentaire"}</td>
                        </tr>
                    </table>

                    <p style="margin-top: 20px; font-size: 12px; color: #777;">
                        Ce courriel a été envoyé automatiquement depuis le site web China Link Africa.
                    </p>
                </div>
            `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
