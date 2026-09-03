
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWebsite = (_props: Props) => {
    return (
        <div>
            LayoutWebsite
            <Outlet />
        </div>
    );
};

export default LayoutWebsite;
