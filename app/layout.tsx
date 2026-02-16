export default function RootLayout(props: LayoutProps<'/'>) {
  const { children, sidebar } = props;

  return (
    <html lang='en'>
      <body>
        {sidebar}
        {children}
      </body>
    </html>
  );
}
