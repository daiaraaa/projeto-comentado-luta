class Log {
    list = []
    constructor(listElement) {
        this.listElement = listElement
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()l
    }

    render() {
        this.listElement.innerHTML = ''
        for (let i in this.list) {
            this.listElement.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
