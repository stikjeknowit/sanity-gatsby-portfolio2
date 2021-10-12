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
                  buildHookId: '61658ce1bb82bb1b7fe00070',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-aigk9evu',
                  apiId: '1c805f57-5b1d-4547-9b82-ea521cb7cdc8'
                },
                {
                  buildHookId: '61658ce1d5332c06f6290337',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-3ef1r9v4',
                  apiId: 'cdcdc1dc-71d5-4b70-a479-caddde8c8b46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stikjeknowit/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-3ef1r9v4.netlify.app',
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
