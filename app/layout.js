import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export const metadata = {
  title: {
    default: "Lincoln Computer Science Association",
    template: "%s | LCSA",
  },
  metadataBase: new URL(
    `${
      process.env.NODE_ENV === "production"
        ? "https://mythosbot.com"
        : "http://localhost:3000"
    }`
  ),
  description:
    "The official website of Lincoln's one and only Computer Science Association. ",
  color: "magenta",
  openGraph: {
    title: "Lincoln Computer Science Association",
    description:
      "The official website of Lincoln's one and only Computer Science Association. ",
    type: "website",
    images: "/images/mythos-socialcard.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lincoln Computer Science Association",
    description:
      "The official website of Lincoln's one and only Computer Science Association. ",
    images: ["/images/mythos-socialcard.png"],
  },
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-neutral-50 dark:bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher className="absolute top-4 right-4 z-20" />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}