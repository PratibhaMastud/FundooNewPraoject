import React from "react";
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaletteIcon from '@material-ui/icons/Palette';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from "react-router-dom";
import  './icon.scss';
function BottonIcons() {
    return <div className="icon-main">
      
        <div className="icon-super">
            <div className="child-icon">
                <AddAlertIcon />
            </div>
            <div className="child-icon">
                <PersonAddIcon />
            </div>
            <div className="child-icon">
                <PaletteIcon />
            </div>
            <div className="child-icon">
                <InsertPhotoIcon />
            </div>
            <div className="child-icon">
                <MoreVertIcon />
            </div>

</div>    
</div>
}
export default withRouter(BottonIcons);