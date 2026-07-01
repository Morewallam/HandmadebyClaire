import {defineField, defineType} from 'sanity'
import { TimeInput } from '../components/TimeInput'
import { CalendarIcon } from '@sanity/icons'


export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'EventName',
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
    defineField({
        name:"Stall",
        type:'string'
    }),
    defineField({
        name: "Address",
        type:'string'
    }),
    defineField({
    name: 'schedule',
    title: 'Schedule',
    type: 'array',
    of: [
        {
        type: 'object',
        name: 'daySchedule',
        fields: [
            defineField({
                name: 'date',
                title: 'Date',
                type: 'date',
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: 'startTime',
                title: 'Start Time',
                type: 'string',
                components: {
                    input: TimeInput, // custom input — see below
                },
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: 'endTime',
                title: 'End Time',
                type: 'string',
                components: {
                    input: TimeInput,
                },
                validation: (Rule) =>
                    Rule.required().custom((endTime, context) => {
                        const { startTime } = context.parent as { startTime: string }
                        if (startTime && endTime && endTime <= startTime) {
                            return 'End time must be after start time'
                        }
                        return true
                    }),
            }),
        ],
        preview: {
            select: {
            date: 'date',
            start: 'startTime',
            end: 'endTime',
            },
            prepare({ date, start, end }) {
            return {
                title: date ? new Date(date).toLocaleDateString() : 'No date',
                subtitle: start && end ? `${start} – ${end}` : 'No times set',
                media: CalendarIcon,
            }
            },
        },
        },
    ],
    })
    
  ],
})