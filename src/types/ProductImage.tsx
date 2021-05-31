export interface IProductImage {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface IProductImageGallery {
    first: IProductImage;
    second: IProductImage;
    third: IProductImage;
}
