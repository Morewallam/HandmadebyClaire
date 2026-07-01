import {defineField, defineType} from 'sanity'
// schemas/category.js
export const sizeType = defineType({
  name: 'size',
  title: 'Sizing', //12"x13"
  type: 'document',
  fields: [
    defineField(
    {
      name: 'title',
      type: 'string',
      title:'Size',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }  // auto-generates from title
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
        name:'image',
        title:'Image',
        type:'image',
        // validation: (rule) => rule.required()
    }),
     defineField({
          name: "order",
          type:"number",
          initialValue: 999
      }),
  ]
})