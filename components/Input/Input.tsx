import { IInputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ className, ...props }: IInputProps): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input
                className={cn(styles.input)}
                {...props}
            />
        </div>
    );
};