import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/Layout";
import axios from 'axios';
import { IMenuItem } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from "querystring";
import { API } from '../../helpers/api';
import { SectionComponent } from "../../page-components/SectionComponent/SectionComponent";

function Type({ menu, firstCategory }: ITypeProps): JSX.Element {
    return (
        <SectionComponent
            sections={menu}
        />
    );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(item => '/' + item.route),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(item => item.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface ITypeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number
}