import { FieldProps } from "../../utils/types/FieldProps";

export default function Field({type, id, label, holder}: FieldProps) {
  return (
    <div>
        {label && (<label htmlFor={id}>{label}</label>)}
        {
            type === "area"
            ? (<textarea name={id} id={id} placeholder={holder ? holder : ""}></textarea>)
            : (<input type={type} name={id} id={id} placeholder={holder ? holder : ""} />)
        }
      
    </div>
  )
}
