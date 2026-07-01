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
      options: { source: 'EventName' }  // auto-generates from title
    }),
    defineField({
      name: 'Image',
      type: 'image',
    }),
    defineField({
        name:"Description",
        type:'array',
        of:[{type:"block"}]
    }),
    // defineField({
    //     name: "Location",
    //     type: 'geopoint',
    //     validation:rule=>rule.required()
    // }),
    defineField({
        name: "Address",
        type:'string',
        validation:rule=>rule.required()
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
          type:"number"
      }),
  ],
})