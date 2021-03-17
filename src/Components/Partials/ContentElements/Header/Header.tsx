import React from 'react';

const Header: React.FC<{
    header: string;
    layout: string;
    class?: string,
    positionClass: string | null,
    link: string | null,
}> = props => {



    return <>HEADER</>
}
export default Header;

Header.defaultProps = {
    class: 'element-header',
}