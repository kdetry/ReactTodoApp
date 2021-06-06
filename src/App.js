import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserTasks } from './screens/UserTasks';
import { getRandomString } from './services/utils/getRandomString';
import { localUserIdKey } from './AppConstants';
import { AllTasks } from 'screens/AllTasks';
import { ScreenName } from 'types/ScreenName';
import { Header } from 'screens/components/Header';

function App() {
    const screen = useSelector((state) => state.screen.value);

    useEffect(() => {
        const userId = localStorage.getItem(localUserIdKey);
        if (!userId) localStorage.setItem(localUserIdKey, getRandomString());
    }, []);

    return (
        <main className="mainWrapper">
            <Header />
            <div className="contentWrapper">{screen === ScreenName.Home ? <UserTasks /> : <AllTasks />}</div>
        </main>
    );
}

export default App;
