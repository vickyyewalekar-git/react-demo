import Profile from "./Profile"
import Setting from "./Setting"

function HomeScreen(){
    return(
        <div>
            <h1>Home</h1>

            <div style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                {<Profile/>}
                <br/>
                {<Setting/>}
            </div>
        </div>
    )
}

export default HomeScreen