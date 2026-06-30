import { Link } from 'react-router-dom'
import resume from '../data/resume.json'

export default function Home() {
  const { personal, socialLinks } = resume
  const { company, techStack, practices } = personal.bioHighlights

  return (
    <div className="py-8">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-1" style={{ color: '#f0f0f0' }}>
          {personal.name}
        </h1>
        <p className="text-base mb-6" style={{ color: '#888' }}>
          {personal.title}
        </p>

        <div className="text-[0.95rem] leading-7 space-y-3" style={{ color: '#ccc' }}>
          <p>
            Hello, I'm Aeron, a full-stack application developer based in{' '}
            <span style={{ color: '#e8e8e8' }}>{personal.location}</span>.
          </p>
          <p>
            Currently working at{' '}
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b transition-colors duration-150"
              style={{ color: '#a8c5da', borderColor: 'rgba(168,197,218,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#a8c5da')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(168,197,218,0.3)')}
            >
              {company.name}
            </a>{' '}
            as an Application Developer, building enterprise systems using{' '}
            <span style={{ color: '#e8e8e8' }}>{techStack}</span>.
          </p>
          <p>
            I specialize in full-stack development with a focus on maintainable architectures,
            cloud-native solutions, and developer experience. I enjoy applying{' '}
            <span style={{ color: '#e8e8e8' }}>{practices}</span> in modular
            monolith and microservices applications.
          </p>
        </div>
      </section>

      <div className="mb-10" style={{ borderBottom: '1px solid #222' }} />

      {/* Quick links */}
      <section className="mb-10">
        <div className="grid grid-cols-1 gap-3">
          <QuickLink
            to="/experience"
            label="Work Experience"
            description={resume.experience.map(j => j.company).join(', ')}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            }
          />
          <QuickLink
            to="/skills"
            label="Tech Stack & Skills"
            description={resume.skills.slice(0, 3).map(s => s.category).join(', ') + ' and more'}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
          />
          <ExternalLink
            href={`mailto:${personal.email}`}
            label="Get in Touch"
            description={personal.email}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
        </div>
      </section>

      <div className="mb-10" style={{ borderBottom: '1px solid #222' }} />

      {/* Find me on */}
      <section>
        <p className="text-sm mb-4" style={{ color: '#666' }}>Find me on</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150"
              style={{ color: '#888' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ccc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-3 text-sm" style={{ color: '#666' }}>
          Or mail me at{' '}
          <a
            href={`mailto:${personal.email}`}
            style={{ color: '#888' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ccc')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            className="transition-colors duration-150"
          >
            {personal.email}
          </a>
        </div>
      </section>
    </div>
  )
}

function QuickLink({
  to,
  label,
  description,
  icon,
}: {
  to: string
  label: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-150"
      style={{ border: '1px solid #1e1e1e', backgroundColor: 'transparent' }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#1a1a1a'
        e.currentTarget.style.borderColor = '#333'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.borderColor = '#1e1e1e'
      }}
    >
      <span style={{ color: '#555' }} className="group-hover:text-[#888] transition-colors flex-shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-sm font-medium" style={{ color: '#e8e8e8' }}>
          {label}
        </div>
        <div className="text-xs mt-0.5 truncate" style={{ color: '#666' }}>
          {description}
        </div>
      </div>
      <span className="ml-auto flex-shrink-0 transition-colors" style={{ color: '#444' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

function ExternalLink({
  href,
  label,
  description,
  icon,
}: {
  href: string
  label: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-150"
      style={{ border: '1px solid #1e1e1e', backgroundColor: 'transparent' }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#1a1a1a'
        e.currentTarget.style.borderColor = '#333'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.borderColor = '#1e1e1e'
      }}
    >
      <span style={{ color: '#555' }} className="group-hover:text-[#888] transition-colors flex-shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-sm font-medium" style={{ color: '#e8e8e8' }}>
          {label}
        </div>
        <div className="text-xs mt-0.5 truncate" style={{ color: '#666' }}>
          {description}
        </div>
      </div>
      <span className="ml-auto flex-shrink-0" style={{ color: '#444' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </span>
    </a>
  )
}
