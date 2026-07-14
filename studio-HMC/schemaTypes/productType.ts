import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Individual Product',
  type: 'document',
  fields: [
    defineField({
      name: 'IndividualProductName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'IndividualProductName' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'MainImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'SubImage',
      type: 'array',
      of: [{type:'image'}]
    }),
    defineField({
        name:'Category',
        type: 'reference',
        to: [{ type: 'category' }],
        validation: (rule) => rule.required()
    }),
    defineField({
        name:'Theme',
        type: 'reference',
        to: [{ type: 'theme' }],
        validation: (rule) => rule.required()
    }),
    defineField({
        name:'Size',
        type: 'array',
        of: [{
            type: 'reference',
            to: [{ type: 'size' }]
        }],
        validation: (rule) => rule.required()
    }),
    defineField({
        name:'Occasion',
        type: 'array',
        of: [{
            type: 'reference',
            to: [{ type: 'occasion' }]
        }]
    }),
    defineField({
        name:"Description",
        type:'array',
        of:[{type:"block"}],
        validation: (rule) => rule.required()
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
          name: "order",
          type:"number",
          initialValue: 999
      }),
  ],
})