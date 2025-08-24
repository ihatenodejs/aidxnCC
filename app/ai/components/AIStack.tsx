import { Bot } from 'lucide-react'
import Link from '@/components/objects/Link'
import type { AITool } from '../types'

interface AIStackProps {
  tools: AITool[]
}

export default function AIStack({ tools }: AIStackProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'primary': return 'text-green-400 border-green-400 bg-green-400/10'
      case 'active': return 'text-blue-400 border-blue-400 bg-blue-400/10'
      case 'occasional': return 'text-yellow-400 border-yellow-400 bg-yellow-400/10'
      default: return 'text-gray-400 border-gray-400'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'primary': return 'Primary'
      case 'active': return 'Active Use'
      case 'occasional': return 'Occasional Use'
      default: return status
    }
  }

  return (
    <section className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
        <Bot size={24} />
        My AI Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="p-4 border border-gray-700 rounded-lg hover:border-gray-500 transition-all duration-300 flex flex-col">
            <div className="flex items-start justify-between mb-3 flex-1">
              <div className="flex items-center gap-3">
                {tool.icon && <tool.icon className="text-2xl text-gray-300" />}
                {tool.svg && (
                  <div className="w-6 h-6 text-gray-300 fill-current">
                    {tool.svg}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-200">{tool.name}</h3>
                  <p className="text-sm text-gray-400">{tool.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(tool.status)}`}>
                {getStatusLabel(tool.status)}
              </span>
              <span className="flex flex-row items-center gap-4">
                {tool.link && (
                  <Link href={tool.link} className="text-blue-400 hover:text-blue-300 text-sm">
                    View →
                  </Link>
                )}
                {tool.usage && (
                  <Link href={tool.usage} className="text-blue-400 hover:text-blue-300 text-sm">
                    Usage →
                  </Link>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
