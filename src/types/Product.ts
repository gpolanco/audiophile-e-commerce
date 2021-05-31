import { IProductImageGallery, IProductImage } from './ProductImage';
import { IProductInclude } from './ProductInclude';
import { IProductRelated } from './ProductRelated';

export interface IProduct {
    category: string;
    description: string;
    features: string;
    id: number;
    image: IProductImage;
    includes: IProductInclude[];
    name: string;
    new: boolean;
    price: number;
    slug: string;
    gallery: IProductImageGallery;
    others: IProductRelated[];
}
