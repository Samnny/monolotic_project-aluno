import AgregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value_object/ide.value_object";

type ProductProps = {
    id: Id
    name: string;
    price: number;
    description: string;
    salesPrice: number;
}
export default class Product extends BaseEntity implements AgregateRoot {
    private _name: string;
    private _price: number;
    private _description: string;
    private _salesPrice: number;

    constructor(props: ProductProps) {
        super(props.id);
        this._name = props.name;
        this._price = props.price;
        this._description = props.description;
        this._salesPrice = props.salesPrice;
    }

    get name(): string {
        return this._name;
    }
    get price(): number {
        return this._price;
    }
    get description(): string {
        return this._description;
    }
    get salesPrice(): number {
        return this._salesPrice;
    }
    

}