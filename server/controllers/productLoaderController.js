// Loading content based on their category, user's age group, recently created, and country of seller in
// the main homepage.
// Searching based on category and product name.
// Sorting based on price and rating

// Categories :-
// digital services
// cosmetics and body care
// food and beverage
// furniture and decor
// health and wellness
// household items
// media
// pet care
// office equipment
import ProductModel from "../models/ProductModel.js";

export const loadHomePage = async (req, res) => {
  const country = req.params.country;
  const yearOfBirth = req.params.yearOfBirth;

  // load 5 products of each category bsed on the yearofBirth and country

  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;

  let age_Group = "";

  if (age <=0 ) {
    res.status(400).json("Wrong Age");
  } else if (age >=1 && age < 13) {
    age_Group = "1-13";
  } else if (age >=13 && age <= 18) {
    age_Group = "13-18";
  } else if (age >=19 && age <= 25) {
    age_Group = "19-25";
  } else if (age >= 26 && age <= 40) {
    age_Group = "26-40";
  } else if (age > 40) {
    age_Group = "41-";
  }
  else {
    age_Group = "all";
  }

  let electronics = ['Electronics'];
  let cosmeticsAndBodyCare = ['Cosmetics and body care'];
  let foodAndBeverage = ['Food and beverage'];
  let furnitureAndDecor = ['Furniture and decor'];
  let healthAndWellness = ['Health and wellness'];
  let householdItems =['Household items'];
  let media =['Media'];
  let petCare = ['Petcare'];
  let officeEquipment =['Office equipment'];
  
  try {
    await ProductModel.find({
      country: country,
      age_Group: {"$in": [,age_Group]}
    }).sort({ createAt: -1 })
    .then(response => {
      response.map(elements => {
        if (elements.category === "Electronics") {
          electronics.length <= 7 && electronics.push(elements);
        } else if (elements.category === "Cosmetics and body care") {
          cosmeticsAndBodyCare.length <=7 && cosmeticsAndBodyCare.push(elements);
        } else if (elements.category === "Food and beverage") {
          foodAndBeverage.length <=7 && foodAndBeverage.push(elements);
        } else if (elements.category === "Health and wellness") {
          healthAndWellness.length <= 7 && healthAndWellness.push(elements);
        } else if (elements.category === "Household items") {
          householdItems.length <=7 && householdItems.push(elements);
        } else if (elements.category === "Media") {
          media.length <= 7 && media.push(elements);
        } else if (elements.category === "Petcare") {
          petCare.length <= 7 && petCare.push(elements);
        } else if(elements.category === "Office equipment") {
          officeEquipment.length <= 7 && officeEquipment.push(elements);
        }
      })
    })
    .catch(e => {
      return e;
    })
    res.status(200).json([
      electronics,
      cosmeticsAndBodyCare,
      foodAndBeverage,
      furnitureAndDecor,
      healthAndWellness,
      householdItems,
      media,
      petCare,
      officeEquipment
    ]);
  } catch (error) {
    res.status(500).json("Server Error Loading homepage" + error);
  }
}

// Give option to sort by price
export const findProductByName = async (req, res) => {
  const name = req.params.name;

  // define pipeline
  const agg = [
      {$search: {index: "productmodels", autocomplete: {query: name, path: "productName", fuzzy: {}}}},
      {$limit: 20}
  ];

  const result = await ProductModel.aggregate(agg);
  res.json(result);
};

// Give option to sort by price
export const findProductById = async (req, res) => {};

// Give option to sort by price
export const findProductsByCategory = async (req, res) => {};