import "@css/all.min.css";
import "@css/animate.css";
import "@css/animate.min.css";
import "@css/animated-text.css";
import "@css/bootstrap-icons.css";
import "@css/bootstrap.min.css";
import "@css/dropdown.css";
import "@css/flaticon.css";
import "@css/magnific-popup.min.css";
import "@css/meanmenu.min.css";
import "@css/owl.carousel.min.css";
import "@css/owl.transitions.css";
import "@css/responsive.css";
import "@css/style.css";
// import "@css/swiper.min.css";
import Preloader from "@/components/Preloader";
import "@css/theme-default.css";
import { Heebo, Jost } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--heebo",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--jost",
  display: "swap",
});

const fontFamily = `${jost.variable} ${heebo.variable}`;

export const metadata = {
  title:
    "Graphtech - Make your small business to another level ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontFamily}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}