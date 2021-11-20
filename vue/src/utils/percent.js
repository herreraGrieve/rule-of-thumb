const defaultOptions = {
    decimals: 1,
}
export default (total, value, options = defaultOptions) => {
    const percent = ((100 * value) / total).toFixed(options.decimals)
    return parseFloat(percent)
}