


const SetTheme = (currentTheme) => {
    // console.log(currentTheme);
    console.log(document.styleSheets)
    // console.log("Array.from(document.styleSheets)",Array.from(document.styleSheets).reduce((prev,curr)=>(
    //     console.log(prev,curr)
    // )))
    const cssProps = Array.from(document.styleSheets).reduce((prev, curr) => (
        prev = [
            ...prev,
            ...Array.from(curr.cssRules).reduce((prevCssRules, currCssRules) => {
                // console.log(prevCssRules,currCssRules)
                prevCssRules = currCssRules.selectorText === ":root" ? [
                    ...prevCssRules,
                    ...Array.from(currCssRules.style).filter((item) => item.startsWith("--selected")),
                ] : prevCssRules
                return prevCssRules;
            }, [])
        ]
    ), [])
    cssProps.forEach(value=>{
    
        document.documentElement.style.setProperty(value, `var(${currentTheme}${value.substring(10)}) ` );
    })
    console.log("cssProps", cssProps)

}
export default SetTheme;
