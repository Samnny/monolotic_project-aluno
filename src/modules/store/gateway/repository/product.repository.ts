import Id from "../../../@shared/domain/value_object/ide.value_object";
import Product from "../../domain/product.entity";
import ProductGateway from "../product.gareway";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductGateway {
    async findAll(): Promise<Product[]> {

        const products = await ProductModel.findAll();

        return products.map(product => new Product(product.dataValues));


    }
    async find(id: string): Promise<Product> {
        const product = await ProductModel.findByPk(id);
        if (!product) throw new Error('Product not found');

        const output = {
            id: new Id(product.dataValues.id),
            name: product.dataValues.name,
            description: product.dataValues.description,
            salesPrice: product.dataValues.salesPrice
        }

        return new Product(output);
    }

}