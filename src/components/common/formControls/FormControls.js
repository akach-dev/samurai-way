import styles from './FormControls.module.css'

export const FormControls = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error
  return <div className={styles.formControl + " " + (hasError && styles.error)}>
    <div>
      <textarea  {...input} {...props} />
    </div>
    {hasError && <span>{meta.error}</span>}
  </div>
};


// export const FormControl = ({input, meta, tagName, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   const Tag = tagName;
//
//   return (
//     <>
//       <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//         <div>
//           <Tag {...input} {...props} />
//         </div>
//         {hasError && <span>{meta.error}</span>}
//       </div>
//     </>
//   );
// };


