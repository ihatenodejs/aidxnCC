"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IoDocumentTextOutline } from "react-icons/io5"
import { Docs, Doc } from '@/components/docs/Docs'
import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState<Doc | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setSelectedDoc(Docs.Overview)
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-2 text-7xl">
            <IoDocumentTextOutline />
            <h1
              className="font-bold my-2 text-gray-200"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
            >
              Docs
            </h1>
          </div>
          <span className="text-gray-400 text-3xl mt-2">
            An organized collection of advice.
          </span>
        </div>
        <div id="main-content" className="w-full sm:flex mt-6 gap-4">
          <div className="w-full sm:w-[40%] sm:h-[calc(100vh-16rem)] md:w-[35%] md:h-[calc(100vh-16rem)] lg:w-[30%] lg:h-[calc(100vh-16rem)] xl:w-[25%] xl:h-[calc(100vh-16rem)] bg-slate-400/5 text-gray-200 border border-border rounded-lg p-4 overflow-y-auto mb-6 sm:mb-0">
            <h2 className="text-2xl font-semibold mb-2.5">Concepts</h2>
            <div className="space-y-2">
              {Object.values(Docs).map((doc: Doc) => (
                <div
                  key={doc.title}
                  className="p-3 py-2 bg-slate-400/10 hover:bg-slate-400/20 border border-border rounded-md cursor-pointer transition-colors"
                  onClick={() => setSelectedDoc(doc)}
                >
                  <div className="flex items-center gap-2">
                    {doc.icon}
                    <span>{doc.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-[60%] sm:h-[calc(100vh-16rem)] md:w-[65%] md:h-[calc(100vh-16rem)] lg:w-[70%] lg:h-[calc(100vh-16rem)] xl:w-[75%] xl:h-[calc(100vh-16rem)] bg-slate-400/5 text-gray-200 border border-border rounded-lg p-6 overflow-y-auto">
            {isClient && selectedDoc ? (
              selectedDoc.component
            ) : (
              <div className="flex flex-col gap-2 items-center justify-center h-full">
                <Loader2 size={48} className="animate-spin" />
                <span className="text-gray-400">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}