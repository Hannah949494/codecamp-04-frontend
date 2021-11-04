import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'

const CREATE_PRODUCT = gql`

mutation createProduct($seller : String, $createProductInput : CreateProductInput!){
    
    createProduct( seller : $seller, createProductInput : $createProductInput ){
      _id
      number
      message

    }
  }

`

export default function GraphqlMutationProductPage(){
    
    const [seller,Setseller] = useState("")
    const [product_name, Setproduct_name] = useState("")
    const [product_detail, Setproduct_detail] = useState("")
    const [product_price, Setproduct_price] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

    function onChangeSeller(e){
        Setseller(e.target.value)
    }

    function onChangeProductName(e){
        Setproduct_name(e.target.value)
    }

    function onChangeProductDetail(e){
        Setproduct_detail(e.target.value)
    }

    function onChangeProductPrice(e){
        Setproduct_price(e.target.value)
    }
    
    
    async function PostProduct(){
        const result = await createProduct({
            variables: { 
            seller  : seller, 
            createProductInput : {
                name : product_name,
                detail : product_detail,
                price : Number(product_price)
            }
        }

        })
        console.log(result)
    }


    return(
            <>
            <label>판매자</label>
            <input type="text" placeholder = "판매자명을 입력하세요" name="writer" onChange ={onChangeSeller} />
            <label>상품명</label>
            <input type="text" placeholder = "상품명을 입력하세요" name="title" onChange = {onChangeProductName} />
            <label>상세설명</label>
            <textarea placeholder = "내용을 입력하세요" name="contents" onChange = {onChangeProductDetail}/>
            <label>가격</label>
            <input type="text" name="contents" onChange = {onChangeProductPrice}/>
            <button onClick={PostProduct}>상품 등록하기</button>
            </>

    )
}