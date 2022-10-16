import { ISidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import { Menu } from "../Menu/Menu";
import LogoIcon from '../../icons/logo.svg';
import cn from 'classnames';
import { Search } from "../../components";

export const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
    return (
        <div
            className={cn(className, styles.sidebar)}
            {...props}
        >
            <LogoIcon className={styles.logo} />
            <Search />
            <Menu />
        </div>
    );
};