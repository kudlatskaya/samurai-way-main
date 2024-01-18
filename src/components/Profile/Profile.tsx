import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Avatar from "./Avatar/Avatar";
import s from './Profile.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArticleIcon from '@mui/icons-material/Article';
import {accentColor} from "../../constants";

type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType, setStatus: (status: any) => void) => void
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfilePropsType) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <main>
            <Avatar savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status}
                    updateStatus={updateStatus}/>

            <div className={s.profileData}>
                <Box sx={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider', color: accentColor}}>
                        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example"
                              TabIndicatorProps={{sx:{backgroundColor: accentColor}}}
                              sx={{
                                  "& button": {color: accentColor},
                                  "& button.Mui-selected": {color: accentColor},
                                  "& button:focus": {color: accentColor},
                              }}>
                            <Tab icon={<PermIdentityIcon/>} label="PROFILE" />
                            <Tab icon={<ArticleIcon/>} label="POSTS" />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}
                                     isOwner={isOwner}
                                     savePhoto={savePhoto}
                                     saveProfile={saveProfile}/>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <MyPostsContainer/>
                    </CustomTabPanel>
                </Box>
            </div>
        </main>
    );
};

export default Profile;