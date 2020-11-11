export const getPoetry = async () => {
    // promise fetch
    // return fetch("https://v1.jinrishici.com/all.json", {
    //     method: "GET",
    // }).then(response => {
    //     return response.json();
    // }).then(result => {
    //     return [result.origin, result.author, result.content];
    // }).catch(() => {
    //     return "Response info is not exist";
    // })

    // async await 方法
    try {
        const response = await fetch("https://v1.jinrishici.com/all.json", {
            method: "GET",
        });
        const result = await response.json();
        return [result.origin, result.author, result.content];
    } catch (e) {
        return "Response info is not exist";
    }
}