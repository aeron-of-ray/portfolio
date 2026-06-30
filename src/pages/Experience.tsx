import resume from '../data/resume.json'

export default function Experience() {
  const { experience, education } = resume

  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-1" style={{ color: '#f0f0f0' }}>
        Work Experience
      </h2>
      <p className="text-sm mb-10" style={{ color: '#666' }}>
        Professional journey as a software developer
      </p>

      <div className="space-y-10">
        {experience.map((job, idx) => (
          <JobCard key={idx} job={job} />
        ))}
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid #222' }}>
        <h3 className="text-base font-medium mb-3" style={{ color: '#e8e8e8' }}>
          Education
        </h3>
        {education.map((edu, idx) => (
          <div key={idx} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium" style={{ color: '#e8e8e8' }}>
                {edu.degree}
              </p>
              <p className="text-sm mt-0.5" style={{ color: '#888' }}>
                {edu.school}, {edu.location}
              </p>
            </div>
            <span
              className="text-xs flex-shrink-0 mt-0.5"
              style={{ color: '#666' }}
            >
              {edu.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Job {
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
}

function JobCard({ job }: { job: Job }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-1">
        <div>
          <h3 className="text-base font-medium" style={{ color: '#e8e8e8' }}>
            {job.company}
          </h3>
          <p className="text-sm mt-0.5" style={{ color: '#888' }}>
            {job.role} &middot; {job.location}
          </p>
        </div>
        <span
          className="text-xs flex-shrink-0 mt-1 px-2 py-0.5 rounded"
          style={{ color: '#888', backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a' }}
        >
          {job.period}
        </span>
      </div>

      <ul className="mt-3 space-y-2">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm leading-6" style={{ color: '#aaa' }}>
            <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: '#444' }} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
