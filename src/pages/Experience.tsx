interface Job {
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    company: 'IBM Solutions Delivery',
    location: 'Commonwealth, Quezon City',
    role: 'Application Developer',
    period: 'March 2024 – Present',
    bullets: [
      'Lead development of 2 enterprise projects for a Multimedia company using .NET + AWS ECS + Docker + SQS + S3 + Redis + Lambda + DynamoDB + RDS.',
      'Leveraged Agile methodologies to iteratively build, test, and ship production-ready features for a grant management system written in AngularJS + .NET + Azure Functions.',
      'Vulnerability remediation and triaging of 5 healthcare systems written in Angular / React / .NET / ASP.NET MVC / .NET Webforms and WinForms.',
      'Developed and deployed enhancements for React Native applications for a healthcare company.',
      'Applied Test-Driven Development and Domain-Driven Design in modular monolith and microservices applications.',
      'Used Docker, GitHub, AWS S3, CodeBuild, CodeDeploy and Azure DevOps for CI/CD.',
      'Spearheaded code reviews for junior developers, improving code maintainability and reducing post-release bugs.',
      'Handled data patches and query optimizations for SQL scripts (PostgreSQL, Oracle, MSSQL).',
    ],
  },
  {
    company: 'Support Services Group Inc.',
    location: 'Makati City',
    role: 'Software Developer / DBA',
    period: 'February 2021 – March 2024',
    bullets: [
      'Acted as technical consultant and support for L1, L2, and L3 — overseeing and addressing client inquiries for multiple legacy systems written in ASP Classic + jQuery, .NET 6.0 + React/Angular, and WordPress.',
      'Co-authored Admin Management System and Human Resource Management System in React JS and .NET 6 API.',
      'Co-authored modernization of legacy CRM from ASP Classic to React JS and .NET 6 API.',
      'Led development of a knowledge base system in AngularJS and .NET 6 API.',
      'Managed and tested database backup and recovery plans.',
      'Led data extraction, loading, purging, and migration processes.',
    ],
  },
  {
    company: 'Servio Technologies, Inc.',
    location: 'Eastwood City, Quezon City',
    role: 'Software Development Engineer',
    period: 'June 2019 – September 2020',
    bullets: [
      'Developed and deployed enhancements for a Human Resource Information System (.NET 3.5/4, WinForms + WebForms + SQL).',
      'Led creation of customized system reports using SQL, SSRS, and Crystal Reports.',
      'Performed manual testing of enhancements in QA/Staging environments.',
      'Handled data patches for HRIS, Time Management, and Payroll systems.',
      'Provided technical solution documents for client change requests.',
    ],
  },
]

export default function Experience() {
  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-1" style={{ color: '#f0f0f0' }}>
        Work Experience
      </h2>
      <p className="text-sm mb-10" style={{ color: '#666' }}>
        Professional journey as a software developer
      </p>

      <div className="space-y-10">
        {jobs.map((job, idx) => (
          <JobCard key={idx} job={job} />
        ))}
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid #222' }}>
        <h3 className="text-base font-medium mb-3" style={{ color: '#e8e8e8' }}>
          Education
        </h3>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium" style={{ color: '#e8e8e8' }}>
              Bachelor of Science, Computer Science
            </p>
            <p className="text-sm mt-0.5" style={{ color: '#888' }}>
              Taguig City University, Taguig City
            </p>
          </div>
          <span
            className="text-xs flex-shrink-0 mt-0.5"
            style={{ color: '#666' }}
          >
            June 2019
          </span>
        </div>
      </div>
    </div>
  )
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
