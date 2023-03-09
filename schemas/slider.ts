export default {
        name: "slider",
        title: "Slider",
        type: "document",
        fields: [
            {
                name: "images",
                title: "Images",
                type: "array",
                of: [
                    {
                        type: "reference",
                        to: { type: "product" },
                    },
                ],
                description: 'Add the reference of the product you want to show in the slider at the main page',
            }
        ]
}