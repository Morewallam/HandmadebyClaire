import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'



export default defineConfig({
  name: 'default',
  title: 'Handmade by claire',

  projectId: 'o6hp51kg',
  dataset: 'production',

  plugins: [
     structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentListItem({schemaType:"frontPage",id:'frontPage', title:'Front Page'}),
            S.documentListItem({schemaType:"aboutpage",id:'aboutpage', title:'About Page'}),
            S.documentListItem({schemaType:"workshoppage",id:'workshoppage', title:'Workshop Page'}),
            
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'frontPage' && item.getId() !== 'aboutpage' && item.getId() !== 'workshoppage'
            ),
          ]),
    }),

    visionTool()
  
    ],
  schema: {
    types: schemaTypes,
  },
})

