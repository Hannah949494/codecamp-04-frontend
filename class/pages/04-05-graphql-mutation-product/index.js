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
    
    const [createProduct] = useMutation(CREATE_PRODUCT)

    
    
    async function zzz(){
        const result = await createProduct({
            variables: { 
            seller  : "철수", 
            createProductInput : {
                name : "맥북프로",
                detail : "생활기스 밖에 없습니다.",
                price : 1000000
            }
        }

        })
        console.log(result)
    }


    return(
            <>
            <label>판매자</label>
            <input type="text" placeholder = "판매자명을 입력하세요" name="writer" />
            <label>상품명</label>
            <input type="text" placeholder = "상품명을 입력하세요" name="title" />
            <label>상세설명</label>
            <textarea placeholder = "내용을 입력하세요" name="contents" />
            <label>가격</label>
            <input type="text" placeholder = "내용을 입력하세요" name="contents" />
            <button onClick={zzz}>상품 등록하기</button>
            </>

    )
}