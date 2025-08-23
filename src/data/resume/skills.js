// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services (AWS S3, EC2)',
    competency: 2,
    category: ['Cloud', 'Web Development', 'Tools'],
  },
  {
    title: 'Microsoft Azure (Synapse, Data Factory)',
    competency: 3,
    category: ['Cloud', 'Web Development', 'Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Cloud', 'Web Development', 'Tools'],
  },
  {
    title: 'Atlassian Jira',
    competency: 5,
    category: ['Product & Project Management', 'Tools'],
  },
  {
    title: 'Atlassian Confluence',
    competency: 5,
    category: ['Product & Project Management', 'Tools'],
  },
  {
    title: 'Agile Methodology',
    competency: 5,
    category: ['Product & Project Management', 'Concepts'],
  },
  {
    title: 'Scrum Methodology',
    competency: 5,
    category: ['Product & Project Management', 'Concepts'],
  },
  {
    title: 'Software Development Lifecycle (SDLC)',
    competency: 5,
    category: ['Product & Project Management', 'Concepts'],
  },
  {
    title: 'Continuous Integration and Continuous Delivery (CI/CD)',
    competency: 5,
    category: ['Product & Project Management', 'Concepts', 'DevOps'],
  },
  {
    title: 'Microsoft Word',
    competency: 5,
    category: ['Product & Project Management', 'Tools'],
  },
  {
    title: 'Microsoft PowerPoint',
    competency: 5,
    category: ['Product & Project Management', 'Tools'],
  },
  {
    title: 'Microsoft Excel',
    competency: 5,
    category: ['Product & Project Management', 'Tools'],
  },
  {
    title: 'Figma',
    competency: 3,
    category: ['Product & Project Management', 'Tools'],
  },
  {
    title: 'PostgreSQL / SQLite3 / SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Databricks',
    competency: 3,
    category: ['Databases', 'Tools', 'Data Engineering'],
  },
  {
    title: 'Snowflake',
    competency: 3,
    category: ['Databases', 'Tools', 'Data Engineering'],
  },
  {
    title: 'Data Mining',
    competency: 1,
    category: ['Data Science', 'Concepts'],
  },
  {
    title: 'Device Integration',
    competency: 3,
    category: ['Concepts'],
  },
  /* {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  }, */
  /* {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  }, */
  /* {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  }, */
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'GitLab',
    competency: 3,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Artifactory',
    competency: 2,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering', 'DevOps'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering', 'DevOps'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  /* {
    title: 'Numba',
    competency: 1,
    category: ['Data Science', 'Data Engineering', 'Python'],
  }, */
  {
    title: 'Tensorflow + Keras',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  /* {
    title: 'Julia',
    competency: 2,
    category: ['Languages'],
  }, */
  /* {
    title: 'MATLAB',
    competency: 1,
    cate */
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Microsoft Power BI',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Tableau',
    competency: 2,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 1,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  /* {
    title: 'Dagster',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  }, */
  {
    title: 'Mypy',
    competency: 1,
    category: ['Python'],
  },
  /* {
    //title: 'Pylint',
    //competency: 4,
    //category: ['Data Engineering', 'Python'],
  }, */
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until finding a likable pattern.
const colors = [
  '#01C101', // Calvin's Green
  '#a8e063', // Pale Yellowish Green
  '#34E89E', // Sea Foam Green
  '#00cdac', // Tiffany Teal
  '#64cb7b', // Lighter Green
  '#37b1f5', // Light Blue
  '#7bc393', // Swamp Green
  '#31b7c2', // Teal Blue
  '#91EAE4', // Baby Blue
  '#747fff', // Lighter Blue
  '#0F3443', // Very Dark Blue
  '#43cea2', // Tealish Green
  '#31b71c', // Lush Green
];
/*
  Original Color Ideas
  '#6968b3', // Purple
  '#37b1f5', // Light Blue
  '#40494e', // Gray
  '#515dd4', // Saturated Blue
  '#e47272', // Pale Red
  '#cc7b94', // Pale Pink
  '#3896e2', // Sky Blue
  '#c3423f', // Darker Red
  '#d75858', // Red
  '#747fff', // Lighter Blue
  '#64cb7b', // Lighter Green
*/

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
