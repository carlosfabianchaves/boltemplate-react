export function returnNav(){
    return [
        {   id: 1,     
            navLabel: "Explore the Resort",
            ChildrenItems : [
                {
                    navLabel: "Example Pages",
                    ChildrenItems: [ 
                        {navLabel: "Example1", link: "./example1"},
                        {navLabel: "Events", link: "./events"},                      
                       
                ]
                },
                {
                    navLabel: "Placeholder",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        },
        {     
            id:2,   
            navLabel: "The Mountain",
            ChildrenItems : [
                {
                    navLabel: "The Mountain 1",
                    ChildrenItems: [  {navLabel: "Snow Report", link: "/snowreport"}]
                },
                {
                    navLabel: "The Mountain 2",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        },
        {     
            id:3,   
            navLabel: "Lessons & Rentals",
            ChildrenItems : [
                {
                    navLabel: "Lessons & Rentals 1",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                },
                {
                    navLabel: "Lessons & Rentals 2",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        },
        {     
            id:4,   
            navLabel: "Lodging & Specials",
            ChildrenItems : [
                {
                    navLabel: "L & S 1",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                },
                {
                    navLabel: "L & S 1 2",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        }
    ];
}
