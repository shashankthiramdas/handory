console.log("handory");
const p_page = document.querySelector(".p_page");

const home_page = document.querySelector(".home_page");
const search_page = document.querySelector(".search_page");
const chat_page = document.querySelector(".chat_page");
const profile_page = document.querySelector(".profile_page");
const user_page = document.querySelector(".user_page");
const info_page = document.querySelector(".info_page");


const footer_home_space = document.querySelector(".footer_home_space");
const footer_search_space = document.querySelector(".footer_search_space");
const footer_chat_space = document.querySelector(".footer_chat_space");
const footer_user_space = document.querySelector(".footer_user_space");

const header_info = document.querySelector(".header_info")

function navigator(){
  home_page.style.display = "block";
  
  const close_all=()=>{
    home_page.style.display = "none";
    search_page.style.display = "none";
    chat_page.style.display = "none";
    user_page.style.display = "none";
    profile_page.style.display="none";
    p_page.style.display = "none";
    info_page.style.display = "none";
  }
  footer_home_space.addEventListener("click", () => {
  close_all();
  home_page.style.display = "block";
  window.scrollTo({ top: 0, behavior: "instant" });
});
  footer_search_space.addEventListener("click", () => {
  close_all();
  search_page.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
});
  footer_chat_space.addEventListener("click", () => {
  close_all();
  chat_page.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
});
  footer_user_space.addEventListener("click", () => {
  close_all();
  profile_page.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
});
  header_info.addEventListener("click", () => {
  close_all();
  info_page.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
});
}

navigator();

function menu(){
  
const services = [
  "Paintings",
  "Handicrafts",
  "Handloom",
  "Pottery"/*,
  "Jewelry",
  "Workshop"*/
];

  const menu_bar = document.querySelector(".menu_bar");
 // menu_bar.innerHTML="";
  for(let i=0;i<services.length;i++){
    const m_b_space = document.createElement("div");
  m_b_space.classList.add("m_b_space");
  
  const m_b_pic = document.createElement("div");
  m_b_pic.classList.add("m_b_pic");
  m_b_pic.style.backgroundImage=`url('Menu pics/m${i+1}.png')`
  m_b_space.append(m_b_pic);
  
  const m_b_text = document.createElement("div");
  m_b_text.classList.add("m_b_text");
  m_b_text.innerText=services[i];
  m_b_space.append(m_b_text);
  
  menu_bar.append(m_b_space);
  
  }
}
menu();

