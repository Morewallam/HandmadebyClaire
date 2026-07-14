import {defineField, defineType} from 'sanity'
import {HighlightIcon} from '@sanity/icons'

export const workshop = defineType({
  name: 'workshoppage',
  title: 'Workshop Page',
  type: 'document',
  icon:HighlightIcon,
  fields: [
    defineField({
        name:'workshop_description',
        title:'workshop Description',
        type:'array',
        of:[{type:"block"}],
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'workshop images',
      type: 'array',
      of: [{type:'image'}]
    }),
  ],
  preview: {
    
    prepare() {
      return {
        title: "Workshop Page",
        
      }
    }
  }
})