const courses = [
  {
    title: 'Negotiations and Contracts for Engineering Managers',
    number: 'ENMGT 5960',
    link: 'https://classes.cornell.edu/browse/roster/FA23/class/ENMGT/5960',
    university: 'Cornell',
  },
  {
    title: 'Engineering Management Project (Capstone)',
    number: 'ENMGT 5910',
    link: 'https://classes.cornell.edu/browse/roster/SP23/class/ENMGT/5910',
    university: 'Cornell',
  },
  {
    title: 'Managing a Culture of Innovation',
    number: 'ENMGT 6020',
    link: 'https://classes.cornell.edu/browse/roster/FA22/class/ENMGT/6020',
    university: 'Cornell',
  },
  {
    title: 'Decision Framing and Analytics',
    number: 'ENMGT 5980',
    link: 'https://classes.cornell.edu/browse/roster/FA22/class/ENMGT/5980',
    university: 'Cornell',
  },
  {
    title: 'Project Management',
    number: 'ENMGT 5900',
    link: 'https://classes.cornell.edu/browse/roster/SP22/class/ENMGT/5900',
    university: 'Cornell',
  },
  {
    title: 'Product Management',
    number: 'ENMGT 5920',
    link: 'https://classes.cornell.edu/browse/roster/SP22/class/ENMGT/5920',
    university: 'Cornell',
  },
  {
    title: 'Data Analytics',
    number: 'ENMGT 5930',
    link: 'https://classes.cornell.edu/browse/roster/FA21/class/ENMGT/5930',
    university: 'Cornell',
  },
  {
    title: 'Data Science for Smart Cities',
    number: 'CS 672',
    link: 'https://people.cs.rutgers.edu/~dz220/CS672S2020/home.html',
    university: 'Rutgers',
  },
  {
    title: 'Computer Graphics',
    number: 'CS 428',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-428-introduction-to-computer-graphics',
    university: 'Rutgers',
  },
  {
    title: 'Computer Security',
    number: 'CS 419',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-419-computer-security',
    university: 'Rutgers',
  },
  {
    title: 'Advanced Topics in Cognitive Science: Minds, Machines & Computation',
    number: 'CS 443',
    link: 'https://ruccs.rutgers.edu/academics/undergraduate/syllabi/51-185-416-advanced-topics-in-cognitive-science-minds-machines-computation-syllabus/file',
    university: 'Rutgers',
  },
  {
    title: 'Artificial Intelligence',
    number: 'CS 440',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-440-introduction-to-artificial-intelligence',
    university: 'Rutgers',
  },
  {
    title: 'Internet Technology',
    number: 'CS 352',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-352-internet-technology',
    university: 'Rutgers',
  },
  {
    title: 'Design and Analysis of Computer Algorithms',
    number: 'CS 344',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-344-design-and-analysis-of-computer-algorithms',
    university: 'Rutgers',
  },
  {
    title: 'Principles of Information and Data Management',
    number: 'CS 336',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management',
    university: 'Rutgers',
  },
  {
    title: 'Computer Architecture',
    number: 'CS 211',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture',
    university: 'Rutgers',
  },
  {
    title: 'Discrete Structures II',
    number: 'CS 206',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-206-introduction-to-discrete-structures-ii',
    university: 'Rutgers',
  },
  {
    title: 'Data Structures',
    number: 'CS 112',
    link: 'https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures',
    university: 'Rutgers',
  },
  {
    title: 'General Physics II',
    number: 'PHYS 204',
    link: 'https://physics.rutgers.edu/academics/undergraduate-program/course-synopses/01-750-204-general-physics-3',
    university: 'Rutgers',
  },
  {
    title: 'General Physics Labatory II',
    number: 'PHYS 206',
    link: 'https://physics.rutgers.edu/academics/undergraduate-program/course-synopses/01-750-206-general-physics-laboratory-1',
    university: 'Rutgers',
  },
  {
    title: 'Linear Algebra',
    number: 'MATH 250',
    link: 'https://www.math.rutgers.edu/academics/undergraduate/courses/948-01-640-250-introductory-linear-algebra',
    university: 'Rutgers',
  },
  {
    title: 'Managing Growing Ventures',
    number: 'ENTR 303',
    link: 'https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/29_382_303.pdf',
    university: 'Rutgers',
  },
  {
    title: 'Accounting for Entrepreneurs and Small Business',
    number: 'ENTR 103',
    link: 'https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_103.pdf',
    university: 'Rutgers',
  },
  {
    title: 'Finance for Entrepreneurs and Small Business',
    number: 'ENTR 203',
    link: 'https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_203.pdf',
    university: 'Rutgers',
  },
  {
    title: 'Marketing for Entrepreneurs and Small Business',
    number: 'ENTR 202',
    link: 'https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_202.pdf',
    university: 'Rutgers',
  },
  {
    title: 'Design Thinking Approach to Innovation and Entrepreneurship',
    number: 'ENTR 105',
    link: 'https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_105.pdf',
    university: 'Rutgers',
  },
];

export default courses;
