import "./meditationModule.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="map-container grid grid-cols-12 grid-rows-12">
      <div className="row-start-2 row-end-12 col-start-2 col-end-12 overflow-auto">
        <div className="bg-white shadow-2xl rounded-2xl">{children}</div>
      </div>
    </div>
  );
}
