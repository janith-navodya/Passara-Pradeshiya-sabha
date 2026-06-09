"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full">
          <Globe className="w-4 h-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")} className={locale === "en" ? "bg-accent" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("si")} className={locale === "si" ? "bg-accent" : ""}>
          සිංහල
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ta")} className={locale === "ta" ? "bg-accent" : ""}>
          தமிழ்
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
