import {defineField, defineType} from 'sanity'
// schemas/category.js
export const themeType = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'title',
      type: 'string',
      title:'Title',
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