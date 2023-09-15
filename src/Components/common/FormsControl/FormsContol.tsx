import styles from './FormsControl.module.css'
import React from "react";

export const Input: React.FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>
            <input {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}