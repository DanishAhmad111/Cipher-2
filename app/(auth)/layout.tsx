export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout-container flex min-h-screen flex-col">
      {children}
    </div>
  );
}