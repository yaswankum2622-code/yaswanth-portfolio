import type { SocialLink } from "@/data/profile";

type FooterProps = {
  name: string;
  socialLinks: SocialLink[];
};

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-[rgba(200,32,45,0.2)] bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/58 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="space-y-1">
          <p className="font-heading text-lg tracking-[0.08em] text-white">Yaswanth Forge</p>
          <p>Yaswanth Kumar Akkireddy &middot; AI Engineer &middot; Bengaluru &middot; 2026</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
