import { useEffect, useState } from "react";
import { Htag, Button, Ptag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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