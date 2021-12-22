export async function main(request:any) {
    
    let temp = Deno.readTextFileSync("./web-page/accueil.html").replace(/<%=title%>/g, "Accueil");

    return temp;

}
