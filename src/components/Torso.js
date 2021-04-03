import { useState } from 'react'
import style from './Torso.module.css'

const Torso = ({ updateField, selection }) => {
    const start = selection || 'Click the area of the abdomen that is symptomatic';
    const [hoverItem, setHoverItem] = useState(start);

    const clicked = (name, value) => {
        updateField(name, value)
    }
    return (
        <div className={style.torsoContainer}>
            <svg
                className={style.theTorso}
                viewBox="0 0 1706.6667 1365.3333"
                height="100%"
                width="30%"
                id="svg2">
                <defs
                    id="defs6"><clipPath
                        id="clipPath18"
                        clipPathUnits="userSpaceOnUse"><path
                            id="path16"
                            d="M 0,1024 H 1280 V 0 H 0 Z" /></clipPath><clipPath
                                id="clipPath30"
                                clipPathUnits="userSpaceOnUse"><path
                            id="path28"
                            d="m 636.48,36.176 h 16 v 31.001 h -16 z" /></clipPath><mask
                                id="mask36"
                                height="1"
                                width="1"
                                y="0"
                                x="0"
                                maskUnits="userSpaceOnUse"><image
                            id="image38"
                            preserveAspectRatio="none"
                            height="1"
                            width="1" /></mask><mask
                                id="mask46"
                                height="1"
                                width="1"
                                y="0"
                                x="0"
                                maskUnits="userSpaceOnUse"><image
                            id="image48"
                            preserveAspectRatio="none"
                            height="1"
                            width="1" /></mask><clipPath
                                id="clipPath58"
                                clipPathUnits="userSpaceOnUse"><path
                            id="path56"
                            d="M 0,1024 H 1280 V 0 H 0 Z" /></clipPath><clipPath
                                id="clipPath70"
                                clipPathUnits="userSpaceOnUse"><path
                            id="path68"
                            d="m 770.194,654.389 h 6.425 v -6.425 h -6.425 z" /></clipPath><mask
                                id="mask92"
                                height="1"
                                width="1"
                                y="0"
                                x="0"
                                maskUnits="userSpaceOnUse"><image
                            id="image94"
                            preserveAspectRatio="none"
                            height="1"
                            width="1" /></mask><clipPath
                                id="clipPath104"
                                clipPathUnits="userSpaceOnUse"><path
                            id="path102"
                            d="M 0,1024 H 1280 V 0 H 0 Z" /></clipPath></defs><g
                                transform="matrix(1.3333333,0,0,-1.3333333,0,1365.3333)"
                                id="g10"><g
                                    id="g12"><g
                                        clipPath="url(#clipPath18)"
                                        id="g14"><g
                                            transform="translate(327.5,616.4805)"
                                            id="g20"><path
                                    id="path22"
                                    style={{
                                        fill: 'none', stroke: '#69b8ae', strokeWidth: 8, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 16.706,62.966 33.411,91.237 0,0 3.855,5.14 2.57,17.991 0,0 -8.995,95.092 60.396,138.783 0,0 14.136,2.571 26.986,8.996 0,0 66.822,37.265 104.088,50.116 0,0 19.276,14.135 25.701,25.701 0,0 1.285,20.56 0,34.696" /></g></g></g><g
                                        id="g24"><g
                                            clipPath="url(#clipPath30)"
                                            id="g26"><g
                                                id="g32"><g
                                                    transform="matrix(16,0,0,31,636.47992,36.176552)"
                                                    id="g34"><image
                                        id="image40"
                                        mask="url(#mask36)"
                                        transform="matrix(1,0,0,-1,0,1)"
                                        preserveAspectRatio="none"
                                        height="1"
                                        width="1" /></g></g></g></g><g
                                            id="g42"><g
                                                transform="matrix(73,0,0,20,604.1571,61.214874)"
                                                id="g44"><image
                                id="image50"
                                mask="url(#mask46)"
                                transform="matrix(1,0,0,-1,0,1)"
                                preserveAspectRatio="none"
                                height="1"
                                width="1" /></g></g><g
                                    id="g52"><g
                                        clipPath="url(#clipPath58)"
                                        id="g54"><g
                                            transform="translate(876.21,556.0835)"
                                            id="g60"><path
                                    id="path62"
                                    style={{
                                        fill: 'none', stroke: '#69b8ae', strokeWidth: 8, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 -25.701,26.986 -47.547,71.962 0,0 2.57,-41.121 -19.275,-96.378 0,0 -5.14,-7.709 -5.14,-52.686 v -64.252 l 1.284,-53.971 c 0,0 0,-14.135 3.856,-23.131 3.855,-8.995 33.411,-104.087 30.841,-163.199 0,0 5.14,-50.116 14.135,-116.938" /></g><g
                                        id="g64"><g
                                    id="g66" /><g
                                        id="g78"><g
                                            style={{ opacity: '0.27999902' }}
                                            id="g76"
                                            clipPath="url(#clipPath70)"><g
                                                id="g74"
                                                transform="translate(776.6191,651.1763)"><path
                                                id="path72"
                                                style={{
                                                    fill: '#e3bc8d', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none'
                                                }}
                                                d="m 0,0 c 0,-1.774 -1.438,-3.213 -3.212,-3.213 -1.774,0 -3.213,1.439 -3.213,3.213 0,1.774 1.439,3.212 3.213,3.212 C -1.438,3.212 0,1.774 0,0" /></g></g></g></g><g
                                                    transform="translate(417.4521,556.0835)"
                                                    id="g80"><path
                                    id="path82"
                                    style={{
                                        fill: 'none', stroke: '#69b8ae', strokeWidth: 8, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 25.701,26.986 47.546,71.962 0,0 -2.569,-41.121 19.276,-96.378 0,0 5.14,-7.709 5.14,-52.686 v -64.252 l -1.285,-53.971 c 0,0 0,-14.135 -3.855,-23.131 -3.855,-8.995 -33.411,-104.087 -30.841,-163.199 0,0 -5.14,-50.116 -14.135,-116.938" /></g><g
                                        transform="translate(964.1631,616.4805)"
                                        id="g84"><path
                                    id="path86"
                                    style={{
                                        fill: 'none', stroke: '#69b8ae', strokeWidth: 8, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 -16.705,62.966 -33.411,91.237 0,0 -3.855,5.14 -2.57,17.991 0,0 8.996,95.092 -60.397,138.783 0,0 -14.135,2.571 -26.985,8.996 0,0 -66.823,37.265 -104.088,50.116 0,0 -19.276,14.135 -25.7,25.701 0,0 -1.286,20.56 0,34.696" /></g></g></g><g
                                        id="g88"><g
                                            transform="matrix(23,0,0,23,637.09998,346.89999)"
                                            id="g90"><image
                                id="image96"
                                mask="url(#mask92)"
                                transform="matrix(1,0,0,-1,0,1)"
                                preserveAspectRatio="none"
                                height="1"
                                width="1" /></g></g><g
                                    id="g98"><g
                                        clipPath="url(#clipPath104)"
                                        id="g100"><g
                                            transform="translate(647.248,504)"
                                            id="g106"><path
                                    id="path108"
                                    className={style.Quadrant}
                                    onMouseOver={() => setHoverItem('Right Upper Quadrant')}
                                    onMouseLeave={() => setHoverItem(start)}
                                    onClick={() => clicked('area_of_pain', 'Right Upper Quadrant')}
                                    style={{
                                        strokeWidth: 2,
                                        strokeLinecap: 'butt',
                                        strokeLinejoin: 'miter',
                                        strokeMiterlimit: 10,
                                        strokeDasharray: 'none',
                                        strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 -73.496,-78.053 -155.248,-71.526 l -1,-73.474 h 113 c 0,0 3,42 43.248,42 z" /></g><g
                                        transform="translate(649,504)"
                                        id="g110"><path
                                    id="path112"
                                    className={style.Quadrant}
                                    onMouseOver={() => setHoverItem('Left Upper Quadrant')}
                                    onMouseLeave={() => setHoverItem(start)}
                                    onClick={() => clicked('area_of_pain', 'Left Upper Quadrant')}
                                    style={{
                                        strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="M 0,0 C 0,0 73.495,-78.053 155.248,-71.526 L 155,-145 40,-146 c 0,0 1,37 -40,43 z" /></g><g
                                        transform="translate(649,211)"
                                        id="g114"><path
                                    id="path116"
                                    className={style.Quadrant}
                                    onMouseOver={() => setHoverItem('Right Lower Quadrant')}
                                    onMouseLeave={() => setHoverItem(start)}
                                    onClick={() => clicked('area_of_pain', 'Right Lower Quadrant')}
                                    style={{
                                        strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 -125,13.474 -177,74 l 18,72 h 113 c 0,0 1,-40 46,-42 z" /></g><g
                                        transform="translate(649,211)"
                                        id="g118"><path
                                    id="path120"
                                    className={style.Quadrant}
                                    onMouseOver={() => setHoverItem('Left Lower Quadrant')}
                                    onMouseLeave={() => setHoverItem(start)}
                                    onClick={() => clicked('area_of_pain', 'Left Lower Quadrant')}
                                    style={{
                                        strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="m 0,0 c 0,0 122,12.474 174,73 l -19,73 -115,1 c 0,0 4,-36 -40,-43 z" /></g><g
                                        transform="translate(649,490)"
                                        id="g122"><path
                                    id="path124"
                                    style={{
                                        fill: 'none', stroke: '#143c46', strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="M 0,0 V -262" /></g><g
                                        transform="translate(518,359)"
                                        id="g126"><path
                                    id="path128"
                                    style={{
                                        fill: 'none', stroke: '#143c46', strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="M 0,0 H 262" /></g><g
                                        transform="translate(689,358.5)"
                                        id="g130"><path
                                    id="path132"
                                    style={{
                                        fill: 'none', stroke: '#143c46', strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="M 0,0 C 0,-23.472 -19.028,-42.5 -42.5,-42.5 -65.972,-42.5 -85,-23.472 -85,0 -85,23.472 -65.972,42.5 -42.5,42.5 -19.028,42.5 0,23.472 0,0 Z" /></g><g
                                        transform="translate(689,358.5)"
                                        id="g130"><path
                                    id="path133"
                                    className={style.Umbilical}
                                    onMouseOver={() => setHoverItem('Umbilical')}
                                    onMouseLeave={() => setHoverItem(start)}
                                    onClick={() => clicked('area_of_pain', 'Umbilical')}
                                    style={{
                                        strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                    }}
                                    d="M 0,0 C 0,-23.472 -19.028,-42.5 -42.5,-42.5 -65.972,-42.5 -85,-23.472 -85,0 -85,23.472 -65.972,42.5 -42.5,42.5 -19.028,42.5 0,23.472 0,0 Z" /></g>
                                    <g
                                        transform="translate(468.6509,284)"
                                        id="g134"><path
                                        id="path136"
                                        className={style.Quadrant}
                                        onMouseOver={() => setHoverItem('Pelvis')}
                                        onMouseLeave={() => setHoverItem(start)}
                                        onClick={() => clicked('area_of_pain', 'Pelvis')}
                                        style={{
                                            strokeWidth: 2, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, strokeDasharray: 'none', strokeOpacity: 1
                                        }}
                                        d="m 0,0 c 0,0 170.349,-163 354.349,0 l 17,-110 c 0,0 -162,-136 -387,0 z" /></g>
                        </g>
                    </g>
                </g>
            </svg>
            <div className={style.hoverItem}>
                {hoverItem}
            </div>
        </div>
    )
}

export default Torso