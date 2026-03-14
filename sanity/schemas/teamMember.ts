import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Miembros del Equipo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
    }),
    defineField({
      name: 'isExpert',
      title: 'Es Experto',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'expertiseArea',
      title: 'Area de Experiencia',
      type: 'string',
      hidden: ({ document }) => !document?.isExpert,
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
