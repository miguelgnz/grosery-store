import { ProductType } from "@/utils/types";

export default function Product(props: ProductType) {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid',
        borderRadius: '12px',
        padding: '12px',
        width: '144px',
        gap: '6px'
    }}>
      <h3>{props.name}</h3>
      <p>{props.category}</p>
      <p>$ {props.price}</p>
      <p>{props.stock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
