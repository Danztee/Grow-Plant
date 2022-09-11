import React from "react";
import DetailsList from "./DetailsList";

function Details() {
  const contents = [
    {
      id: 1,
      image: "Rectangle-copy.png",
      title: "Grow Your Plant With Us Today",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna imperdiet dapibus nibh phasellus nunc. Vitae sagittis dignissim molestie nec morbi etiam facilisis gravida fames. Id et eu amet, duis. Commodo, egestas senectus senectus sed vestibulum faucibus adipiscing posuere tincidunt. Consequat cras integer diam nunc, vitae dolor neque. At lectus ultricies ac velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna im",
    },
    {
      id: 2,
      image: "Rectangle(1).png",
      title: "Plants created with quality Fetilizers",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna imperdiet dapibus nibh phasellus nunc. Vitae sagittis dignissim molestie nec morbi etiam facilisis gravida fames. Id et eu amet, duis. Commodo, egestas senectus senectus sed vestibulum faucibus adipiscing posuere tincidunt. Consequat cras integer diam nunc, vitae dolor neque. At lectus ultricies ac velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna im",
    },

    {
      id: 3,
      image: "unsplash_EbLX7oRo4vI.png",
      title: "Plants created with quality and Freshness",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna imperdiet dapibus nibh phasellus nunc. Vitae sagittis dignissim molestie nec morbi etiam facilisis gravida fames. Id et eu amet, duis. Commodo, egestas senectus senectus sed vestibulum faucibus adipiscing posuere tincidunt. Consequat cras integer diam nunc, vitae dolor neque. At lectus ultricies ac velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna im",
    },
  ];

  return (
    <div>
      {contents.map((content) => (
        <DetailsList
          key={content.id}
          id={content.id}
          image={content.image}
          title={content.title}
          body={content.body}
        />
      ))}
    </div>
  );
}

export default Details;
