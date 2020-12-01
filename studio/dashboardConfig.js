export default {
  widgets: [
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
                  buildHookId: '5fc66dc3f041f900f3021273',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zdmkkzw4',
                  apiId: 'cf968b64-5b2f-4777-83a4-f09edcdc5ba3'
                },
                {
                  buildHookId: '5fc66dc3dff6b1008a653c6c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g6z7hbvz',
                  apiId: 'da107755-9ad7-4ec0-8f89-d58cf7808ace'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kfayelun/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g6z7hbvz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
