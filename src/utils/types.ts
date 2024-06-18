export type Pagination = {
	page: number;
	pageCount: number;
	pageSize: number;
	total: number;
};

export type ProductsMeta = {
	categories: string[];
	companies: string[];
	levels: string[];
	basic_levels: string[];
	courses: string[];
	pagination: Pagination;
};

export interface Image {
	url: string;
	name?: string;
}

export type Product = {
	id: string;
	name: string;
	price: number;
	discount?: number;
	level: string;
	course: string;
	category: string;
	company: string;
	image: string;
	images: Image[];
	edition: number;
	featured: boolean;
	description: string;
	inventory: number;
	averageRating: number;
	numOfReviews: number;
	createdAt: string;
	updatedAt: string;
};

export type ProductsResponse = {
	data: Product[];
	meta: ProductsMeta;
};

export type Params = {
	search?: string;
	category?: string;
	company?: string;
	course?: string;
	level?: string;
	basic_level?: string;
	sort?: string;
	price?: string;
	discount?: number;
	page?: number;
};

export type ProductsResponseWithParams = ProductsResponse & { params: Params };

export type SingleProductResponse = {
	data: Product;
	meta: {};
};

export type CartItem = {
	cartID: string;
	productID: string;
	image: string;
	images: Image[];
	name: string;
	price: number;
	amount: number;
	discount?: number;
	company: string;
};

export type CartState = {
	cartItems: CartItem[];
	numItemsInCart: number;
	cartTotal: number;
	discount: number;
	discountTotal: number;
	orderTotal: number;
};

export type Checkout = {
	name: string;
	address: string;
	chargeTotal: number;
	orderTotal: string;
	cartItems: CartItem[];
	numItemsInCart: number;
};
