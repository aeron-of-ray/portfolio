interface SkillGroup {
  category: string
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React JS', 'Angular', 'AngularJS', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['C# .NET Core', '.NET API', 'EF Core', 'ASP.NET MVC', 'ASP Classic', 'Python', 'Node.js'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MSSQL', 'MySQL', 'Oracle', 'SQLite', 'DynamoDB', 'Redis', 'Supabase', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS ECS', 'AWS S3', 'AWS Lambda', 'AWS SQS', 'AWS RDS', 'AWS CodeBuild', 'AWS CodeDeploy', 'Docker', 'Azure DevOps', 'Azure Functions', 'GitHub Actions', 'GitLab CI', 'CloudFlare'],
  },
  {
    category: 'Reporting',
    items: ['SSRS', 'Power BI', 'Crystal Reports'],
  },
  {
    category: 'Other Tools',
    items: ['Git', 'GitHub', 'GitLab', 'WordPress', 'Shopify', 'Power Apps', 'AI-Assisted Development'],
  },
]

export default function Skills() {
  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-1" style={{ color: '#f0f0f0' }}>
        Tech Stack &amp; Skills
      </h2>
      <p className="text-sm mb-10" style={{ color: '#666' }}>
        Technologies I work with
      </p>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#555' }}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-md"
                  style={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    color: '#ccc',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid #222' }}>
        <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#555' }}>
          Practices &amp; Methodologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Agile / Scrum',
            'Test-Driven Development',
            'Domain-Driven Design',
            'Microservices',
            'Modular Monolith',
            'CI/CD',
            'Code Review',
            'Vulnerability Remediation',
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm rounded-md"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #2a2a2a',
                color: '#888',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
