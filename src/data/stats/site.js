import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Website Views',
    value: '105',
  },
  /*
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/mldangelo/personal-site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/mldangelo/personal-site/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/mldangelo/personal-site/network',
  },
  */
  {
    label: 'Number of Spoons',
    value: '0',
  },
  {
    label: 'Number of Linter Warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open Github Issues',
    key: 'open_issues_count',
    link: 'https://github.com/Calvin-Kuo/calvinkuo/issues',
  },
  {
    label: 'Last Updated At',
    key: 'pushed_at',
    link: 'https://github.com/Calvin-Kuo/calvinkuo/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript Powering This Website',
    value: '2115',
    link: 'https://github.com/Calvin-Kuo/calvinkuo/graphs/contributors',
  },
];

export default data;
