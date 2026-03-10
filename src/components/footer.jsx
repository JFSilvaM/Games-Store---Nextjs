import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <div className="bg-neutral-900 py-8">
    <Container fluid>
      <div className="flex justify-between">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Gaming"
              width={120}
              height={120}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        <ul className="m-0 flex flex-col gap-1.5 p-0">
          <Link href="#">Términos y condiciones</Link>
          <Link href="#">Política de privacidad</Link>
          <Link href="#">Contacto</Link>
          <Link href="#">FAQs</Link>
        </ul>

        <div className="flex items-start justify-end gap-10">
          <Link href="#">
            <img
              src="https://cdn.simpleicons.org/facebook/ededed"
              alt="Facebook"
              className="h-6 w-6"
            />
          </Link>

          <Link href="#">
            <img
              src="https://cdn.simpleicons.org/x/ededed"
              alt="X"
              className="h-6 w-6"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/jfsilvam" target="_blank">
            <svg
              className="text-foreground h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          <Link href="#">
            <img
              src="https://cdn.simpleicons.org/youtube/ededed"
              alt="YouTube"
              className="h-6 w-6"
            />
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t border-solid border-neutral-600 pt-8 text-neutral-400">
        <span>
          Copyright © {new Date().getFullYear()} Gaming - Todos los derechos
          reservados
        </span>
      </div>
    </Container>
  </div>
);

export default Footer;
