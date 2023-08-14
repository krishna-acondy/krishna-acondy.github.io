export type Technology =
  | 'Android'
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'Node.js'
  | 'TypeScript'
  | 'Angular'
  | 'React'
  | 'Ember.js'
  | 'AWS'
  | 'Salesforce'
  | 'Ruby on Rails'
  | 'C#'
  | 'Dotnet Core'
  | 'Go'
  | 'Java'
  | 'GraphQL'
  | 'PostgreSQL'
  | 'MS SQL'
  | 'MySQL'
  | 'DynamoDB'
  | 'REST APIs'
  | 'Firebase'
  | 'Gatsby'
  | 'E2E Testing';

export type Theme =
  | 'Project Management'
  | 'People Management'
  | 'Technical Leadership'
  | 'Mentoring'
  | 'Design'
  | 'Frontend Development'
  | 'Backend Development'
  | 'DevOps'
  | 'Infrastructure'
  | 'CI/CD';

export type Tool =
  | 'SVN'
  | 'Docker'
  | 'Lerna'
  | 'Turborepo'
  | 'GitHub'
  | 'Jenkins CI'
  | 'JFrog Artifactory'
  | 'Terraform'
  | 'GitHub Actions'
  | 'AWS CDK'
  | 'Figma'
  | 'Adobe Creative Cloud Suite'
  | 'Serverless'
  | 'Linear'
  | 'Jira'
  | 'FullStory'
  | 'ProductBoard'
  | 'Notion'
  | 'Interwoven CMS'
  | 'Prismic CMS'
  | 'Ghost CMS'
  | 'Plumtree Portal'
  | 'Sharepoint'
  | 'Microsoft TFS';

export type WorkLocation = {
  city: string;
  country: string;
};

export type Role = {
  designation: string;
  company: string;
  description: string;
  url: string;
  location: WorkLocation;
  startDate: Date;
  endDate?: Date;
  tech: Technology[];
  themes: Theme[];
  tools: Tool[];
};

export const volunteerRoles: Role[] = [
  {
    designation: 'Volunteer Developer',
    company: 'Internet Freedom Foundation',
    url: 'https://internetfreedom.in',
    description:
      'Worked with a team of volunteers to design and develop a website for the Digital Patrakar Defence Clinic, which is a project offering pro bono legal advice and assistance to Indian journalists.',
    location: { city: 'Remote', country: 'India' },
    startDate: new Date('2021-10-01'),
    tech: ['AWS', 'CSS', 'HTML', 'JavaScript', 'Node.js'],
    themes: ['Design', 'DevOps', 'CI/CD', 'Frontend Development'],
    tools: [
      'Docker',
      'GitHub',
      'GitHub Actions',
      'Figma',
      'Adobe Creative Cloud Suite',
      'Ghost CMS',
    ],
  },
  {
    designation: 'Volunteer Developer',
    company: 'Newslaundry',
    url: 'https://www.newslaundry.com/',
    description:
      'Working with a team of volunteers to help design and develop features on the Newslaundry website.',
    location: { city: 'Remote', country: 'India' },
    startDate: new Date('2022-10-01'),
    tech: ['CSS', 'HTML', 'JavaScript', 'Node.js', 'React'],
    themes: ['Design', 'DevOps', 'CI/CD', 'Frontend Development'],
    tools: [
      'Docker',
      'GitHub',
      'GitHub Actions',
      'Figma',
      'Adobe Creative Cloud Suite',
    ],
  },
];

export const partTimeRoles: Role[] = [
  {
    designation: 'Lead Developer',
    company: 'SASjs',
    url: 'https://github.com/sasjs',
    description:
      'Set up and developed open source projects including a CLI, a VS Code extension and a number of TypeScript libraries.',
    location: { city: 'Remote', country: 'United Kingdom' },
    startDate: new Date('2020-03-01'),
    endDate: new Date('2022-06-30'),
    tech: [
      'AWS',
      'C#',
      'CSS',
      'Dotnet Core',
      'GraphQL',
      'HTML',
      'JavaScript',
      'Node.js',
      'Angular',
      'REST APIs',
      'React',
      'TypeScript',
      'PostgreSQL',
    ],
    themes: [
      'Design',
      'Mentoring',
      'People Management',
      'Project Management',
      'Technical Leadership',
      'DevOps',
      'Infrastructure',
      'CI/CD',
      'Frontend Development',
      'Backend Development',
    ],
    tools: [
      'Docker',
      'Turborepo',
      'GitHub',
      'GitHub Actions',
      'AWS CDK',
      'Figma',
      'Adobe Creative Cloud Suite',
      'Serverless',
      'Linear',
      'Jira',
      'FullStory',
      'ProductBoard',
      'Notion',
    ],
  },
  {
    designation: 'App Developer',
    company: 'GetMeFit',
    url: 'https://www.gmfwellbeing.com/',
    description:
      'Prototyped, developed and released a platform for fitness trainers to provide classes online.',
    location: { city: 'Remote', country: 'United Kingdom' },
    startDate: new Date('2020-01-01'),
    endDate: new Date('2022-01-30'),
    tech: [
      'Firebase',
      'CSS',
      'GraphQL',
      'HTML',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'React',
      'TypeScript',
      'Gatsby',
    ],
    themes: [
      'Design',
      'Project Management',
      'Technical Leadership',
      'DevOps',
      'Infrastructure',
      'CI/CD',
      'Frontend Development',
      'Backend Development',
    ],
    tools: [
      'Docker',
      'Prismic CMS',
      'GitHub',
      'GitHub Actions',
      'Figma',
      'Adobe Creative Cloud Suite',
      'Notion',
    ],
  },
];

