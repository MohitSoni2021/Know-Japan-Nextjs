const fs = require('fs')



export const getLastId = ()=>{
    const data = fs.readFileSync('dataFolder/blogData.txt', 'utf-8')
    if (data.trim()==""){
        let id=1
        return id
    }else{
        const id = data.split("\n").length
        return id+1
    }
}

export const AddToFile = (dataObj)=>{
    fs.appendFileSync("dataFolder/blogData.txt", "\n" +JSON.stringify(dataObj))
    return dataObj
}


export const ReadBlogDataFile = ()=>{
    const data = fs.readFileSync('dataFolder/blogData.txt', 'utf-8')
    let JsonData = []
    data.split("\n").forEach(element => {
        JsonData.push(JSON.parse(element))
    })
    return JsonData
}

export const GetSingleBlog = (id)=>{
    const blogList = ReadBlogDataFile()
    return (blogList.filter((element)=>{
        if (element.id == id){
            return(element)
        }
    })[0])
}

