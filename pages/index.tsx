import { Htag, Button, Ptag, Tag } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">213123</Htag>
            <Button appearance="ghost" className="asdasd" arrow="right">132123</Button>
            <Ptag>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis praesentium nam hic nesciunt incidunt repellat mollitia modi, atque repellendus a, quas labore natus porro suscipit quam corrupti vel cumque.</Ptag>
            <Tag size="m">Taggggg</Tag>
            <Tag size="s">Taggggg</Tag>
            <Tag size="s" color="green">Taggggg</Tag>
            <Tag size="s" color="ghost">Taggggg</Tag>
            <Tag size="s" color="red">Taggggg</Tag>
        </>
    );
}
