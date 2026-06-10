import { Request, Response } from "express";
import Errors, { Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import { AdminRequest } from "../libs/types/member";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("product");
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standards.code).json(Errors.standards);
  }
};

productController.createNewProduct = (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.send("DONE");
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standards.code).json(Errors.standards);
  }
};

productController.updateChosenProduct = (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standards.code).json(Errors.standards);
  }
};
export default productController;
