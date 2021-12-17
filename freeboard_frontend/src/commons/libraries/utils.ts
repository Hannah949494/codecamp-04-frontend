
export function getDate(ResetDate){

    const date =  new Date(ResetDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${year}-${month}-${day}` // 2021-11-10

}

