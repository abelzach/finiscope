import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { MagicCard } from "@/components/ui/magic-card";

export function ServiceCard({ service }: { service: Service }) {
  return (
    // <Card className="group h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
      <MagicCard
        className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md border border-white/20 dark:border-white/10"
        gradientFrom="#ef444426"  /* red-500 ~15% */
        gradientTo="#1d4ed826"    /* blue-600 ~15% */
        gradientColor="#ef444466" /* red glow on hover */
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-balance">{service.title}</CardTitle>
          <Badge variant="secondary">{service.category}</Badge>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground line-clamp-3">
            {service.summary}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4"
          >
            Learn more{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </CardContent>
      </MagicCard>
    // </Card>
  );
}