const creators = [

  {
    name: "Aradhya Kala Studio",
    followers: 842,
    following: 190,

    profileDescription:
      "Aradhya Kala Studio is a journey through emotion, spirituality, and realism expressed through monochrome art. Inspired by Indian heritage, mythology, and the silent expressions of life, every artwork is carefully crafted to capture depth beyond colors. The artist believes that black and white art reveals truth without distraction — allowing viewers to feel raw emotion, cultural memory, and timeless beauty. Each piece is not just a drawing but a reflection of inner observation, patience, and devotion to artistic storytelling.",

    products: [

      {
        name: "Silent Grace Portrait",
        price: "3,499",
        description:
          "A powerful portrait capturing the quiet strength and emotional depth of a traditional woman. The shading highlights expression and storytelling, reflecting resilience and timeless feminine energy."
      },

      {
        name: "Royal Peacock Study",
        price: "2,999",
        description:
          "Detailed monochrome artwork of a peacock symbolizing elegance and pride. Every feather is crafted with precision, representing nature's intricate beauty and balance."
      },

      {
        name: "Spirit of Freedom Horse",
        price: "3,299",
        description:
          "A dynamic portrayal of a horse capturing motion, strength, and freedom. The strong strokes reflect power and independence, making it a statement piece for bold spaces."
      },

      {
        name: "Meditative Divine Face",
        price: "4,599",
        description:
          "Inspired by spiritual calmness, this artwork reflects inner silence and mindfulness. The detailed textures emphasize peace, awareness, and timeless spiritual wisdom."
      },

      {
        name: "Hanuman Devotion Portrait",
        price: "4,199",
        description:
          "A powerful depiction of Lord Hanuman symbolizing devotion, strength, and unwavering faith. The intense expression and fine detailing reflect spiritual energy and divine courage."
      },

      {
        name: "Sacred Ganesha Portrait",
        price: "5,199",
        description:
          "A devotional representation of Lord Ganesha combining intricate patterns with divine symbolism. Designed to evoke blessings, protection, and spiritual energy in any environment."
      }

    ]
  },
  {
    name: "Varnika Visuals",
    followers: 1_240,
    following: 310,

    profileDescription:
      "Varnika Visuals is a celebration of color, culture, and untamed emotion. The artist blends heritage, wildlife, and human solitude into expressive canvas stories. Inspired by sacred cities, ocean journeys, classical performance art, and raw nature, every painting is created to immerse the viewer into a living moment. Through bold strokes and vibrant palettes, Varnika believes art should not just decorate a wall — it should transport the soul.",

    products: [

      {
        name: "Sacred Riverfront Majesty",
        price: "6,499",
        description:
          "A luminous portrayal of temple architecture standing gracefully beside flowing waters. The painting captures the sacred rhythm of river life — boats resting quietly while golden light touches ancient stone. It is a tribute to timeless devotion and spiritual atmosphere."
      },

      {
        name: "Voyage Beyond Horizons",
        price: "5,799",
        description:
          "A majestic ship sailing through dramatic ocean waves under a glowing sunset sky. This artwork symbolizes courage, ambition, and the endless pursuit of new beginnings."
      },

      {
        name: "Kathakali Expression",
        price: "4,999",
        description:
          "An intense and vibrant depiction of Kathakali performance art. The bold colors and facial detailing highlight tradition, drama, and storytelling rooted deeply in Indian classical culture."
      },

      {
        name: "Whispers of Nectar",
        price: "3,899",
        description:
          "A delicate hummingbird frozen in motion as it embraces a blooming flower. The painting reflects harmony between fragility and energy in nature."
      },

      {
        name: "Eyes of the Wild",
        price: "5,299",
        description:
          "A powerful tiger emerging from reflective waters, its gaze fierce and commanding. This artwork represents strength, dominance, and the silent authority of the wild."
      },

      {
        name: "Solitude at Dusk",
        price: "4,499",
        description:
          "A lone boat drifting beneath a burning sunset sky. The textured strokes and deep contrasts evoke introspection, peace, and the beauty of being alone with one's thoughts."
      }

    ]
  },
  {
    name: "KalaSanskriti Crafts",
    followers: 1540,
    following: 260,

    profileDescription:
      "KalaSanskriti Crafts preserves India's cultural stories through handcrafted figurines inspired by festivals, village life, and classical traditions. Each creation captures moments of celebration, devotion, and everyday heritage — from dancers and musicians to sacred deities and folk scenes. The artist focuses on storytelling through miniature sculptures, allowing homes to carry living memories of tradition and cultural identity.",

    products: [

      {
        name: "Village Bullock Cart Scene",
        price: "3,299",
        description:
          "A detailed handcrafted depiction of a traditional bullock cart symbolizing rural life, journey, and simplicity rooted in Indian heritage."
      },

      {
        name: "Classical Dance Figurine Set",
        price: "2,999",
        description:
          "Elegant miniature dancers inspired by classical Indian performance art, celebrating rhythm, grace, and cultural expression."
      },

      {
        name: "Traditional Wooden Folk Dolls",
        price: "1,799",
        description:
          "Colorful wooden dolls representing traditional attire and regional identity. Perfect for festive displays and collectors."
      },

      {
        name: "Folk Game Couple Sculpture",
        price: "1,599",
        description:
          "A charming handcrafted scene showing traditional leisure activities, highlighting human connection and playful cultural moments."
      },

      {
        name: "Sacred Deity Decorative Panel",
        price: "4,499",
        description:
          "A vibrant decorative piece featuring divine figures arranged in traditional style, bringing spiritual energy into living spaces."
      },

      {
        name: "Village Musician Figurine Set",
        price: "2,699",
        description:
          "Hand-painted figurines of traditional musicians celebrating storytelling through music and community gatherings."
      }

    ]
  },
  {
    name: "RajRang Handicrafts",
    followers: 1675,
    following: 340,

    profileDescription:
      "RajRang Handicrafts celebrates India's rich artisan heritage through vibrant handcrafted decor inspired by royal traditions and folk storytelling. Each piece reflects intricate detailing, bold colors, and symbolic animal motifs representing strength, prosperity, and cultural identity. The creator focuses on preserving traditional craftsmanship while adapting it into modern home decor that feels both timeless and expressive.",

    products: [

      {
        name: "Royal Peacock Showpiece",
        price: "3,499",
        description:
          "A beautifully crafted peacock sculpture symbolizing grace and prosperity. Detailed feather patterns and vibrant colors make it a striking centerpiece."
      },

      {
        name: "Handpainted Folk Wooden Stool",
        price: "4,299",
        description:
          "A traditional wooden stool decorated with bright folk patterns. Functional yet artistic, it adds heritage charm to any space."
      },

      {
        name: "Elephant Mirror Frame",
        price: "5,199",
        description:
          "An ornate mirror framed by an elephant design representing wisdom and strength. A perfect fusion of utility and cultural symbolism."
      },

      {
        name: "Desert Caravan Camel Figurine",
        price: "2,799",
        description:
          "Handcrafted camel sculpture inspired by desert traditions. The detailed textile patterns reflect Rajasthan’s artistic spirit."
      },

      {
        name: "Folk Musician Sculpture Set",
        price: "3,899",
        description:
          "Colorful figurines depicting traditional musicians, celebrating rhythm, storytelling, and cultural performance."
      },

      {
        name: "Majestic Elephant Wall Decor",
        price: "4,699",
        description:
          "A decorative elephant wall piece symbolizing power and protection. Intricate patterns bring a regal presence to interiors."
      }

    ]
  },
  {
    name: "ReVibe Bottle Art",
    followers: 1185,
    following: 210,

    profileDescription:
      "ReVibe Bottle Art transforms discarded glass into vibrant storytelling pieces. Inspired by sustainability and creativity, the artist believes that beauty can emerge from forgotten objects. Each bottle is carefully cleaned, hand-painted, and reimagined into decor that carries personality — from playful expressions to tribal traditions and modern minimalism. The mission is to reduce waste while adding art and joy into everyday spaces.",

    products: [

      {
        name: "Hanging Garden Bottle Planters",
        price: "1,299",
        description:
          "Colorful hand-painted hanging bottles designed to hold plants or decorative lights. These pieces combine sustainability with cheerful garden aesthetics."
      },

      {
        name: "Smiley Character Bottle Set",
        price: "999",
        description:
          "Playful bottles featuring expressive cartoon faces that bring humor and liveliness into home decor."
      },

      {
        name: "Minimal Folk Painted Bottles",
        price: "1,499",
        description:
          "Clean and artistic bottle designs blending minimal patterns with subtle cultural inspiration."
      },

      {
        name: "Tribal Story Bottle Art",
        price: "1,899",
        description:
          "Intricately painted bottles inspired by tribal figures and traditional storytelling motifs, celebrating cultural heritage through recycled materials."
      },

      {
        name: "Modern Graphic Bottle Series",
        price: "1,699",
        description:
          "Black glass bottles transformed into bold modern art pieces using strong contrast designs and contemporary visual themes."
      },

      {
        name: "Masked Spirit Decorative Bottle",
        price: "2,099",
        description:
          "A dramatic hand-painted bottle featuring mask-inspired artwork symbolizing mystery, expression, and artistic freedom."
      }

    ]
  },
  {
    name: "RangSutra Bags",
    followers: 1430,
    following: 280,

    profileDescription:
      "RangSutra Bags celebrates the art of traditional textile embroidery transformed into functional fashion. Inspired by Indian tribal patterns, mirror work, and vibrant storytelling through fabric, each bag carries the spirit of handmade craftsmanship. The creator believes accessories are more than style — they are cultural expressions that travel with you. Every stitch represents patience, tradition, and the beauty of human creativity woven into everyday life.",

    products: [

      {
        name: "Mandala Mirror Sling",
        price: "1,699",
        description:
          "A circular embroidered sling bag inspired by mandala symmetry and traditional mirror work. Designed to add vibrant ethnic charm while remaining lightweight and functional."
      },

      {
        name: "Festival Patchwork Tote",
        price: "2,299",
        description:
          "A colorful tote crafted from patchwork textiles reflecting festival energy. Rich embroidery and bright tones make it perfect for everyday cultural expression."
      },

      {
        name: "Heritage Embroidery Handbag",
        price: "2,499",
        description:
          "A heavily embroidered handbag combining traditional patterns with modern usability. Each detail reflects heritage craftsmanship passed through generations."
      },

      {
        name: "Tribal Triangle Sling",
        price: "1,899",
        description:
          "A unique triangular design featuring tribal motifs and tassel accents. Bold and expressive, this bag blends artistic identity with practical fashion."
      },

      {
        name: "Geometric Artisan Tote",
        price: "2,099",
        description:
          "Modern geometric embroidery meets traditional textile art in this structured shoulder bag. Designed for those who love culture with contemporary style."
      },

      {
        name: "Azure Folk Shoulder Bag",
        price: "2,699",
        description:
          "A deep blue handcrafted bag featuring intricate embroidery that balances elegance and everyday functionality."
      }

    ]
  },
  {
    name: "Prakriti Folk Creations",
    followers: 965,
    following: 140,

    profileDescription:
      "Prakriti Folk Creations is rooted in traditional Indian folk art where culture meets handmade warmth. Every piece reflects stories passed through generations — from tribal motifs to symbolic nature elements. The artist focuses on transforming everyday home spaces into soulful environments filled with color, tradition, and positive energy. Each creation celebrates heritage while bringing handcrafted authenticity into modern homes.",

    products: [

      {
        name: "Tribal Heritage Wall Plates",
        price: "2,199",
        description:
          "A collection of hand-painted plates inspired by tribal storytelling and ancient symbols. The bold red tones and intricate patterns represent protection, unity, and cultural identity."
      },

      {
        name: "Mandala Celebration Plates",
        price: "2,499",
        description:
          "Vibrant mandala designs crafted with precise detailing and joyful colors. These decorative plates symbolize harmony, balance, and festive energy."
      },

      {
        name: "Floral Welcome Hanging",
        price: "1,299",
        description:
          "A cheerful handmade welcome decor designed to greet guests with warmth. The floral patterns and bright colors create a positive first impression for any home."
      },

      {
        name: "Tree of Life Wall Art",
        price: "3,599",
        description:
          "A symbolic tree representing growth, connection, and abundance. The layered leaves and earthy tones reflect nature’s cycles and spiritual grounding."
      },

      {
        name: "Folk Painted Decorative Pot",
        price: "1,899",
        description:
          "A beautifully hand-painted pot featuring traditional patterns that bring rustic charm and artistic elegance into living spaces."
      }

    ]
  }

];

