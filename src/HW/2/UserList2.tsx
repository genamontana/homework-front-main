import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
    users: UsersObjectType // пропиши типизацию
    filterUsers: () => void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {

    const onChangeClick = () => {
        props.filterUsers()
    }

    return (
        <div id={'hw02-users'}>
            <h2>User List:</h2>

            <button id={'hw02-filter-button'}
                    onClick={onChangeClick}>SHOW ME FRIENDS FROM LA
            </button>

            <ul>
                {props.users.myFriends.map((user) => (
                    <CurrentUser key={user.id} user={user}/>
                ))}
            </ul>
        </div>
    );
};
