# DO-Product-Card

Este es un paquete de pruebas de despligeue en NPM

### Curso de Fernando Herrera

## Ejemplo

```
import {
ProductCard,
ProductTitle,
ProductButtons,
ProductButtonsLite,
} from 'lpb-fh-product-card'
```


```
<ProductCard 
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {
    ({count, isMaxCountReached, reset, increaseBy, }) => (
      <>
        <ProductImage />
        <ProductTitle />
        {/* <ProductButtons className="custom-buttons"/> */}
        <ProductButtonsLite 
          counter={count} 
          isMaxCountReached={isMaxCountReached} 
          increaseBy={() => increaseBy(+2)}
          decreaseBy={() => increaseBy(-2)}
          reset={reset}
        />

      </>
    )
  }
</ProductCard>
```