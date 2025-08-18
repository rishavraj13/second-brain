export const Random = (len:number) => {
    let options = "kjsdnvjndsn3q04urjwef"
    let length = options.length;

    let ans = "";

    for(let i=0;i<len ; i++){
        ans += options[Math.floor(Math.random() * length)] 
    }
}