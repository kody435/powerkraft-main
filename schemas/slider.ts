export default {
        name: "slider",
        title: "Slider",
        type: "document",
        fields: [
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
            description: "This is the images of the product, it will be used as the gallery of the product",
        ]
}
