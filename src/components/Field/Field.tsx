import { FieldProps } from "../../utils/types/FieldProps";

export default function Field({type, id, label, holder}: FieldProps) {
  
  const activeLabel = (e: React.FormEvent) => {
    const target = e.currentTarget.localName === 'input' ? e.currentTarget as HTMLInputElement : '';

    if(target) {
      target as HTMLInputElement;
      const parent = target.parentElement;
      const label = parent!.children[0];

      if(target.value !== '') {
        label.classList.add('active');
      }
      else if(target.value === '') {
        label.classList.remove('active');
      }
    }
  }

  return (
    <div>
        {label && (<label  htmlFor={id}>{label}</label>)}
        {
            type === "area"
            ? (<textarea name={id} id={id} placeholder={holder ? holder : ""}></textarea>)
            : (<input type={type} name={id} id={id} placeholder={holder ? holder : ""} onInput={(e) => activeLabel(e)}/>)
        }
      
    </div>
  )
}
