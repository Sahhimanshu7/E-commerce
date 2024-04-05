import UserModel from "../models/UserModel";

export const startBuying = async(req, res) => {
  //  start the buying and move the product to the productsBuyInProgress
  const userId = req.body.userId;
  const productId = req.body.productId;

  // search the user and add id -> productsBuyInProgress

}

export const completeBuying = async (req, res) => {
  // complete the buying process of the user and move the product to bought list
  const userId = req.body.userId;
  const productId = req.body.productId;

  // search the user and add the product id to the productsBought

  // Also remove the product id from user's productsBuyInProgress
  
}

export const startSelling = async (req, res) => {
  // start the selling process and move the product to the productsSellInProgress
  const userId = req.body.userId;
  const productId = req.body.productId;

  // search the user and add the productId to the productsSellInProgress

}

export const completeSelleing = async (req, res) => {
  // complete the selling process of the user and move the product to sold list

  const userId = req.body.userId;
  const productId = req.body.productId;

  // search the user and add the product id to the productsSold

  // Also remove the product id from the user's productsSellInProgress

}