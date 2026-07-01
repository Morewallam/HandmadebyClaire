import {defineField, defineType} from 'sanity'
import {ColorWheelIcon} from '@sanity/icons'
// schemas/category.js
export const arteventpage = defineType({
  name: 'arteventpage',
  title: 'Art Event Page',
  type: 'document',
  icon: ColorWheelIcon,
  fields: [
    defineField({
        name:'event_history_description',
        title:'Event History Description',
        type:'array',
        of:[{type:"block"}],
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'event_images',
      title: 'Event Images',
      type: 'array',
      of: [{type:'image'}]
    }),
  ],
  preview: {
    
    prepare() {
      return {
        title: "Art Event Page",
        
      }
    }
  }
})