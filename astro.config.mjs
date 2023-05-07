import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';


// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    vue(),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'master',
        },
        publish_mode: 'editorial_workflow',
        media_folder: 'public/uploads',
        public_folder: 'public/uploads',
        collections: [
          {
            name: 'projects',
            label: 'Project',
            folder: 'src/pages/projects',
            slug: '{{slug}}',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Project Title' },
              { name: 'description', widget: 'markdown', label: 'Project Description' },
              { name: 'image', widget: 'image', label: 'Image' },
            ],
          },
        ],
      },
    })
  ]
});