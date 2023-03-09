import { defineArrayMember, defineField } from "sanity";

export default
{
    name: "product",
        title: "Products",
        type: "document",
        fields: [
          defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "This is the title of the product",
          }),
          defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
            },
            description:
              "This is the slug of the product, it will be used to create the url of the product",
          }),
          defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [{
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            }],
            description: "This is the main image of the product, it will be used as the thumbnail of the product",
          }),
          defineArrayMember({
            name: "images",
            title: "Images",
            type: "array",
            of: [
              {
                type: "image",
                options: {
                  hotspot: true,
                },
              },
            ],
            description:
              "This is the images of the product, it will be used as the gallery of the product",
          }),

          {
            name: "content",
            type: "array",
            title: "Content",
            of: [
              {
                type: 'block',
                // Only allow these block styles
                styles: [
                  {title: 'Normal', value: 'normal'},
                  { title: 'H2', value: 'h2' },
                  { title: 'H3', value: 'h3' },
                  { title: 'H4', value: 'h4' },
                  { title: 'H5', value: 'h5' },
                  { title: 'H6', value: 'h6' },
                  { title: 'Quote', value: 'blockquote' }
                ],
                // Only allow numbered lists
                lists: [
                  {title: 'Numbered', value: 'number'}
                ],
                marks: {
                  // Only allow these decorators
                  decorators: [
                    {title: 'Bold', value: 'strong'},
                    {title: 'Italics', value: 'em'}
                  ],
                }
              }
            ],
          },
          defineArrayMember({
            name: "amazonLink",
            title: "Amazon Link",
            type: "url",
            description:
              "This is the amazon link of the product, it will be used to redirect the user to the amazon page of the product",
          }),
          {
            name: "similarProduct",
            title: "Similar Products",
            type: "array",
            of: [{ type: "reference", to: { type: "product" } }],
          },
        ],
    }