function product_list_fun(){

  const product_list_space = document.querySelector(".product_list_space");

  product_list_space.innerHTML = "";

  const maxProducts = Math.max(
    ...creators.map(c => c.products.length)
  );

  for (let j = 0; j < maxProducts; j++) {

    for (let i = 0; i < creators.length; i++) {

      if (!creators[i].products[j]) continue;

      const product_list_item = document.createElement("div");
      product_list_item.classList.add("product_list_item");

      const product_img = document.createElement("img");
      product_img.classList.add("product_img");
      product_img.src = `product pics/account${i+1}/p${j+1}.jpg`;

      product_list_item.append(product_img);

      const product_title = document.createElement("div");
      product_title.classList.add("product_title");
      product_title.innerText = creators[i].products[j].name;

      product_list_item.append(product_title);

      product_list_item.onclick = () => {
        p_page_p_list_fun(i, j);
      };

      product_list_space.append(product_list_item);

    }

  }

}

product_list_fun();


const p_page_back = document.querySelector(".p_page_back");

const p_page_name = document.querySelector(".p_page_name");
const p_page_details_img_tag = document.querySelector(".p_page_details_img_tag");
const p_page_p_d_name = document.querySelector(".p_page_p_d_name");
const p_page_p_d_dis = document.querySelector(".p_page_p_d_dis");
const p_page_p_d_price_value = document.querySelector(".p_page_p_d_price_value");

