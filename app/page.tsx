import Header from './components/Header';
import HomePg from './components/pages/Home';
import Footer from './components/Footer';
import LastPlayed from './components/widgets/LastPlayed';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <HomePg />
        <LastPlayed />
      </main>
      <Footer />
    </div>
  );
}