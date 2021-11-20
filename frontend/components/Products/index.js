import { 
    ProductsHeader,
    ProductWrapper, 
    ProductCard,
    ProductInfo, 
    ProductTitle, 
    ProductImg, 
    ProductDesc, 
    ProductPrice 
} from './ProductsElements'

const Products = ({ header, data }) => {
    return (
        <>
            <ProductsHeader>{header}</ProductsHeader>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img}></ProductImg>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>

        </>
    )
}

export default Products
