export const TextToHtml = (TextData)=>{
    let splitedText = TextData.split("@")
    let TextForm = ""
    splitedText.forEach(element=>{
        if (element.includes("<link>")){
            let link = String(element.split("<link>").splice(1,1))
            TextForm += `<a style="color:blue" href=${link.split("--")[1]} >${link.split("--")[2]}</a> `
        }
        else if (element.includes("<img>")) {
            TextForm += ` <div class="w-full flex items-center justify-center my-3"><img class="rounded-md max-w-[650px] w-full" src=${element.split("<img>").splice(1,1)} alt="Image" ></div> `
            // TextForm += `<img ${element.split("<img>")}`
        }
        else if (element.includes("<b>")){
            TextForm += `${element}</b> `
        }
        else{
            TextForm += `${element.replaceAll("\n", "<br>")} `
        }
    })
    return(TextForm)
}

