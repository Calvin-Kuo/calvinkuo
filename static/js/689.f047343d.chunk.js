"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[689],{1689:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),i=n(1523),a=n(6842),s=n(184),o=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(o,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,s.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=n(9611);function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h=n(1002);function f(e,t){if(t&&("object"===(0,h.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}var v=n(4942),w=n(1413),S=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,a=t.title,o={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,w.Z)((0,w.Z)({},o),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:o,children:(0,s.jsx)("span",{children:a})}),(0,s.jsx)("div",{className:"skillbar-bar",style:c}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};k.defaultProps={categories:[]};var j=k,x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,g.Z)(e,t)}(a,e);var t,n,r,i=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,w.Z)((0,w.Z)({},n),{},(0,v.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,w.Z)((0,w.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,s.jsx)(j,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,s.jsx)(S,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);x.defaultProps={skills:[],categories:[]};var C=x,A=function(e){var t=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};A.defaultProps={last:!1};var P=A,M=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,s.jsx)(P,{data:t,last:n===e.length-1},t.title)}))},D=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:M(t)})]})};D.defaultProps={data:[]};var T=D,E=function(){return(0,s.jsxs)("div",{className:"certifications",children:[(0,s.jsx)("div",{className:"link-to",id:"certifications"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)(i.rU,{to:"/contact",children:(0,s.jsx)("h3",{children:(0,s.jsx)("center",{children:"Certifications"})})}),(0,s.jsxs)("h5",{children:["\u25cf ",(0,s.jsx)("a",{href:"https://www.credly.com/badges/21946999-3c10-4cc4-9159-7a173f6f19fa/public_url",children:"Scaled Agile \u2013 Certified SAFe\xae 5 Scrum Master"})]}),(0,s.jsxs)("h5",{children:["\u25cf ",(0,s.jsx)("a",{href:"https://www.credly.com/badges/7fba4f6d-bccd-4f4d-a122-76faaf08ea3e",children:"Scaled Agile \u2013 Certified SAFe\xae 5 Product Owner/Product Manager"})]}),(0,s.jsxs)("h5",{children:["\u25cf ",(0,s.jsx)("a",{href:"https://www.credly.com/badges/b4b92c24-d83f-486c-9a04-dc079f1e0a66/linked_in_profile",children:"Scaled Agile \u2013 Certified SAFe\xae 5 Agilist"})]}),(0,s.jsx)("h5",{children:"\u25cf AT&T REST \u2013 Representational State Transfer (REST) Bronze Certified"}),(0,s.jsx)("h5",{children:"\u25cf MIT - Designing and Implementing Big Data Analytic Solutions"})]})]})},N=[{title:"Engineering Management Project (Capstone)",number:"ENMGT 5910",link:"https://classes.cornell.edu/browse/roster/SP23/class/ENMGT/5910",university:"Cornell"},{title:"Managing a Culture of Innovation",number:"ENMGT 6020",link:"https://classes.cornell.edu/browse/roster/FA22/class/ENMGT/6020",university:"Cornell"},{title:"Decision Framing and Analytics",number:"ENMGT 5980",link:"https://classes.cornell.edu/browse/roster/FA22/class/ENMGT/5980",university:"Cornell"},{title:"Project Management",number:"ENMGT 5900",link:"https://classes.cornell.edu/browse/roster/SP22/class/ENMGT/5900",university:"Cornell"},{title:"Product Management",number:"ENMGT 5920",link:"https://classes.cornell.edu/browse/roster/SP22/class/ENMGT/5920",university:"Cornell"},{title:"Data Analytics",number:"ENMGT 5930",link:"https://classes.cornell.edu/browse/roster/FA21/class/ENMGT/5930",university:"Cornell"},{title:"Data Science for Smart Cities",number:"CS 672",link:"https://people.cs.rutgers.edu/~dz220/CS672S2020/home.html",university:"Rutgers"},{title:"Computer Graphics",number:"CS 428",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-428-introduction-to-computer-graphics",university:"Rutgers"},{title:"Computer Security",number:"CS 419",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-419-computer-security",university:"Rutgers"},{title:"Advanced Topics in Cognitive Science: Minds, Machines & Computation",number:"CS 443",link:"https://ruccs.rutgers.edu/academics/undergraduate/syllabi/51-185-416-advanced-topics-in-cognitive-science-minds-machines-computation-syllabus/file",university:"Rutgers"},{title:"Artificial Intelligence",number:"CS 440",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-440-introduction-to-artificial-intelligence",university:"Rutgers"},{title:"Internet Technology",number:"CS 352",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-352-internet-technology",university:"Rutgers"},{title:"Design and Analysis of Computer Algorithms",number:"CS 344",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-344-design-and-analysis-of-computer-algorithms",university:"Rutgers"},{title:"Principles of Information and Data Management",number:"CS 336",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management",university:"Rutgers"},{title:"Computer Architecture",number:"CS 211",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture",university:"Rutgers"},{title:"Discrete Structures II",number:"CS 206",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-206-introduction-to-discrete-structures-ii",university:"Rutgers"},{title:"Data Structures",number:"CS 112",link:"https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures",university:"Rutgers"},{title:"General Physics II",number:"PHYS 204",link:"https://physics.rutgers.edu/academics/undergraduate-program/course-synopses/01-750-204-general-physics-3",university:"Rutgers"},{title:"General Physics Labatory II",number:"PHYS 206",link:"https://physics.rutgers.edu/academics/undergraduate-program/course-synopses/01-750-206-general-physics-laboratory-1",university:"Rutgers"},{title:"Linear Algebra",number:"MATH 250",link:"https://www.math.rutgers.edu/academics/undergraduate/courses/948-01-640-250-introductory-linear-algebra",university:"Rutgers"},{title:"Managing Growing Ventures",number:"ENTR 303",link:"https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/29_382_303.pdf",university:"Rutgers"},{title:"Accounting for Entrepreneurs and Small Business",number:"ENTR 103",link:"https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_103.pdf",university:"Rutgers"},{title:"Finance for Entrepreneurs and Small Business",number:"ENTR 203",link:"https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_203.pdf",university:"Rutgers"},{title:"Marketing for Entrepreneurs and Small Business",number:"ENTR 202",link:"https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_202.pdf",university:"Rutgers"},{title:"Design Thinking Approach to Innovation and Entrepreneurship",number:"ENTR 105",link:"https://myrbs.business.rutgers.edu/sites/default/files/syllabi/382-entrepreneurship/33_382_105.pdf",university:"Rutgers"}],R=[{school:"Cornell University",degree:"Master of Engineering (M.Eng.) Engineering Management, Systems Engineering",link:"https://cornell.edu",year:2024},{school:"Rutgers University - New Brunswick",degree:"Bachelor of Science (B.S.) Computer Science, Minor in Entrepreneurship",link:"https://rutgers.edu",year:2020}],O=[{company:"AT&T",position:"Senior System Engineering Manager - Network Data Automation Intelligence",link:"https://att.com",daterange:"April 2022 - Present",points:["Architected end-to-end development of AI-driven network diagnostics analyzing 19M+ 4G/5G Android OS devices, processing 50B records daily w/ 10m geolocation accuracy, reducing network latency by 35% & improved anomaly detection accuracy by 50%.","Launched 15+ diagnostic software release candidates annually, automated data pipelines (Spark, Hadoop), and integrated Vertica to deliver scalable ETL workflows generating 1000+ actionable KPIs, enabling $100M+ in operational cost savings, and reducing manual data processing time by 70%.","Owned and optimized CI/CD pipelines (Jenkins, Docker) to streamline data ingestion and transformation of 4G/5G network processes utilizing Kafka, REST APIs & Snowflake DB; implemented robust analytics validation w/ Android framework, schema comparison, & SonarQube to ensure 99% data accuracy & system reliability.","Defined device integration roadmaps for 90+ device models annually; developed A/B testing strategies to evaluate feature impacts, triaged KPI-critical issues via Atlassian Jira / Confluence; prioritized binaries, test validation milestones, & patch builds w/ R&D.","Led quarterly all-hands meetings & partnered with engineering, QA, marketing, & Google / OEM R&D teams to align on technical roadmaps, mitigate risks and blockers, and deliver AI automation solutions 30% faster across the agile release cycles."]},{company:"AT&T",position:"Senior Technical Product Manager - Enterprise Advertising Data",link:"https://xandr.com",daterange:"April 2021 - April 2022",points:["Architected and led development of an AI/ML-powered data intelligence platform (Snowflake, Python) that ingested 5+ PB of HBOMax / DirecTV multichannel metrics and analyzed 50M+ household/user metrics (viewing habits, purchasing behavior, interests, sentiments, income), enabling hyper-personalized ad strategies that drove $7B in annual revenue.","Implemented predictive analytics pipelines (Snowflake) to transform raw data into monetizable insights, improving advertising ROI by 20% and reducing manual analysis time by 30% through automated ML workflows.","Streamlined SDLC workflows for 11 data pipelines and scaled ML deployments, accelerating deployment by 10% via CI/CD pipeline optimizations (Jenkins, GitLab)","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","Orchestrated cross-functional collaboration across 5 engineering teams, 2 data science teams, and legal/compliance, prioritizing requirements in Jira, and translating technical insights into business strategies."]},{company:"AT&T",position:"Technical Project Manager - Cloud Architecture",link:"https://att.com",daterange:"July 2020 - April 2021",points:["Led $40M retail sales platform migration to cloud-native architecture from SAP HANA to AWS Redshift for data processing & from VMware Horizon to AWS ECS for virtualized app deployment; boosted scalability / system performance for 5000 national retail stores.","Implemented containerized microservices (Docker, Kubernetes) ingesting 10 TB sales data daily & reducing system latency by 15%.","Coordinated agile development for 3 Scrum engineer teams to drive IaC practices, align technical roadmaps, & prioritize features; maximized engineering UAT efficiency by 10% via automated testing frameworks (Selenium) & proactive Sev1 risk mitigation.","Automated financial reporting via Power BI & Excel macros, reducing 20% manual effort & improved burn rate tracking accuracy."]},{company:"Rutgers Undergraduate Admissions",position:"Scarlet Ambassador",link:"https://admissions.rutgers.edu/",daterange:"May 2019 - September 2020",points:["Cultivated the first impression of Rutgers for thousands of prospective students each year through 25+ campus tours, 3 recruitment programs, and daily interactions with visiting families.","Worked in a constantly active office environment and exhibit courteous professionalism in answering undergraduate admissions inquiries online, on the phone, or in-person.","Demonstrated effective communication, problem solving, and teamwork while upholding the model values of being an ambassador on behalf of the Office of Undergraduate Admissions."]},{company:"Rutgers Office of Residence Life",position:"Resident Assistant",link:"http://ruoncampus.rutgers.edu/",daterange:"May 2019 - May 2020",points:["Collaborated with Residence Life staff to respond to student concerns and crises, to maintain a positive living community, and to build relationships with students and the community at large.","Facilitated community development through meaningful individual interactions with 50+ residents, monthly floor meetings, and 9 residence hall programs annually.","Fostered and inspired strong, inclusive, and engaging communities; encourage and support students in their academic, social, and personal growth","Helped 50+ students develop transferable skills to succeed in a diverse global society and in a competitive job market."]},{company:"Rutgers Office of Residence Life",position:"Peer Mentor",link:"http://ruoncampus.rutgers.edu/",daterange:"May 2017 - May 2019",points:["Provided over 30 first-year students in the Leadership Living-Learning Community with important guidance about academic, career, extra-curricular, and life successes.","Conducted multiple 1-on-1 meetings with students every semester to check-in on their academic progression and personal growth.","Mitigated unique conflicts and issues that arise between students by leveraging adaptive problem solving and conflict resolution techniques.","Collaborated with colleagues to successfully plan and execute logistics for a trip to the United Nations in New York City.","Worked directly with Rutgers Residence Life, Department of Leadership & Experiential Learning, and the School of Communication & Information to create effective monthly educational programs about leadership, organization, time management, self-confidence, and mental health."]},{company:"Rutgers University - Department of Computer Science",position:"Computer Science Instructor",link:"https://www.sasundergrad.rutgers.edu/welcome/majors/explore/computer-science",daterange:"March 2019 - May 2020",points:["Spearheaded a 10-week Artificial Intelligence and Internet Technology college level course for 25 first-year students.","Taught computer vision to tag NJ/NY street signs, NLP sentiment analysis (Pandas, NLTK), neural nets, and augmented reality.","Designed curriculums that engaged students through thought-provoking discussions, topical area debates, and hands-on development."]},{company:"AT&T",position:"Technical Project Manager / Release Train Engineer Intern - FirstNet",link:"https://att.com",daterange:"June 2019 - August 2019",points:["Scoped, prototyped, validated, and constructed next-generation software solutions for a high-valued project to transform E-911 public safety.","Orchestrated 8 agile Scrum teams of software engineers and architects on projects comprised of network elements and data stores.","Managed program iterations and features as a key product evangelist on internal and external teams saving the project $210k.","Designed, prototyped, & pitched a VR app to create an enriched HBO Max streaming UI/UX on Meta Oculus (developed with Unity game engine & Blender)"]},{company:"Rutgers School of Arts and Sciences",position:"Student Ambassador",link:"https://sas.rutgers.edu/",daterange:"March 2019 - June 2019",points:["Serve as a student ambassador for Rutgers School of Arts and Sciences (SAS) to plan an execute academic programs on behalf of the school.","Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SAS nationally, and photographing events.","Assist with Rutgers Open House and Academic Planning and Advising Days for 3,500+ of prospective and new first-year students.","Collaborate with academic deans and leadership to promote the School of Arts and Sciences brand."]},{company:"Huawei",position:"Software Engineer Intern",link:"https://www.huawei.com/us/",daterange:"June 2018 - August 2018",points:["Engineered cost optimization analysis with React UI accessing AWS EC2 and S3 APIs for a dynamic $9M cloud management architecture, saving approx. $12k per month for 6 international B2B clients (translated English and Mandarin Chinese)","Integrated microservice tracing system as a containerized app on Kubernetes cluster, increasing debug app response by 7%","Supported the development of production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Postgres, etc. with Kubernetes.","Built analysis to ensure data integrity using Pandas, t-SNE, SVMs, and other techniques."]},{company:"Johnson & Johnson",position:"Software Engineer Intern",link:"https://www.jnj.com/",daterange:"January 2018 - April 2018",points:["Developed biosensor performance notification system run on AWS AppSync (GraphQL) w/ serverless DynamoDB and S3 backend","Integrated PostgreSQL database to automate 75% of manual processes for future R&D resource allocation & portfolio management","Composed data analytics reports using SQL-based Looker Blocks to encapsulate performance and growth metrics for executive decision-making."]}],I=n(907);var L=n(181);var B,G=[{title:"Java",competency:3,category:["Languages"]},{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:2,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:1,category:["Web Development","Tools"]},{title:"Jira",competency:4,category:["Product & Project Management","Tools"]},{title:"Confluence",competency:3,category:["Product & Project Management","Tools"]},{title:"Scaled Agiled Methodology",competency:4,category:["Product & Project Management","Concepts"]},{title:"Scrum Methodology",competency:4,category:["Product & Project Management","Concepts"]},{title:"Microsoft Word",competency:4,category:["Product & Project Management","Tools"]},{title:"Microsoft PowerPoint",competency:4,category:["Product & Project Management","Tools"]},{title:"Microsoft Excel",competency:4,category:["Product & Project Management","Tools"]},{title:"PostgreSQL/SQLite3/SQL",competency:2,category:["Web Development","Databases","Languages"]},{title:"Databricks",competency:2,category:["Databases","Tools","Data Engineering"]},{title:"Snowflake",competency:2,category:["Databases","Tools","Data Engineering"]},{title:"Data Mining",competency:1,category:["Data Science","Concepts"]},{title:"Device Integration",competency:3,category:["Concepts"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:1,category:["Tools","Web Development"]},{title:"Numpy",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:1,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages","Python"]},{title:"C",competency:2,category:["Languages"]},{title:"C++",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Power BI",competency:3,category:["Data Science","Tools"]},{title:"Tableau",competency:2,category:["Data Science","Tools"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:1,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:2,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:1,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:1,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Mypy",competency:1,category:["Python"]}].map((function(e){return(0,w.Z)((0,w.Z)({},e),{},{category:e.category.sort()})})),z=["#01C101","#a8e063","#34E89E","#00cdac","#64cb7b","#37b1f5","#7bc393","#31b7c2","#91EAE4","#747fff","#0F3443","#43cea2","#31b71c"],J=(B=new Set(G.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,I.Z)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(B)||(0,L.Z)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:z[t]}})),Z=["Education","Experience","Skills","Courses","Certifications"],_=function(){return(0,s.jsx)(a.Z,{title:"Resume",description:"Calvin Kuo's Resume. AT&T, Cornell, Rutgers.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{"data-testid":"heading",children:(0,s.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:Z.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(l,{data:R}),(0,s.jsx)(p,{data:O}),(0,s.jsx)(C,{skills:G,categories:J}),(0,s.jsx)(T,{data:N}),(0,s.jsx)(E,{})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=689.f047343d.chunk.js.map