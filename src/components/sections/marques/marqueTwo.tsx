import Image from 'next/image';
import { Fragment } from 'react'

const textSliderData = [
  "solar-panel-installation",
  "Residential Solar Installation",
  "Commercial Solar Installation",
  "Solar Amc Page",
  "Solar Water Pump",
  "Solar Ata Chakki ",
  "solar street light",
  "solar installation projects",
];
const MarqueTwo = ({className}:{className?:string}) => {
    return (
        <div className={`marque-section ${className}`}>
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2">
                                {textSliderData.map((text, index) => (
                                    <Fragment key={index}>
                                        <span className="text-slider">
                                            <Image width={50} height={54} src="/img/asterisk.svg" alt="img" />
                                        </span>
                                        <span className="text-slider text-style">{text}</span>
                                    </Fragment>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MarqueTwo