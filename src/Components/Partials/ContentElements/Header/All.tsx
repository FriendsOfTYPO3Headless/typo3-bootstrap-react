import React from 'react'
import Header from "./Header"
import Subheader from "./Subheader"
import HeaderDate from "./HeaderDate"

const AllHeader: React.FC<{ data: any }> = props => {
    const {header, subheader, date, headerPosition, headerLink, headerLayout} = props.data.content
    let content = <></>
    if (props.data.content.hasOwnProperty('headerLayout') && headerLayout !== 100) {
        if (header !== '' || subheader !== '' || date !== '') {
            content = <div className="frame-header">
                {header.length > 0 &&
                    <Header layout={headerLayout}
                            positionClass={headerPosition ? 'text-' + headerPosition : ''}
                            header={header}
                            headerLink={headerLink !== '' ? headerLink : null}
                    />
                }

                {subheader.length > 0 &&
                    <Subheader layout={headerLayout}
                               positionClass={headerPosition ? 'text-' + headerPosition : ''}
                               header={subheader}
                               headerLink={headerLink !== '' ? headerLink : null}
                    />
                }

                {date.length > 0 &&
                    <HeaderDate
                        date={date}
                        positionClass={headerPosition ? 'text-' + headerPosition : ''}
                    />
                }
            </div>
        }
    }

    return content;
}

export default AllHeader;