export const workRoles: Role[] = [
  {
    designation: 'Lead Software Engineer',
    company: 'CattleEye',
    url: 'https://cattleeye.com',
    description:
      'Leading a team with end to end responsibility for new feature development - requirement gathering, design, implementation, delivery, promotion and feedback. Building CattleEye apps and APIs from scratch.',
    location: { city: 'Belfast', country: 'United Kingdom' },
    startDate: new Date('2021-05-01'),
    tech: [
      'AWS',
      'C#',
      'CSS',
      'Dotnet Core',
      'Go',
      'GraphQL',
      'HTML',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'React',
      'TypeScript',
      'PostgreSQL',
      'DynamoDB',
    ],
    themes: [
      'Design',
      'Mentoring',
      'People Management',
      'Project Management',
      'Technical Leadership',
      'DevOps',
      'Infrastructure',
      'CI/CD',
      'Frontend Development',
      'Backend Development',
    ],
    tools: [
      'Docker',
      'Turborepo',
      'GitHub',
      'GitHub Actions',
      'AWS CDK',
      'Figma',
      'Adobe Creative Cloud Suite',
      'Serverless',
      'Linear',
      'Jira',
      'FullStory',
      'ProductBoard',
      'Notion',
    ],
  },
  {
    designation: 'Senior Frontend Engineer',
    company: 'ScreenCloud',
    url: 'https://screen.cloud',
    description:
      'Led teams working on ScreenCloud’s integrations with various third party APIs. Built an interactive live streaming app using React and AWS Interactive Video Service.',
    location: { city: 'Belfast', country: 'United Kingdom' },
    startDate: new Date('2019-12-01'),
    endDate: new Date('2021-03-31'),
    tech: [
      'AWS',
      'CSS',
      'Go',
      'GraphQL',
      'HTML',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'React',
      'TypeScript',
      'DynamoDB',
      'PostgreSQL',
    ],
    themes: [
      'Mentoring',
      'Project Management',
      'Technical Leadership',
      'DevOps',
      'Infrastructure',
      'CI/CD',
      'Frontend Development',
      'Backend Development',
    ],
    tools: [
      'Lerna',
      'Docker',
      'GitHub Actions',
      'AWS CDK',
      'Figma',
      'Serverless',
      'Jira',
      'FullStory',
      'Notion',
    ],
  },
  {
    designation: 'Senior Software Developer',
    company: 'Philips',
    url: 'https://www.philips.co.uk/healthcare/sites/pathology/home',
    description:
      'Spearheaded a large-scale overhaul of the existing apps, implementing a design system and migrating to a modern web stack.',
    location: { city: 'Belfast', country: 'United Kingdom' },
    startDate: new Date('2017-06-01'),
    endDate: new Date('2019-11-30'),
    tech: [
      'CSS',
      'C#',
      'HTML',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'Angular',
      'TypeScript',
      'Dotnet Core',
      'MS SQL',
      'PostgreSQL',
    ],
    themes: [
      'Design',
      'Mentoring',
      'Project Management',
      'Technical Leadership',
      'DevOps',
      'CI/CD',
      'Frontend Development',
      'Backend Development',
    ],
    tools: [
      'Docker',
      'GitHub',
      'GitHub Actions',
      'Terraform',
      'Figma',
      'Adobe Creative Cloud Suite',
      'Jira',
    ],
  },
  {
    designation: 'Software Developer',
    company: 'Philips',
    url: 'https://www.philips.com/a-w/about/innovation/research.html',
    description:
      'Worked in early-stage prototyping and concept creation for the health tech, lighting and consumer lifestyle divisions within Philips.',
    location: { city: 'Eindhoven', country: 'The Netherlands' },
    startDate: new Date('2014-09-01'),
    endDate: new Date('2017-05-31'),
    tech: [
      'CSS',
      'C#',
      'HTML',
      'JavaScript',
      'Ruby on Rails',
      'Salesforce',
      'Java',
      'Android',
      'Node.js',
      'REST APIs',
      'Angular',
      'TypeScript',
      'MySQL',
      'MS SQL',
    ],
    themes: [
      'Design',
      'Mentoring',
      'Project Management',
      'Technical Leadership',
      'Frontend Development',
      'Backend Development',
    ],
    tools: [
      'Docker',
      'GitHub',
      'Microsoft TFS',
      'Terraform',
      'Figma',
      'Adobe Creative Cloud Suite',
      'Jira',
    ],
  },
  {
    designation: 'Systems Engineer, Systems Integration',
    company: 'Infosys',
    url: 'https://www.infosys.com/',
    description:
      'Involved in a number of maintenance and new feature development projects for Fortune 500 clients in the banking and healthcare domains.',
    location: { city: 'Mysore', country: 'India' },
    startDate: new Date('2009-07-01'),
    endDate: new Date('2012-07-31'),
    tech: ['CSS', 'C#', 'HTML', 'JavaScript', 'REST APIs', 'MS SQL', 'MySQL'],
    themes: ['Project Management', 'Frontend Development'],
    tools: ['SVN', 'Interwoven CMS', 'Plumtree Portal', 'Sharepoint'],
  },
];
