import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    smallCards: [
      {
        id: 1,
        img: "./interno/img/small-card__Photo1.png",
        imgDescription: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022 ",
      },
      {
        id: 2,
        img: "./interno/img/small-card__Photo2.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
      },
      {
        id: 3,
        img: "./interno/img/small-card__Photo3.png",
        imgDescription: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 4,
        img: "./interno/img/small-card__Photo4.png",
        imgDescription: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "25 December,2022 ",
      },
      {
        id: 5,
        img: "./interno/img/small-card__Photo5.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "25 December,2022 ",
      },
      {
        id: 6,
        img: "./interno/img/small-card__Photo6.png",
        imgDescription: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 7,
        img: "./interno/img/small-card__Photo2.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
      },
      {
        id: 8,
        img: "./interno/img/small-card__Photo3.png",
        imgDescription: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 9,
        img: "./interno/img/small-card__Photo4.png",
        imgDescription: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "25 December,2022 ",
      },
      {
        id: 10,
        img: "./interno/img/small-card__Photo5.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "25 December,2022 ",
      },
      {
        id: 11,
        img: "./interno/img/small-card__Photo3.png",
        imgDescription: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 12,
        img: "./interno/img/small-card__Photo4.png",
        imgDescription: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "25 December,2022 ",
      },
      {
        id: 13,
        img: "./interno/img/small-card__Photo5.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "25 December,2022 ",
      },
      {
        id: 14,
        img: "./interno/img/small-card__Photo6.png",
        imgDescription: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 15,
        img: "./interno/img/small-card__Photo2.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
      },
      {
        id: 16,
        img: "./interno/img/small-card__Photo3.png",
        imgDescription: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 17,
        img: "./interno/img/small-card__Photo4.png",
        imgDescription: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "25 December,2022 ",
      },
      {
        id: 18,
        img: "./interno/img/small-card__Photo5.png",
        imgDescription: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "25 December,2022 ",
      },
    ],
    cards: [
      {
        id: 1,
        imgSrc: "./interno/img/big-card__Photo1.png",
        imgAlt: "Picture 1",
        header: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 2,
        imgSrc: "./interno/img/big-card__Photo2.png",
        imgAlt: "Picture 2",
        header: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 3,
        imgSrc: "./interno/img/big-card__Photo3.png",
        imgAlt: "Picture 3",
        header: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 4,
        imgSrc: "./interno/img/big-card__Photo4.png",
        imgAlt: "Picture 4",
        header: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
    ],
    tags: [
      {
        id: 1,
        tagName: "Kitchen",
        check: false,
      },
      {
        id: 2,
        tagName: "Bedroom",
        check: false,
      },
      {
        id: 3,
        tagName: "Building",
        check: false,
      },
      {
        id: 4,
        tagName: "Architecture",
        check: false,
      },
      {
        id: 5,
        tagName: "Kitchen Planning",
        check: false,
      },
      {
        id: 6,
        tagName: "Bedroom",
        check: false,
      },
    ],
    articles: [
      {
        id: 1,
        tag: "Kitchen",
        urlImg:
          "https://media.architecturaldigest.com/photos/6442da171870ecdbed029950/16:9/w_5521,h_3105,c_limit/AVD%20House%20-%20High%20Res-061.jpg",
        title: `Kitchen Let’s Get Solution For Building Construction Work`,
        description: ``,
        listOfProperties: [],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 2,
        tag: "Kitchen Planning",
        urlImg:
          "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
        title: `Kitchen Planning Low Cost Latest Invented Interior Designing Ideas.`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 3,
        tag: "Building",
        urlImg:
          "https://i.pinimg.com/736x/2d/ea/a3/2deaa3ee532f5e973814c25ef6780a56.jpg",
        title: `Building Best For Any Office & Business Interior Solution`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 4,
        tag: "Bedroom",
        urlImg:
          "https://hips.hearstapps.com/hmg-prod/images/ghk010121homefeature-008-1671137680.png?resize=1200:*",
        title: `Bedroom Let’s Get Solution For Building Construction Work`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 5,
        tag: "Architecture",
        urlImg:
          "https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1590821174418-EN1TWKVGTXP9AAVN7NDI/image-asset.jpeg?format=1500w",
        title: `Architecture Low Cost Latest Invented Interior Designing Ideas.`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: ``,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 6,
        tag: "Building",
        urlImg:
          "https://i.pinimg.com/736x/2d/ea/a3/2deaa3ee532f5e973814c25ef6780a56.jpg",
        title: `Building Best For Any Office & Business Interior Solution`,
        description: ``,
        listOfProperties: [],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 7,
        tag: "Kitchen",
        urlImg:
          "https://media.architecturaldigest.com/photos/6442da171870ecdbed029950/16:9/w_5521,h_3105,c_limit/AVD%20House%20-%20High%20Res-061.jpg",
        title: `Kitchen Best For Any Office & Business Interior Solution`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 8,
        tag: "Kitchen",
        urlImg:
          "https://media.architecturaldigest.com/photos/6442da171870ecdbed029950/16:9/w_5521,h_3105,c_limit/AVD%20House%20-%20High%20Res-061.jpg",
        title: `Kitchen Best For Any Office & Business Interior Solution`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 9,
        tag: "Bedroom",
        urlImg:
          "https://hips.hearstapps.com/hmg-prod/images/ghk010121homefeature-008-1671137680.png?resize=1200:*",
        title: `Bedroom Best For Any Office & Business Interior Solution`,
        description: ``,
        listOfProperties: [],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 10,
        tag: "Building",
        urlImg:
          "https://i.pinimg.com/736x/2d/ea/a3/2deaa3ee532f5e973814c25ef6780a56.jpg",
        title: `Building Best For Any Office & Business Interior Solution`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 11,
        tag: "Building",
        urlImg:
          "https://i.pinimg.com/736x/2d/ea/a3/2deaa3ee532f5e973814c25ef6780a56.jpg",
        title: `Building Best For Any Office & Business Interior Solution`,
        description: ``,
        listOfProperties: [
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        ],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
      {
        id: 12,
        tag: "Architecture",
        urlImg:
          "https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1590821174418-EN1TWKVGTXP9AAVN7NDI/image-asset.jpeg?format=1500w",
        title: `Architecture Best For Any Office & Business Interior Solution`,
        description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        listOfProperties: [],
        content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        date: "26 December,2022",
        like: false,
      },
    ],
    projectSwitcher: [
      {
        id: 1,
        name: "Bathroom",
        img: "",
        enabled: false,
      },
      {
        id: 2,
        name: "Bed Room",
        img: "",
        enabled: false,
      },
      {
        id: 3,
        name: "Kitchan",
        img: "",
        enabled: false,
      },
      {
        id: 4,
        name: "Living Area",
        img: "",
        enabled: false,
      },
    ],
    projectCards: [
      {
        id: 1,
        img: "./interno/img/card_project_1.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 2,
        img: "./interno/img/card_project_2.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 3,
        img: "./interno/img/card_project_3.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 4,
        img: "./interno/img/card_project_4.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 5,
        img: "./interno/img/card_project_5.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 6,
        img: "./interno/img/card_project_6.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 7,
        img: "./interno/img/card_project_7.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 8,
        img: "./interno/img/card_project_8.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 9,
        img: "./interno/img/card_project_2.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 10,
        img: "./interno/img/card_project_4.png",
        sliderPhotos: [
          "./interno/img/PD_Photo1.png",
          "./interno/img/PD_Photo2.png",
          "./interno/img/greetings__photo.png",
        ],
        title: "Minimal Bedroom",
        header: "Minimal Look Bedrooms",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
    ],
    currentTag: "",
    currentPagesArray: [],
    currentChoice: "",
    size: 6,
    currentPage: 1,
    projectCardsDetails: {
      id: 1,
      img: "./interno/img/card_project_1.png",
      sliderPhotos: [
        "https://dekorin.me/wp-content/uploads/2019/01/detskaya-komnata-dizayn-osveshcheniya-s-lyustroy.jpg",
        "https://s0.rbk.ru/v6_top_pics/media/img/6/52/754678195375526.jpeg",
        "https://i.pinimg.com/originals/b2/5c/be/b25cbefe4d3278fa3d2e237bc1ba3ac8.jpg",
      ],
      title: "Minimal Bedroom",
      header: "Minimal Look Bedrooms",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
      class: "Decor / Artchitecture",
      name: "Bed Room",
      like: false,
    },
    blogCardsDetails: {},
    sliderState: [],
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Project",
        url: "/project",
      },
      {
        name: "Blog",
        url: "/blog",
      },
    ],
  },
  getters: {
    getTotalPages: (state) =>
      Math.ceil(state.currentPagesArray.length / state.size),

    cardsOnPage: (state) => {
      let result = [];
      let index = 1;
      for (
        let i = (state.currentPage - 1) * state.size;
        i < state.currentPage * state.size;
        i++
      ) {
        result.push({
          id: index,
          img: state.smallCards[i].img,
          imgDescription: state.smallCards[i].imgDescription,
          title: state.smallCards[i].title,
          date: state.smallCards[i].date,
        });
        index++;
      }
      return result;
    },

    pagesArray(state) {
      let result = [];

      for (
        let i = 1;
        i <= Math.ceil(state.currentPagesArray.length / state.size);
        i++
      ) {
        result.push({
          id: i,
          text: i < 10 ? `0${i}` : `${i}`,
        });
      }
      return result;
    },

    taggedArticles(state) {
      return state.currentTag === ""
        ? state.articles
        : state.articles.filter((x) => x.tag === state.currentTag);
    },

    selectedCards(state) {
      return state.currentChoice === ""
        ? state.projectCards
        : state.projectCards.filter((x) => x.name === state.currentChoice) ??
            [];
    },

    cardArrOnPage(state, getters) {
      let result = [];
      let start = (state.currentPage - 1) * state.size;
      let end =
        state.currentPage * state.size > getters.selectedCards.length
          ? getters.selectedCards.length
          : state.currentPage * state.size;

      for (let i = start; i < end; i++) {
        result.push({
          id: getters.selectedCards[i].id,
          img: getters.selectedCards[i].img,
          title: getters.selectedCards[i].title,
          class: getters.selectedCards[i].class,
          like: getters.selectedCards[i].like,
        });
      }
      return result;
    },
  },
  mutations: {
    LOAD_BLOG_PAGINATION(state) {
      state.currentPagesArray = state.smallCards;
      state.currentPage = 1;
      state.size = 6;
    },

    LOAD_PROJECT_PAGINATION(state) {
      state.currentPagesArray = state.articles;
      state.currentPage = 1;
      state.size = 8;
    },

    PAGE_UP(state) {
      state.currentPage++;
    },

    PAGE_DOWN(state) {
      state.currentPage--;
    },

    PAGE_SET(state, num) {
      state.currentPage = num;
    },

    CHECK_TAG(state, id) {
      state.tags.forEach((x) => {
        x.check = x.id === id;
      });
      state.currentTag = state.tags.find((x) => x.check === true).tagName;
    },

    CHANGE_SWITCHER(state, item) {
      state.projectSwitcher.forEach((x) => {
        x.enabled = x.id === item.id;
        state.currentChoice = item.name;
      });
    },

    LIKE(state, data) {
      state.projectCards.forEach((x) => {
        x.like = x.id === data.id ? data.like : x.like;
      });
    },
    CALCULATE_SLIDER_DATA(state) {
      let index = 1;
      state.sliderState = [];

      state.projectCardsDetails.sliderPhotos.forEach((x) => {
        state.sliderState.push({
          id: index,
          src: x,
          alt: state.projectCardsDetails.header,
          show: index === 1 ? true : false,
        });
        index++;
      });
    },
    SET_SLIDE_TO_SHOW(state, id) {
      state.sliderState.forEach((x) => (x.show = x.id === id));
    },
  },
  actions: {},
  modules: {},
});
