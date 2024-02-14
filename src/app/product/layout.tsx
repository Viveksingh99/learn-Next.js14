export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          {children}
          <footer>
            <h1>Child Footer</h1>
          </footer>
        </body>
      </html>
    );
  }