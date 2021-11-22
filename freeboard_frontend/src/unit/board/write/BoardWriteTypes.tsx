import { ChangeEvent } from "react"

export interface CheckTypeProps {
    isEdit : boolean
    data? : any
}

export interface IVariables {
    writer? : String,
    title? : String,
    contents? : String
}

export interface WriteContainer {
    putWriterdata :(event: ChangeEvent<HTMLInputElement>) => void
    putPassworddata : (event: ChangeEvent<HTMLInputElement>) => void
    putTitledata : (event: ChangeEvent<HTMLInputElement>) => void
    putWContentsdata : (event: ChangeEvent<HTMLTextAreaElement>) => void
    checkNullinput : () => void
    checknullwriter : () => void
    checknulltitle : () => void
    checknullpassword : () => void
    checknullcontents : () => void
    updateBoardContent : () => void
    isEdit : boolean
    data : any
}