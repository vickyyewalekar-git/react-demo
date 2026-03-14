
import styles from '../css/my-style.module.css'; 

const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

function Profile(){
    return(
        <>
            <h6 style={myStyle}>Profile</h6>
            <div className="myheader">
                global csss Profile
            </div>
            <div className="row">
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
            </div>
            <div className={styles.bigred}>
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
            </div>
            <div className="row2">
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
                iadbviy ad vyfascy ahbasuyvauyv anvonaovn kjbasivbaisvb uaviubavi 
            </div>
             <button type='button' className={`${styles.primary}`}>
                composes parent class css propertys 
            </button>
        </>
        // <div style={{ backgroundColor:'green', float:'left'}}>
        // </div>
    )
}

export default Profile