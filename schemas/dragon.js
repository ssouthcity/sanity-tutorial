export default {
  name: 'dragon',
  type: 'document',
  title: 'Dragon',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'elements',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'element'}]}],
      title: 'Elements',
    },
  ],
}
