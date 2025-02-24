const positions = [
  {
    company: 'AT&T',
    position: 'Senior System Engineering Manager - Network Data Automation Intelligence',
    link: 'https://att.com',
    daterange: 'April 2022 - Present',
    points: [
      'Architected end-to-end development of AI-driven network diagnostics analyzing 19M+ 4G/5G Android OS devices, processing 50B records daily w/ 10m geolocation accuracy, reducing network latency by 35% & improved anomaly detection accuracy by 50%.',
      'Launched 15+ diagnostic software release candidates annually, automated data pipelines (Spark, Hadoop), and integrated Vertica to deliver scalable ETL workflows generating 1000+ actionable KPIs, enabling $100M+ in operational cost savings, and reducing manual data processing time by 70%.',
      'Owned and optimized CI/CD pipelines (Jenkins, Docker) to streamline data ingestion and transformation of 4G/5G network processes utilizing Kafka, REST APIs & Snowflake DB; implemented robust analytics validation w/ Android framework, schema comparison, & SonarQube to ensure 99% data accuracy & system reliability.',
      'Defined device integration roadmaps for 90+ device models annually; developed A/B testing strategies to evaluate feature impacts, triaged KPI-critical issues via Atlassian Jira / Confluence; prioritized binaries, test validation milestones, & patch builds w/ R&D.',
      'Led quarterly all-hands meetings & partnered with engineering, QA, marketing, & Google / OEM R&D teams to align on technical roadmaps, mitigate risks and blockers, and deliver AI automation solutions 30% faster across the agile release cycles.',
    ],
  },
  {
    company: 'AT&T',
    position: 'Senior Technical Product Manager - Enterprise Advertising Data',
    link: 'https://xandr.com',
    daterange: 'April 2021 - April 2022',
    points: [
      'Architected and led development of an AI/ML-powered data intelligence platform (Snowflake, Python) that ingested 5+ PB of HBOMax / DirecTV multichannel metrics and analyzed 50M+ household/user metrics (viewing habits, purchasing behavior, interests, sentiments, income), enabling hyper-personalized ad strategies that drove $7B in annual revenue.',
      'Implemented predictive analytics pipelines (Snowflake) to transform raw data into monetizable insights, improving advertising ROI by 20% and reducing manual analysis time by 30% through automated ML workflows.',
      'Streamlined SDLC workflows for 11 data pipelines and scaled ML deployments, accelerating deployment by 10% via CI/CD pipeline optimizations (Jenkins, GitLab)',
      'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
      'Orchestrated cross-functional collaboration across 5 engineering teams, 2 data science teams, and legal/compliance, prioritizing requirements in Jira, and translating technical insights into business strategies.',
    ],
  },
  {
    company: 'AT&T',
    position: 'Technical Project Manager - Cloud Architecture',
    link: 'https://att.com',
    daterange: 'July 2020 - April 2021',
    points: [
      'Led $40M retail sales platform migration to cloud-native architecture from SAP HANA to AWS Redshift for data processing & from VMware Horizon to AWS ECS for virtualized app deployment; boosted scalability / system performance for 5000 national retail stores.',
      'Implemented containerized microservices (Docker, Kubernetes) ingesting 10 TB sales data daily & reducing system latency by 15%.',
      'Coordinated agile development for 3 Scrum engineer teams to drive IaC practices, align technical roadmaps, & prioritize features; maximized engineering UAT efficiency by 10% via automated testing frameworks (Selenium) & proactive Sev1 risk mitigation.',
      'Automated financial reporting via Power BI & Excel macros, reducing 20% manual effort & improved burn rate tracking accuracy.',
    ],
  },
  {
    company: 'Rutgers Undergraduate Admissions',
    position: 'Scarlet Ambassador',
    link: 'https://admissions.rutgers.edu/',
    daterange: 'May 2019 - September 2020',
    points: [
      'Cultivated the first impression of Rutgers for thousands of prospective students each year through 25+ campus tours, 3 recruitment programs, and daily interactions with visiting families.',
      'Worked in a constantly active office environment and exhibit courteous professionalism in answering undergraduate admissions inquiries online, on the phone, or in-person.',
      'Demonstrated effective communication, problem solving, and teamwork while upholding the model values of being an ambassador on behalf of the Office of Undergraduate Admissions.',
    ],
  },
  {
    company: 'Rutgers Office of Residence Life',
    position: 'Resident Assistant',
    link: 'http://ruoncampus.rutgers.edu/',
    daterange: 'May 2019 - May 2020',
    points: [
      'Collaborated with Residence Life staff to respond to student concerns and crises, to maintain a positive living community, and to build relationships with students and the community at large.',
      'Facilitated community development through meaningful individual interactions with 50+ residents, monthly floor meetings, and 9 residence hall programs annually.',
      'Fostered and inspired strong, inclusive, and engaging communities; encourage and support students in their academic, social, and personal growth',
      'Helped 50+ students develop transferable skills to succeed in a diverse global society and in a competitive job market.',
    ],
  },
  {
    company: 'Rutgers Office of Residence Life',
    position: 'Peer Mentor',
    link: 'http://ruoncampus.rutgers.edu/',
    daterange: 'May 2017 - May 2019',
    points: [
      'Provided over 30 first-year students in the Leadership Living-Learning Community with important guidance about academic, career, extra-curricular, and life successes.',
      'Conducted multiple 1-on-1 meetings with students every semester to check-in on their academic progression and personal growth.',
      'Mitigated unique conflicts and issues that arise between students by leveraging adaptive problem solving and conflict resolution techniques.',
      'Collaborated with colleagues to successfully plan and execute logistics for a trip to the United Nations in New York City.',
      'Worked directly with Rutgers Residence Life, Department of Leadership & Experiential Learning, and the School of Communication & Information to create effective monthly educational programs about leadership, organization, time management, self-confidence, and mental health.',
    ],
  },
  {
    company: 'Rutgers University - Department of Computer Science',
    position: 'Computer Science Instructor',
    link: 'https://www.sasundergrad.rutgers.edu/welcome/majors/explore/computer-science',
    daterange: 'March 2019 - May 2020',
    points: [
      'Spearheaded a 10-week Artificial Intelligence and Internet Technology college level course for 25 first-year students.',
      'Taught computer vision to tag NJ/NY street signs, NLP sentiment analysis (Pandas, NLTK), neural nets, and augmented reality.',
      'Designed curriculums that engaged students through thought-provoking discussions, topical area debates, and hands-on development.',
    ],
  },
  {
    company: 'AT&T',
    position: 'Technical Project Manager / Release Train Engineer Intern - FirstNet',
    link: 'https://att.com',
    daterange: 'June 2019 - August 2019',
    points: [
      'Scoped, prototyped, validated, and constructed next-generation software solutions for a high-valued project to transform E-911 public safety.',
      'Orchestrated 8 agile Scrum teams of software engineers and architects on projects comprised of network elements and data stores.',
      'Managed program iterations and features as a key product evangelist on internal and external teams saving the project $210k.',
      'Designed, prototyped, & pitched a VR app to create an enriched HBO Max streaming UI/UX on Meta Oculus (developed with Unity game engine & Blender)',
    ],
  },
  {
    company: 'Rutgers School of Arts and Sciences',
    position: 'Student Ambassador',
    link: 'https://sas.rutgers.edu/',
    daterange: 'March 2019 - June 2019',
    points: [
      'Serve as a student ambassador for Rutgers School of Arts and Sciences (SAS) to plan an execute academic programs on behalf of the school.',
      'Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SAS nationally, and photographing events.',
      'Assist with Rutgers Open House and Academic Planning and Advising Days for 3,500+ of prospective and new first-year students.',
      'Collaborate with academic deans and leadership to promote the School of Arts and Sciences brand.',
    ],
  },
  {
    company: 'Huawei',
    position: 'Software Engineer Intern',
    link: 'https://www.huawei.com/us/',
    daterange: 'June 2018 - August 2018',
    points: [
      'Engineered cost optimization analysis with React UI accessing AWS EC2 and S3 APIs for a dynamic $9M cloud management architecture, saving approx. $12k per month for 6 international B2B clients (translated English and Mandarin Chinese)',
      'Integrated microservice tracing system as a containerized app on Kubernetes cluster, increasing debug app response by 7%',
      'Supported the development of production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Postgres, etc. with Kubernetes.',
      'Built analysis to ensure data integrity using Pandas, t-SNE, SVMs, and other techniques.',
    ],
  },
  {
    company: 'Johnson & Johnson',
    position: 'Software Engineer Intern',
    link: 'https://www.jnj.com/',
    daterange: 'January 2018 - April 2018',
    points: [
      'Developed biosensor performance notification system run on AWS AppSync (GraphQL) w/ serverless DynamoDB and S3 backend',
      'Integrated PostgreSQL database to automate 75% of manual processes for future R&D resource allocation & portfolio management',
      'Composed data analytics reports using SQL-based Looker Blocks to encapsulate performance and growth metrics for executive decision-making.',
    ],
  },
];

export default positions;
