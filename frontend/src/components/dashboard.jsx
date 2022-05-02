import Header from "./header";
import LeftNave from "./leftNave";
import Account from "./accountSetting/index"
import './dashboard.scss'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <LeftNave />
                <Account />
            </div>
        </div>
    )
}

export default Dashboard;