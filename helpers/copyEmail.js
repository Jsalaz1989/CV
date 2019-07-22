export function copyEmail() {
    const email = 'jsalaz1989@gmail.com'     // could also be something like email = ev.currentTarget.children[0].innerHTML

    let dummy = document.createElement('input')
    document.body.appendChild(dummy)
    dummy.setAttribute('value', email)
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
}