
import "./globals.scss";
import Menue from "@/app/_components/ui/Menue/Menue";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
      {children}
      <Menue />
      </body>
    </html>
  );
}
