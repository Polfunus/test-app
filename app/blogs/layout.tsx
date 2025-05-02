export default function BlogsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>BlogsLayout</h1>
            {children}
        </div>
    );
}