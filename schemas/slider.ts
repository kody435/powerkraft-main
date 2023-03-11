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
            description: "These images will show up in Slider on Home page",
        ]
}
