import Header from '@/components/Header'
import MusicWidget from '@/components/widgets/Music'
import MusicInfo from '@/components/objects/MusicInfo'
import Footer from '@/components/Footer'
import { Music as MusicNote } from "lucide-react";

export default function Music() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <div className='mb-6 flex justify-center'>
          <MusicNote size={60} />
        </div>
        <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
          Music and Me
        </h1>
        <div className="flex justify-center max-w-2xl gap-16 mx-auto pt-8">
          <MusicWidget />
          <MusicInfo />
        </div>
      </main>
      <Footer />
    </div>
  )
}