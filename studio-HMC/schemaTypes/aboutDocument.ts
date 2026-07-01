import {defineField, defineType} from 'sanity'
// schemas/category.js
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
    })

  ],
  preview: {
    select: {
      media: 'about_image', // 👈 Selects the image field defined above
    },
    prepare({media}) {
      return {
        title: "About Page",
        media:media // This is what appears in Studio lists and references
        
      }
    }
  }
})