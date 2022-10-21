import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Htag, Button, Ptag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { IMenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: IHomeProps): JSX.Element {
    return (
        <>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {

    const firstCategory = 0;
    const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface IHomeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number
}