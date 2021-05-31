import Head from 'next/head';
import { CategoryList } from '~/components/categoryList';
import { FeaturedProduct } from '~/components/FeaturedProduct';

export default function Home() {
    return (
        <div className="home">
            <FeaturedProduct />
            <div className="page-content">
                <CategoryList />
            </div>
        </div>
    );
}
