import electronic from "./images/electronic.jpg";
import fashion from "./images/fashion.jpg";
import gifts from "./images/gifts.jpg";

export default [
    {
        sys: {
            id: "1"
        },
        fields: {
            name: "Electronic",
            slug: "Electronic",
            images: [
                {
                    fields: {
                        file: {
                            url: electronic
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            name: "Fashion",
            slug: "Fashion",
            images: [
                {
                    fields: {
                        file: {
                            url: fashion
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            name: "Gifts",
            slug: "Gifts",
            images: [
                {
                    fields: {
                        file: {
                            url: gifts
                        }
                    }
                }
            ]
        }
    }
];
