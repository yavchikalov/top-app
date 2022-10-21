import { ISectionComponentProps } from "./SectionComponent.props";
import styles from "./SectionComponent.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const SectionComponent = ({ sections }: ISectionComponentProps) => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            {sections.map((section) => (
                <Link
                    key={section._id.secondCategory}
                    href={`${router.asPath}/${section.pages[0].alias}`}
                >
                    <a className={styles.section}>{section._id.secondCategory}</a>
                </Link>
            ))}
        </div>
    );
};