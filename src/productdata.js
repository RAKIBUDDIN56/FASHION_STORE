import iphone1 from "./images/iphone1.png";
import iphone2 from "./images/iphone2.jpg";
import iphone3 from "./images/iphone3.jpg";
import iphone4 from "./images/iphone4.jpg";
import jac1 from "./images/jac1.jpg";
import jac2 from "./images/jac2.jpg";
import jac3 from "./images/jac3.jpg";
import jac4 from "./images/jac4.jpg";
import watch1 from "./images/watch1.jpg";
import watch2 from "./images/watch2.jpg";
import watch3 from "./images/watch3.jpg";
import watch4 from "./images/watch4.jpg";
import lamp1 from "./images/lamp1.jpg";
import lamp2 from "./images/lamp2.jpg";
import lamp3 from "./images/lamp3.jpg";
import lamp4 from "./images/lamp4.jpg";

export default [
    {
        sys: {
            id: "1"
        },
        fields: {
            name: "Apple iphone 7 plus",
            slug: "Phone",
            price: "$314.87",
            category: "Electronic",
            description:"Released 2016, September 16.188g, 7.3mm thickness. iOS 10.0.1, up to iOS 13.4. 32GB/128GB/256GB storage, no card slot",
            state : "New",
            from : "USA",
            discount : "$50.87",
            images: [
                {
                    fields: {
                        file: {
                            url: iphone1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: iphone2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: iphone3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: iphone4
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
            name: "Leather jacket",
            slug: "jacket",
            price: "$150.00",
            category: "Fashion",
            description:"Now a year-round staple, they come in lighter weights and pale colors, like Tory Burch's in camel or Banana Republic's in beige.",
            state : "New",
            from : "India",
            discount : "$17.86",
            images: [
                {
                    fields: {
                        file: {
                            url: jac1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: jac2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: jac3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: jac4
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
            name: "Smart Watch",
            slug: "Watch",
            price: "$44.99",
            category: "Electronic",
            description:"Casual Womens Waterproof Bluetooth Heart Rate Monitoring Girl Smart Bracelet Charm Fitness Watch",
            state : "New",
            from : "China",
            discount : "$5.67",
            images: [
                {
                    fields: {
                        file: {
                            url: watch1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: watch3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: watch2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: watch4
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "4"
        },
        fields: {
            name: "Table lamp",
            slug: "lamp",
            price: "$133.50",
            category: "Gifts",
            description:"Antique 19th century burma bronze dragon Table lamp. Working condition",
            state : "New",
            from : "Burma",
            discount : "$17.67",
            images: [
                {
                    fields: {
                        file: {
                            url: lamp1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: lamp2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: lamp3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: lamp4
                        }
                    }
                }
            ]
        }
    },
];
