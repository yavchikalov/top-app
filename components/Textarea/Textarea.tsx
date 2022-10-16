import { ITextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';

export const Textarea = ({ className, ...props }: ITextareaProps): JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea
                className={cn(styles.textarea)}
                {...props}
            />
        </div>
    );
};