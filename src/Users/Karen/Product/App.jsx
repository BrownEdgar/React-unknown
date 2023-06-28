import { useEffect, useState } from "react";
import classNames from "classnames";
import "./App.scss";

export default function App() {
  const [product] = useState([
    {
      id: 1,
      name: "wolf",
      image: "https://images.pexels.com/photos/682375/pexels-photo-682375.jpeg?cs=srgb&dl=pexels-steve-682375.jpg&fm=jpg",
      category: "animals"
    },
    {
      id: 2,
      name: "lion",
      image: "https://media.gettyimages.com/id/1333977253/photo/male-lion-resting-on-a-rock.jpg?s=612x612&w=gi&k=20&c=x785lj0J9oEVJXKB_I1yVsvRXjA4i7sdAte9W91-ZTA=",
      category: "animals"
    },
    {
      id: 3,
      name: "bmw",
      image: "https://i.ytimg.com/vi/5NCR_wWWE2Q/maxresdefault.jpg",
      category: "cars"
    },
    {
      id: 4,
      name: "mercedes",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1872%29.jpg/1200px-Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1872%29.jpg",
      category: "cars"
    },
    {
      id: 5,
      name: "iphone",
      image: "https://i.insider.com/63530334ffcac3001876ce1a?width=1136&format=jpeg",
      category: "phones"
    },
    {
      id: 6,
      name: "samsung",
      image: "https://redstore.am/uploads/shop/products/large/21cb6c0a59721dee438aeb0d02271820.png",
      category: "phones"
    },
  ])

  const [categoriesId, setCategories] = useState({
    categoriesId: [],
    buttonCat: []
  });


	const changeFilter = () => { 
		if (categoriesId.buttonCat.length === 0) return product; 
		return product.filter(elem => categoriesId.buttonCat.includes(elem.category))
	}

	


  
  useEffect(() => {
    const maa =  product.map(elem => elem.category);
    setCategories({ ...categoriesId, categoriesId: maa });
  }, []);
  const unique = Array.from(new Set(categoriesId.categoriesId));
 

  const handleShowFunc = (category) => {
    const catUp = categoriesId.buttonCat.includes(category)
      ? categoriesId.buttonCat.filter((cat) => cat !== category)
      : [...categoriesId.buttonCat, category];

    setCategories({ ...categoriesId, buttonCat: catUp });
  };
  return (
    <div className="big">
      <div className="but_div">
        <button
          className={classNames("btn", {
            active: categoriesId.buttonCat.length === 0,
          })}
					onClick={() => setCategories({ ...categoriesId, buttonCat: [], })}
        >
          All
        </button>
        {unique.map((elem, index) => {
          return (
            <button
              key={index}
              onClick={() => handleShowFunc(elem)}
              className={classNames("btn", {
                active: categoriesId.buttonCat.includes(elem),
              })}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <div className="images_div">
				{changeFilter().map(elem => {
					return <img src={elem.image} key={elem.id} />
				})}
      </div>
    </div>
  );
}