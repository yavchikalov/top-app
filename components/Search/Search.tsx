import { ISearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './icons/glass.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    return (
        <form
            className={cn(className, styles.search)}
            {...props}
            role="search"
            onSubmit={goToSearch}
        >
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                appearance="primary"
                type="submit"
                className={styles.button}
                aria-label="Искать по сайту"
            >
                <GlassIcon />
            </Button>
        </form>
    );
};