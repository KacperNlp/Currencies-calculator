export const HeaderInfoSection = ({text}) => {
    return ( 
    <p className="header-info__text">
        Active converter/value:
        <span className="header-info__info-from-data">{text}</span>
      </p>
     );
}