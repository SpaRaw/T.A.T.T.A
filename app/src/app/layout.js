
import "./globals.scss";
import Menue from "@/app/_components/Menue/Menue";
import Spacer from "@/app/_components/Spacer/Spacer";


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
      {children}
      <Spacer />
      <Menue />
      </body>
    </html>
  );
}
