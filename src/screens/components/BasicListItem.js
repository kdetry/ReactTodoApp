import { getReadableDate } from 'services/utils/getReadableDate';
import { TaskStatus } from 'types/TaskStatus';

export const BasicListItem = function ({ item, onClick }) {
    return (
        <li onClick={onClick} className={`listitem ${Object.keys(TaskStatus)[item.status]}`}>
            {item.task} - {Object.keys(TaskStatus)[item.status]}
            <span>{getReadableDate(new Date(item.deadline))}</span>
        </li>
    );
};
