import { Open_Sans } from "next/font/google";
import Link from "next/link";

// These styles apply to every route in the application
import "./global.css";
import styles from "./rootStyle.module.css";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href={"/"}>
            FRIENDS OF THE COMMUNITY
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLinks} href="/AboutUs">
            About Us
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/conference">
            Conference
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/ContactUs">
            Contact Us
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
