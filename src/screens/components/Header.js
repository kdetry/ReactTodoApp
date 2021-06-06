import FindIcon from 'assets/findicon.svg';
import { useDispatch } from 'react-redux';
import { setFilterText } from 'state/tasksSlice';
export const Header = function () {
    const dispatch = useDispatch();
    return (
        <div className="mainHeader">
            <div className="container">
                <div className="row  justifyCenter ">
                    <input
                        type="text"
                        className="find"
                        placeholder="Find"
                        onChange={(event) => dispatch(setFilterText(event.target.value))}
                    />
                    <img alt="Find Icon" src={FindIcon} />
                </div>
            </div>
        </div>
    );
};
