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
        public_folder: 'uploads',
        collections: [
          {
            name: 'projects',
            label: 'Project',
            folder: 'src/pages/projects',
            create: true,
            delete: true,
            fields: [
              {name: 'layout', label: "Layout", widget: "hidden", default: "../../layouts/ProjectLayout.astro"},
              { name: 'title', widget: 'string', label: 'Project Title' },
              { name: 'body', widget: 'markdown', label: 'Description' },
              { name: 'image', widget: 'image', label: 'Image' },
            ],
          },
        ],
      },
    })
  ]
});