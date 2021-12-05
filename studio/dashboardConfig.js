export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ac940b607f18b3b4ea49f7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rogistb6',
                  apiId: 'd435fc6a-d073-4680-b8c4-9f8f0fdb64c8'
                },
                {
                  buildHookId: '61ac940babedb219faf9e7ce',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rgn26cqb',
                  apiId: 'b1af8445-1574-4500-97ce-4c1dadc80b49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codeBoCode/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rgn26cqb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
