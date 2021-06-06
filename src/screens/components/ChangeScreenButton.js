import { useDispatch, useSelector } from 'react-redux';
import { setScreen } from 'state/screenSlice';
import { ScreenName } from 'types/ScreenName';

export const ChangeScreenButton = function () {
    const screen = useSelector((state) => state.screen.value);
    const dispatch = useDispatch();

    const onClick = function () {
        dispatch(setScreen(screen === ScreenName.Home ? ScreenName.AllTasks : ScreenName.Home));
    };

    const title = screen === ScreenName.Home ? 'Go To All Tasks' : 'Back To Your Tasks';

    return (
        <button className="changeScreen" onClick={onClick}>
            <span>{title}</span>
        </button>
    );
};
