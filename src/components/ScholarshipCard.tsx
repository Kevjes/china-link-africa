import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Button } from "./ui/Button";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

interface ScholarshipProps {
    title: string;
    type: string;
    amount: string;
    university?: string;
    coverage: string;
    link?: string;
}

export default function ScholarshipCard({ title, type, amount, university, coverage, link = "/apply" }: ScholarshipProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-red-600/10">
                        {type}
                    </span>
                    {university && (
                        <span className="text-xs text-muted-foreground">{university}</span>
                    )}
                </div>
                <CardTitle className="mt-2 text-xl">{title}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1 text-primary font-medium">
                    <BadgeCheck className="h-4 w-4" />
                    {coverage}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 line-clamp-3">
                    Cette bourse offre un financement de <strong>{amount}</strong>.
                    Idéale pour les étudiants souhaitant poursuivre leurs études en Chine.
                </p>
            </CardContent>
            <CardFooter>
                <Link href={link} className="w-full">
                    <Button className="w-full group">
                        Postuler
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
