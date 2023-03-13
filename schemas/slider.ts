export default {
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    {
      name: 'titleSlider',
      title: 'Title of Slider',
      type: 'string',
      description: 'Just for the reference of objects',
    },
    {
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'SIZE : 1600x716px.   These images will show up in Slider on Home page',
    },
  ],
}
