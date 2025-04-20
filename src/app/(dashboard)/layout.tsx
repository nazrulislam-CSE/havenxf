import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <div className="flex pt-[70px] overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
            {children}
            <Footer />
          </div>
          </div>
        </div>
      </body>
    </html>
  );
}