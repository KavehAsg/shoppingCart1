export const isInCart = (state , id) => {
    return !!state.selectedItems.find(item => item.id === id);
}

export const quantityCounter = (state , id) => {
    const index = state.findIndex(item => item.id === id);
    if (index === -1){
        return false;
    } else {
        console.log(`count ${state[index].quantity}`)
        return state[index].quantity;
    }
}