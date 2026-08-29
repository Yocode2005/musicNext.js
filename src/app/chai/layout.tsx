
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
        <h2>inner layout Navbar.. ye wala layout es folder  ke sabhi pages ko serve hota hai</h2>
        {children}
        </>
  );
}
