import "./globals.css";

export const metadata = {
  title: "SORLASTE KHR",
  description: "Innovation in Data Center Power",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
