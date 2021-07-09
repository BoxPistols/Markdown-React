// font-size: px to rem Auto Calc
export const fz = (px) => {
    /* if html element has font-size get root fontSize
     *     => const fontSize = getComputedStyle( document.documentElement).fontSize
     */
    const fontSize = getComputedStyle(document.querySelector('body')).fontSize
    console.log(fontSize)
    // calc for px to rem
    const fzCalc = px / parseFloat(fontSize)
    // 小数点の表示桁数
    const fzNum = parseFloat(fzCalc.toFixed(3))
    return `font-size:` + fzNum + 'rem;'
}

// UI Component
export const block = {
    block: `display: block;`,
    flex: `display: flex;`,
    grid: `display: grid;`,
}

// Mixin
export const fx_center = () => {
    return `
    display: flex;
    align-items: center;
    justify-content: center;
`
}

export const fx_jc_center = () => {
    return `
    display: flex;
    justify-content: center;
`
}

export const fx_ai_center = () => {
    return `
    display: flex;
    align-items: center;
    `
}

// grid  function
export const grid = (col_start, col_end, row_start, row_end) => {
    return `
        // TODO: for IE AutoPrefix or Don't target IE
        grid-column: ${col_start} / ${col_end}; // Horizontal ↑↓
        grid-row: ${row_start} / ${row_end}; // Vertical ←→
    `
}

// color
export const color = (c) => {
    return `
    color: ${c};
    `
}

// bg-color
export const bgc = (bgColor) => {
    return `
    background-color: ${bgColor};
`
}

// colors
export const c = {
    main: 'tomato',
    accent: '#1EC18D',
    dark: '#234',

    gray: {
        g50: `#fafafa`,
        g100: `#f5f5f5`,
        g200: `#eeeeee`,
        g300: `#e0e0e0`,
        g400: `#bdbdbd`,
        g500: `#9e9e9e`,
        g600: `#757575`,
        g700: `#616161`,
        g800: `#424242`,
        g900: `#212121`,
    },
}
