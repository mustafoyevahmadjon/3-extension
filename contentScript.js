// const hrefTags = document.getElementsByTagName("a")
// for(const tag of hrefTags) {
//     tag.textContent = "Ahmadjon"
// }
const hrefTags = document.getElementsByTagName("a")
for(const tag of hrefTags) {
    if(tag.textContent.includes("a")) {
        tag.style = "background-color: yellow"
        // tag.textContent = "Ahmadjon"
    }
}