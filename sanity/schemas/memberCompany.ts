import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'memberCompany',
  title: 'Empresas Miembro',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Sitio Web',
      type: 'url',
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Supermercados', value: 'supermercados' },
          { title: 'Farmacias', value: 'farmacias' },
          { title: 'Tiendas por Departamento', value: 'tiendas-departamento' },
          { title: 'Ferreterias', value: 'ferreterias' },
          { title: 'Electrodomesticos', value: 'electrodomesticos' },
          { title: 'Comercio General', value: 'comercio-general' },
          { title: 'Otros', value: 'otros' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
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
      subtitle: 'sector',
      media: 'logo',
    },
  },
})
