import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutpage',
  title: 'About Page',
  type: 'document',
  fields: [
     defineField({
        name:'about_image',
        title:'About Image',
        type:'image',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name:'about_me_description',
        title:'About Me Description',
        type:'array',
        of:[{type:"block"}],
        validation: (rule) => rule.required(),
    }),
    defineField({
        name:'studio_image',
        title:'Studio Image',
        type:'image',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name:'studio_description',
        title:'Studio Description',
        type:'array',
        of:[{type:"block"}],
        validation: (rule) => rule.required(),
    }),
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
    select: {
      media: 'about_image', 
    },
    prepare({media}) {
      return {
        title: "About Page",
        media:media 
        
      }
    }
  }
})