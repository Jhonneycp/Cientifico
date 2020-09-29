var counter = 1

const geMore = () => {
    return counter += 1
}

const getMore = () => {
    return geMore()
}
