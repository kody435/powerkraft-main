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
                marks: {
                  decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' },
                    { title: 'Highlight', value: 'highlight' }
                  ]
                },
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