const p_page_a_d_dp = document.querySelector(".p_page_a_d_dp");
const p_page_a_d_name = document.querySelector(".p_page_a_d_name");
const p_page_a_d_follow_btn = document.querySelector(".p_page_a_d_follow_btn");

const p_page_p_list_r_list_space = document.querySelector(".p_page_p_list_r_list_space");


p_page_back.addEventListener("click", () => {
  p_page.style.display = "none";
  home_page.style.display = "block";
  window.scrollTo({ top: 0, behavior: "instant" });
});

let followState = {};

function p_page_p_list_fun(a_p_num, p_num) {

  const creator = creators[a_p_num];
  const product = creator.products[p_num];
  
  user_page.style.display = "none";
  home_page.style.display = "none";
  p_page.style.display = "block";

  window.scrollTo({ top: 0, behavior: "instant" });

  p_page_name.innerText = creator.name;

  p_page_details_img_tag.src =
    `product pics/account${a_p_num + 1}/p${p_num + 1}.jpg`;

  p_page_p_d_name.innerText = product.name;
  p_page_p_d_dis.innerText = product.description;
  p_page_p_d_price_value.innerText = `${product.price} ₹`;

  p_page_a_d_dp.style.backgroundImage = `url('account_dps/a${a_p_num+1}.jpg')`;
  p_page_a_d_name.innerText = creator.name;
  p_page_a_d_name.addEventListener("click",()=>{
   p_page.style.display="none";
  user_page_fun(a_p_num,p_num);
  });


  if (!followState[a_p_num]) {
    followState[a_p_num] = false;
  }

  p_page_a_d_follow_btn.innerText =
    followState[a_p_num] ? "Following" : "Follow";

  p_page_a_d_follow_btn.onclick = () => {
    followState[a_p_num] = !followState[a_p_num];
    p_page_a_d_follow_btn.innerText =
      followState[a_p_num] ? "Following" : "Follow";
  };

  p_page_p_list_r_list_space.innerHTML = "";

  creator.products.forEach((item, i) => {
    console.log(item,i)
    if (i === p_num) return;
    const card = document.createElement("div");
    card.classList.add("p_page_p_list_r_list_item");

    const img = document.createElement("img");
    img.classList.add("p_page_p_list_r_img");
    img.src = `product pics/account${a_p_num + 1}/p${i + 1}.jpg`;

    const title = document.createElement("div");
    title.classList.add("p_page_p_list_r_title");
    title.innerText = item.name;

    card.append(img, title);

    card.onclick = () => {
      p_page_p_list_fun(a_p_num, i);
    };

    p_page_p_list_r_list_space.append(card);

  });

}

