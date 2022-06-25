import "./App.css";
import Card from "./Card";

function App() {
  // const imageUrl = [
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/k54qhuuvvvyrubzw3l8d",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pgkhio80bk1sevfacdfv",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/k54qhuuvvvyrubzw3l8d",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pgkhio80bk1sevfacdfv",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/k54qhuuvvvyrubzw3l8d",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pgkhio80bk1sevfacdfv",
  // ];
  let data = [
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
      rating: 1,
      etd: "30 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Burger King",
      desc: "American",
      rating: 1,
      etd: "30 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Dominic Pizza",
      desc: "Pizzas, Italian",
      rating: 1,
      etd: "30 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "CHAUHAN DHABAo",
      desc: "Indian",
      rating: 3,
      etd: "30 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
      rating: 4,
      etd: "70 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
      rating: 1,
      etd: "30 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
      rating: 1,
      etd: "30 mins",
      avgPrice: "100 for 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
      heading: "Wow! Momo",
      desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
    },
  ];
  const getAllCards = (data) => {
    return data.map((elem, index) => (
      <Card
        imageUrl={elem.imageUrl}
        heading={elem.heading}
        desc={elem.desc}
        rating={elem.rating ? elem.rating : null}
        etd={elem.etd ? elem.etd : null}
        avgPrice={elem.avgPrice ? elem.avgPrice : null}
        key={index}
        index={index}
      />
    ));
  };
  return (
    <>
      {getAllCards(data)}
      {/* <Card
        imageUrl={data[0].imageUrl}
        heading={data[0].heading}
        desc={data[0].desc}
      ></Card>
      <Card
        imageUrl={data[0].imageUrl}
        heading={data[1].heading}
        desc={data[1].desc}
      ></Card>
      <Card
        imageUrl={data[1].imageUrl}
        heading={data[2].heading}
        desc={data[2].desc}
      ></Card>
      <Card
        imageUrl={data[2].imageUrl}
        heading={data[3].heading}
        desc={data[3].desc}
      ></Card>
      <Card
        imageUrl={data[3].imageUrl}
        heading={data[4].heading}
        desc={data[4].desc}
      ></Card>
      <Card
        imageUrl={data[4].imageUrl}
        heading={data[5].heading}
        desc={data[5].desc}
      ></Card>
      <Card
        imageUrl={data[5].imageUrl}
        heading={data[6].heading}
        desc={data[6].desc}
      ></Card>
      <Card
        imageUrl={data[6].imageUrl}
        heading={data[7].heading}
        desc={data[7].desc}
      ></Card>
      <Card
        imageUrl={data[7].imageUrl}
        heading={data[7].heading}
        desc={data[7].desc}
      ></Card>
      <Card
        imageUrl={data[8].imageUrl}
        heading={data[8].heading}
        desc={data[8].desc}
      ></Card>
      <Card
        imageUrl={data[9].imageUrl}
        heading={data[9].heading}
        desc={data[9].desc}
      ></Card>
      <Card
        imageUrl={data[10].imageUrl}
        heading={data[10].heading}
        desc={data[10].desc}
      ></Card> */}
    </>
  );
}

export default App;
