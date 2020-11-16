import React from "react";
import Switch from "react-switch";

class Theme extends React.Component {
    render() {
        return(
        <div style={{marginTop:30, marginBottom: 30}}>
            <Switch
                onChange={() => this.props.changeThemeProps(this.props.lightTheme)}
                checked={this.props.lightTheme}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
            />
            <p>Color Theme is: <b>{this.props.lightTheme ? "light" : "dark"}</b></p>


        </div>
        )
    }
}

export default Theme;
