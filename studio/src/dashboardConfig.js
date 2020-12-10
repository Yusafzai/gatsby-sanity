export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd23d015d9163345556ba05',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-studio-ysxh7qr5',
                  apiId: '85b4acf7-9eda-4f3a-9477-15630c0a5670'
                },
                {
                  buildHookId: '5fd23d026307fd0bf717b69c',
                  title: 'Blog Website',
                  name: 'gatsby-sanity-web-re8fbz5b',
                  apiId: '7244d887-1813-4bf4-8c45-19fe9656a4ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yusafzai/gatsby-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-sanity-web-re8fbz5b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