//p_page_p_list_fun(2,2);

const user_page_back = document.querySelector(".user_page_back");
const user_page_name = document.querySelector(".user_page_name");

const user_page_logo = document.querySelector(".user_page_logo");

const user_page_i_follow_space = document.querySelector(".user_page_i_follow_space");
const user_page_i_message_space = document.querySelector(".user_page_i_message_space");

const user_page_a_d_posts_value = document.querySelector(".user_page_a_d_posts_value");
const user_page_a_d_followers_value = document.querySelector(".user_page_a_d_followers_value");
const user_page_a_d_following_value = document.querySelector(".user_page_a_d_following_value");

const user_page_p_list_r_list_space = document.querySelector(".user_page_p_list_r_list_space");

const user_page_user_name = document.querySelector(".user_page_user_name");
const user_page_user_dis = document.querySelector(".user_page_user_dis");


function user_page_fun(a_p_num,p_num){
  const creator = creators[a_p_num];
  const product = creator.products[p_num];
  user_page.style.display = "block";
  window.scrollTo({ top: 0, behavior: "instant" });
  user_page_back.addEventListener("click", () => {
  user_page.style.display = "none";
  // home_page.style.display = "block";
  // window.scrollTo({ top: 0, behavior: "instant" });
  p_page_p_list_fun(a_p_num,p_num);
});
  
  user_page_name.innerText=`${creator.name}`;
  user_page_logo.style.backgroundImage=`url('account_dps/a${a_p_num+1}.jpg')`;
user_page_a_d_posts_value.innerText=`${creator.products.length}`;
user_page_a_d_followers_value.innerText=`${creator.followers}`;
user_page_a_d_following_value.innerText=`${creator.following}`;
  user_page_p_list_r_list_space.innerHTML = "";

  creator.products.forEach((item, i) => {

    const card = document.createElement("div");
    card.classList.add("p_page_p_list_r_list_item");

    const img = document.createElement("img");
    img.classList.add("p_page_p_list_r_img");
    img.src = `product pics/account${a_p_num + 1}/p${i + 1}.jpg`;

    const title = document.createElement("div");
    title.classList.add("p_page_p_list_r_title");
    title.innerText = item.name;

    card.append(img, title);

    card.onclick = () => {
      p_page_p_list_fun(a_p_num, i);
    };

    user_page_p_list_r_list_space.append(card);

  });
  
  if (!followState[a_p_num]) {
    followState[a_p_num] = false;
  }

  user_page_i_follow_space.innerText =
    followState[a_p_num] ? "Following" : "Follow";

  user_page_i_follow_space.onclick = () => {
    followState[a_p_num] = !followState[a_p_num];
    user_page_i_follow_space.innerText =
      followState[a_p_num] ? "Following" : "Follow";
  };
  user_page_i_message_space.addEventListener("click", () => {
  user_page.style.display="none";
  chat_page.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "instant" });
  
});
  
  user_page_user_name.innerText=`${creator.name}`;
  user_page_user_dis.innerText=`${creator.profileDescription}`;

}

//user_page_fun(0,0);

console.log("Hello world");
