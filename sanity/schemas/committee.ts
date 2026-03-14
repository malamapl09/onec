import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'committee',
  title: 'Comites',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
    }),
    defineField({
      name: 'objectives',
      title: 'Objetivos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'members',
      title: 'Miembros',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
    },
  },
})
