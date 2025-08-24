import { Trophy, ChevronRight } from 'lucide-react'
import { SiClaude } from 'react-icons/si'
import Link from '@/components/objects/Link'

export default function TopPick() {
  return (
    <div className="px-4 mb-4">
      <h2 className="text-4xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
        <Trophy size={32} />
        Top Pick of 2025
      </h2>
      <div className="p-6 sm:p-8 border-2 border-[#c15f3c] rounded-lg bg-orange-500/5">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <SiClaude className="text-6xl text-[#c15f3c]" />
            <div>
              <h3 className="text-3xl font-bold text-gray-100">Claude</h3>
              <p className="text-gray-400">by Anthropic</p>
              <div className="flex items-center gap-2 mt-2">
                <Link href="/ai/claude" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  View My Usage <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              Claude has become my go-to AI assistant for coding, writing, and learning very quickly.
              I believe their Max 5x ($100/mo) is the best value for budget-conscious consumers like myself.
            </p>
            <div className='flex flex-col items-center gap-y-6 sm:flex-row sm:justify-between'>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">Claude Code</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">Best Tool Calling</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">High Value in Max Plan</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">Quite Fast Interface</span>
              </div>
              <div className="flex items-center justify-end">
                <span className="px-3 py-1 bg-[#c15f3c]/20 text-[#c15f3c] rounded-full text-sm font-medium">
                  Top Overall Pick
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
