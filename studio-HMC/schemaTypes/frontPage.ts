import {defineField} from 'sanity'

export default{
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type:'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'message',
      title: 'Artist\'s message',
      type:'array',
      of:[{type:"block"}],
      validation: (rule) => rule.required()
    }),
    defineField({
        name:'main_image',
        title:'Main Image',
        type:'image',
        validation: (rule) => rule.required()
    }),
    defineField({
        name:"section_name",
        title:'Section Name',
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name:'highlights',
        title:'Highlights',
        type: 'array',
        of: [{ type:'reference',
               to: [{type: 'product'}]
            }],
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'video_URL',
        title: 'Front Page Video URL',
        type:'url',
        validation: (rule) => rule.required()
    }),

  ],
  preview: {
    select: {
      media: 'main_image', // 👈 Selects the image field defined above
    },
    prepare({media}) {
      return {
        title: "Front Page",
        media:media // This is what appears in Studio lists and references
        
      }
    }
  }
}