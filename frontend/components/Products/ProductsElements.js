import styled from 'styled-components'

export const ProductsHeader = styled.h1`
    font-size: 2rem;
    text-align: center;
    
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 1rem 1rem;
    width: 300px;
    background-color: #eee;
    box-shadow: 0 0px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.3s;
    
    :hover{
        box-shadow: 0 0px 16px 0 rgba(0,0,0,0.5);
    }
`
export const ProductInfo = styled.div`
    margin: 0rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

export const ProductImg = styled.img`
    display: block;
    margin: auto;
    margin-top: 1rem;
    height: 200px;
    min-width: 200px;
    max-width: 100%;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`
