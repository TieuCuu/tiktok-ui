//Layouts
import { HeaderOnly } from "~/components/Layout";

//Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Error from "~/pages/Error";


// Public Routes dành cho các routes k cần đăng nhập vẫn xài được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/error', component: Error, layout: null },
]

// Private Routes dành cho các routes cần đăng nhập mới vào được, nếu k thì chuyển hướng sang trang login
const privateRoutes = [

]



export { publicRoutes, privateRoutes }