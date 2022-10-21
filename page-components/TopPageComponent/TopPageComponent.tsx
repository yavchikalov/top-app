import styles from './TopPageComponent.module.css';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, HhData, Advantages, Sort, Product } from '../../components';
import { ITopLevelCategory } from '../../interfaces/page.interface';
import { sortReducer } from "./sort.reducer";
import { useReducer, useEffect } from 'react';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({ firstCategory, products, page }: ITopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
    const shouldReduceMotion = useReducedMotion();

    const setSort = (sort: SortEnum): void => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products });
    }, [products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product layout={shouldReduceMotion ? false : true} key={p._id} product={p} />))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {firstCategory === ITopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {(page?.advantages?.length && <>
                <Htag tag='h2'>Преимущства</Htag>
                <Advantages advantages={page.advantages} />
            </>) || ''}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.length && page.tags.map((tag) => <Tag key={tag} color='primary'>{tag}</Tag>)}
        </div>
    );
};