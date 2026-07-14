import {defineField, defineType} from 'sanity'


export const storeType = defineType({
  name: 'store',
  title: 'Store',
  type: 'document',
  fields: [
    defineField({
      name: 'StoreName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'StoreName' } 
    }),
    defineField({
      name: 'Image',
      type: 'image',
      validation: (rule) => rule.required()
    }),
    defineField({
        name:"Description",
        type:'array',
        of:[{type:"block"}],
        validation: (rule) => rule.required()
    }),
    defineField({
        name: "Address",
        type:'string',
    }),
    defineField({
        name: "URL",
        type:'url',
    }),
    defineField({
        name:"ProductsSold",
        type:'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }]
          }
        ],
        validation:rule=>rule.required()
    }),
     defineField({
          name: "order",
          type:"number",
          initialValue: 999
      }),
  ],
})