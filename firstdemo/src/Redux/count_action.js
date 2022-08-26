export let  addAction = num => ({
    type: "add",
    num
});

export let delAction = num => ({
    type: "del",
    num
});

export let addAsyncAction = (num, time) => {
    return (dispatch) => {
        setTimeout(
            () => {
                dispatch(addAction(num))
            }, time)
    }
}