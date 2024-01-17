import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';


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
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfilePropsType) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <main>
            {/*<ProfileInfo profile={profile} status={status} updateStatus={updateStatus}*/}
            {/*             isOwner={isOwner}*/}
            {/*             savePhoto={savePhoto}*/}
            {/*             saveProfile={saveProfile}/>*/}
            {/*<MyPostsContainer/>*/}
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                        <Tab icon={<PhoneIcon/>} label="RECENTS"/>
                        <Tab icon={<FavoriteIcon/>} label="FAVORITES"/>
                        <Tab icon={<PersonPinIcon/>} label="NEARBY"/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </main>
    );
};

export default Profile;