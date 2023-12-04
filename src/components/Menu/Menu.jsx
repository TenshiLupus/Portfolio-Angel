import "./Menu.css"
import React, { useEffect } from "react"

const Menu = () => {

    useEffect(() => {

        const menuButtonsSVG = document.querySelector(".menu")
        const menuButtons = document.querySelectorAll(".menu-button-container")

        menuButtons.forEach(button => {
            button.addEventListener("mouseenter", e => {
                menuButtonsSVG.appendChild(e.target)
            })
        })
        console.log(menuButtons)

    }, [])

    return (
        <section id="slide-page" className="arrow">


            <svg className="menu" viewBox="0 0 758 758" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M757 379C757 430.218 746.814 479.056 728.356 523.6M757 379C757 327.894 746.674 278.972 728.105 234.319M757 379L379 1M757 379H523.684M379 757C327.747 757 278.877 746.8 234.308 728.318M379 757C430.217 757 479.056 746.814 523.599 728.356M379 757L1 379M379 757L379 379M1 379C1 327.712 11.2146 278.809 29.7205 234.216M1 379C1 430.228 11.1906 479.076 29.6551 523.627M1 379H379M379 1C430.424 1 479.267 11.0854 523.769 29.4975M379 1C327.711 1 278.809 11.2147 234.215 29.7207M379 1V379M234.308 728.318C188.108 709.16 146.531 681.103 111.714 646.286C76.8803 611.453 48.8138 569.853 29.6551 523.627M234.308 728.318L29.6551 523.627M234.308 728.318L379 379M234.308 728.318L234.242 234.246M523.769 29.4975C569.933 48.5973 611.426 76.6574 646.285 111.715C680.846 146.472 708.889 188.11 728.105 234.319M523.769 29.4975L728.105 234.319M523.769 29.4975L379 379M523.769 29.4975L523.684 379M728.356 523.6C709.197 569.837 681.127 611.446 646.286 646.286C611.446 681.127 569.836 709.197 523.599 728.356M728.356 523.6L379 379M728.356 523.6L523.649 523.608M728.356 523.6L523.684 379M29.7205 234.216C48.8774 188.053 76.9193 146.508 111.713 111.715C146.506 76.9206 188.052 48.878 234.215 29.7207M29.7205 234.216L276.66 481.286L523.599 728.356M29.7205 234.216L234.242 234.246M728.105 234.319L379 379M728.105 234.319L234.242 234.246M29.6551 523.627L379 379M29.6551 523.627L523.649 523.608M234.215 29.7207L234.242 234.246M523.599 728.356L379 379M523.599 728.356L523.649 523.608M379 379L523.649 523.608M379 379L234.242 234.246M379 379L523.684 379M523.649 523.608L523.684 379" stroke="#E9DCDE" stroke-width="0.5" />

                <g className="menu-button-container">
                    <path className="menu-button" d="M530.172 530.877L379.002 682.043L227.836 530.877L379 379.709L530.172 530.877Z" fill="#E9DCDE" stroke="#787276" />
                    <path id="menu-bot-text" d="M303 530.937H378.937H454.875" />

                    <text fill="#1F1412" fontSize="24px">
                        <textPath href="#menu-bot-text" startOffset="50%" text-anchor="middle" dominantBaseline="middle" alignmentBaseline="middle">WORK</textPath>
                    </text>
                </g>

                <g className="menu-button-container">

                    <path className="menu-button" d="M682.047 379L530.877 530.166L379.711 379L530.875 227.832L682.047 379Z" fill="#E9DCDE" stroke="#787276" />
                    <path id="menu-right-text" d="M451 378.937H526.938H602.875" />

                    <text fill="#1F1412" fontSize="24px">
                        <textPath href="#menu-right-text" startOffset="50%" text-anchor="middle" dominantBaseline="middle" alignmentBaseline="middle">WORK</textPath>
                    </text>
                </g>

                <g className="menu-button-container">

                    <path className="menu-button" d="M378.297 379L227.127 530.166L75.9613 379L227.125 227.832L378.297 379Z" fill="#E9DCDE" stroke="#787276" />
                    <path id="menu-left-text" d="M151 378.937H226.937H302.875" />

                    <text fill="#1F1412" fontSize="24px">
                        <textPath href="#menu-left-text" startOffset="50%" text-anchor="middle" dominantBaseline="middle" alignmentBaseline="middle">WORK</textPath>
                    </text>
                </g>

                <g className="menu-button-container">

                    <path z="2" id="menu-top" className="menu-button" d="M530.172 227.129L379.002 378.295L227.836 227.129L379 75.9611L530.172 227.129Z" fill="#E9DCDE" stroke="#787276" />
                    <path id="menu-top-text" d="M303 226.938H378.937H454.875" />

                    <text fill="#1F1412" fontSize="24px">
                        <textPath href="#menu-top-text" startOffset="50%" text-anchor="middle" dominantBaseline="middle" alignmentBaseline="middle">WORK</textPath>
                    </text>
                </g>

            </svg>




            <svg className="logo" viewBox="0 0 595 756" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M427 541H379V757H427V541Z" fill="#E9DCDE" />
                <path d="M511 541H463V649H511V541Z" fill="#E9DCDE" />
                <path d="M595 541H547V757H595V541Z" fill="#E9DCDE" />
                <path d="M427 319V439H595V487H379V271H595V319H427Z" fill="#E9DCDE" />
                <path d="M595 1V217H547V49H427V217H379V1H595Z" fill="#E9DCDE" />
                <path d="M511 109H463V157H511V109Z" fill="#E9DCDE" />
                <path d="M218 379C218 357.019 222.351 336.061 230.233 316.95C230.776 315.633 231.336 314.324 231.912 313.025M218 379C218 400.955 222.34 421.89 230.205 440.983C230.757 442.323 231.326 443.654 231.912 444.975M218 379H1M1 379L379 1V109M1 379L379 757V649M1 379L262.911 266.752M1 379L231.912 444.975M1 379L262.911 491.248M1 379L231.912 313.025M1 379L127.632 288.549M1 379L127.89 469.636M262.911 266.752C263.652 265.977 264.4 265.209 265.155 264.449C279.975 249.537 297.67 237.519 317.332 229.309C336.326 221.378 357.155 217 379 217V109M262.911 266.752C250.095 280.169 239.554 295.803 231.912 313.025M321.892 287.316L379 271M321.892 287.316C291.333 306.392 271 340.321 271 379M321.892 287.316C338.459 276.975 358.032 271 379 271M379 271V379M271 379C271 417.679 291.333 451.608 321.892 470.684M271 379H379M321.892 470.684L379 487M321.892 470.684C338.459 481.025 358.032 487 379 487M379 487V379M231.912 444.975C239.554 462.197 250.095 477.831 262.911 491.248M262.911 491.248C263.652 492.023 264.4 492.791 265.156 493.551C279.985 508.473 297.694 520.497 317.372 528.708C336.355 536.628 357.17 541 379 541V649M378.734 645.468C342.567 645.468 308.082 638.27 276.633 625.228C244.032 611.71 214.693 591.912 190.125 567.343C165.545 542.763 145.74 513.408 132.22 480.789C130.696 477.112 129.252 473.394 127.89 469.636M378.734 112C342.542 112 308.034 119.208 276.567 132.267C243.992 145.785 214.676 165.573 190.124 190.125C165.572 214.677 145.784 243.993 132.266 276.567C130.629 280.514 129.083 284.509 127.632 288.549M379 649L127.89 469.636M379 109L127.632 288.549M127.632 288.549C117.513 316.718 112 347.082 112 378.734C112 410.655 117.607 441.266 127.89 469.636" stroke="#787276" strokeWidth="0.5" />
            </svg>

            <svg id="top-left" width="241" height="136" viewBox="0 0 241 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 136V1H241" stroke="#787276" stroke-width="0.5" stroke-miterlimit="10" />
            </svg>

            <svg id="top-right" width="241" height="136" viewBox="0 0 241 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M240 136V1H0" stroke="#787276" stroke-width="0.5" stroke-miterlimit="10" />
            </svg>

            <svg id="bottom-left" width="241" height="136" viewBox="0 0 241 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V135H241" stroke="#787276" stroke-width="0.5" stroke-miterlimit="10" />
            </svg>

            <svg id="bottom-right" width="241" height="136" viewBox="0 0 241 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M240 0V135H0" stroke="#787276" stroke-width="0.5" stroke-miterlimit="10" />
            </svg>

        </section>
    )
}




export default Menu