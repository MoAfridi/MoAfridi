import { Facebook, Instagram, Twitter, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Software Engineer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:mdafridihossainyasin@gmail.com"
              className="text-muted-foreground hover:text-[#EA4335] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/8801865999820"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/MoAfridi24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/moafridi24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/MoAfridi24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.threads.net/@moafridi24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#000000] transition-colors"
              aria-label="Threads"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c-1.2 0-2.4.2-3.5.6C6.3 4.5 5 6 4.4 7.8c-.3.9-.4 1.8-.4 2.7 0 2.1.8 4.1 2.2 5.6 1.4 1.5 3.3 2.4 5.3 2.7.5.1 1 .1 1.5.1s1-.1 1.5-.1c2-.3 3.9-1.2 5.3-2.7 1.4-1.5 2.2-3.5 2.2-5.6 0-.9-.1-1.8-.4-2.7C20.9 6 19.7 4.5 17.5 3.6 16.4 3.2 15.2 3 12 3z" />
                <path d="M15.5 10.5c-.3-.6-.7-1-1.2-1.4-.8-.6-1.8-.9-2.8-.9-1.6 0-3 .8-3.9 2.1" />
                <path d="M8.5 13.5c.3.6.7 1 1.2 1.4.8.6 1.8.9 2.8.9 1.6 0 3-.8 3.9-2.1" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
