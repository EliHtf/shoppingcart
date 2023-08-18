const shorten= (title) =>{
    const splitedTitle = title.split(" ");
    const shortenTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return shortenTitle;
}

const isInCart = (state, id) =>{
    const resualt = !!(state.selectedItems.find(item => item.id === id))
    return resualt;
}

const quantityCount = (state, id)=>{
    const index= state.selectedItems.findIndex(item => item.id === id)
    if(index === -1){
        return false
    }else{
        return state.selectedItems[index].quantity;
    }
}
export {shorten, isInCart, quantityCount}; 