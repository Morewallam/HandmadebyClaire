import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { googleMapsInput } from "@sanity/google-maps-input";
import frontPage from './schemaTypes/frontPage';


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

            // Spread the rest of your document types, excluding frontPage
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'frontPage' && item.getId() !== 'aboutpage' && item.getId() !== 'workshoppage'
            ),
          ]),
    }),

    visionTool(),googleMapsInput({
          apiKey: "REDACTED",
          defaultZoom: 11,
          defaultLocation: {lat: 49.28890171937164, lng: -123.11113162539405}
     }),
  
    ],
  schema: {
    types: schemaTypes,
  },
})

