export const debounce = (fn, options={}) =>{
    const defaultOptions = {
        delay: 300
    }
    const {delay} = {...defaultOptions, ...options}
    let timer = null
    return (...args)=>{
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(null,...args)
            timer = null
        },delay)
    }
}