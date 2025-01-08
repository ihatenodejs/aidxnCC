import Header from './components/Header';
import HomePg from './components/pages/Home';
import Footer from './components/Footer';
import NowPlaying from './components/widgets/NowPlaying';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <HomePg />
        <NowPlaying />
      </main>
      <Footer />
    </div>
  );
}