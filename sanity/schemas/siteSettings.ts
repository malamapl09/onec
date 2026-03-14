import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configuracion del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo del Sitio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
    }),
    defineField({
      name: 'phone',
      title: 'Telefono',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Direccion',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter / X',
          type: 'string',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'string',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'announcementBar',
      title: 'Barra de Anuncios',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Habilitada',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'message',
          title: 'Mensaje',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Enlace',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
