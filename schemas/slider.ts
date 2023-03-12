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
      description: 'These images will show up in Slider on Home page',
    },
  ],
}
