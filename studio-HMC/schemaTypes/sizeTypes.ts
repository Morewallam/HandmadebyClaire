import {defineField, defineType} from 'sanity'


export const sizeType = defineType({
  name: 'size',
  title: 'Sizing',
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
      options: { source: 'title' } ,
      validation: (rule) => rule.required() 
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
    }),
     defineField({
          name: "order",
          type:"number",
          initialValue: 999
      }),
  ]
})