// font-size: px to rem Auto Calc
export const fz = (px) => {
    /* if html element has font-size get root fontSize
     *     => const fontSize = getComputedStyle( document.documentElement).fontSize
     */
    const fontSize = getComputedStyle(
        document.querySelector('body')
    ).fontSize
    console.log(fontSize)
    // calc for px to rem
    const fzCalc = px / parseFloat(fontSize)
    // 小数点の表示桁数
    const fzNum = parseFloat(fzCalc.toFixed(3))
    return `font-size:` + fzNum + 'rem;'
}

// Mixin
export const fx_center = () => {
    return `
    display: flex;
    align-items: center;
    justify-content: center;
`
}

// bg-color
export const bgc = (bgColor) => {
    return `
    background-color: ${bgColor};
`
}

// color
export const color = (c) => {
    return `
    color: ${c};
`
}

// ui function
export const grid = (
    col_start,
    col_end,
    row_start,
    row_end
) => {
    return `
        // TODO: for IE AutoPrefix
        grid-column: ${col_start} / ${col_end}; // Horizontal ↑↓
        grid-row: ${row_start} / ${row_end}; // Vertical ←→
    `
}

// UI Component
export const block = {
    db: `display: block;`,
    df: `display: flex;`,
    dg: `display: grid;`,
}

// UI Component
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