import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "var(--border-subtle)", background: "var(--surface-page)" }}
    >
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-transparente.png"
            alt="Kingsman Barbearia"
            width={28}
            height={28}
            className="object-contain opacity-60"
          />
          <span className="font-display text-sm text-text-muted tracking-widest">
            KINGSMAN
          </span>
        </div>

        <p className="font-inter text-text-muted text-xs text-center">
          © 2026 Kingsman Barbearia · Workshop Profissional
        </p>

        <p className="font-inter text-text-muted text-xs">
          13 e 14 de Junho · São Paulo
        </p>
      </div>
    </footer>
  );
}
