import { ChangeEvent } from "react"

export interface IProps {
    isEdit : boolean
    data? : any

}
export interface IVariables {
    number : Number,
    writer? : String,
    title? : String,
    contents? : String
}


export interface IPropsContainer{
    zzz: () => void
    xxx: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
}