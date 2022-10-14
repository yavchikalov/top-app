import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Htag, Button, Ptag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { IMenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: IHomeProps): JSX.Element {
    const [count, setCount] = useState<number>(3);

    useEffect(() => {
        if (count) {
            console.log('count -', count);
        }
    });

    return (
        <>
            <Htag tag="h1">{count}</Htag>
            <Button appearance="ghost" className="asdasd" arrow="right" onClick={() => setCount(count + 1)}>132123</Button>
            <Ptag>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis praesentium nam hic nesciunt incidunt repellat mollitia modi, atque repellendus a, quas labore natus porro suscipit quam corrupti vel cumque.</Ptag>
            <Rating rating={count} isEditable setRating={setCount} />
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