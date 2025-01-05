import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import domains from '../../data/domains.json'

export default function About() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <FontAwesomeIcon icon={faLink} className="text-6xl mb-6" />
            <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                My Domains
            </h1>
            <div className="p-6">
                {domains.map(domain => (
                    <div key={domain.id} className="mb-4">
                        <h2 className="text-2xl font-semibold text-gray-200">{domain.domain}</h2>
                        <p className="text-gray-300">{domain.usage}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}