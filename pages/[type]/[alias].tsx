import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/Layout";
import axios from 'axios';
import { IMenuItem } from "../../interfaces/menu.interface";
import { ITopLevelCategory, ITopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { IProductModel } from "../../interfaces/product.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { TopPageComponent } from "../../page-components";
import { API } from '../../helpers/api';
import Head from "next/head";
import { Error404 } from "../404";

function TopPage({ page, products, firstCategory }: ITopPageProps): JSX.Element {

    if (!page || !products) {
        return <Error404 />;
    }

    return (
        <>
            <Head>
                <title>{page.metaTitle}</title>
                <meta name="description" content={page.metaDescription} />
                <meta property="og:title" content={page.metaTitle} />
                <meta property="og:description" content={page.metaDescription} />
                <meta property="og:type" content="article" />
            </Head>
            <TopPageComponent
                firstCategory={firstCategory}
                page={page}
                products={products}
            />
        </>
    );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const menuItem of firstLevelMenu) {
        const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
            firstCategory: menuItem.id
        });
        paths = paths.concat(menu.flatMap(item => item.pages.map((page) => `/${menuItem.route}/${page.alias}`)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find((menu) => menu.route === params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    try {
        const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
            firstCategory: firstCategoryItem.id
        });
        if (!menu.length) {
            return {
                notFound: true
            };
        }
        const { data: page } = await axios.get<ITopPageModel>(API.topPage.byAlias + params.alias);
        const { data: products } = await axios.post<IProductModel[]>(API.product.find, {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface ITopPageProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: ITopLevelCategory,
    page: ITopPageModel,
    products: IProductModel[]
}