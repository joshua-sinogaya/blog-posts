import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import profile1 from "./image/img1.jpg";
import profile2 from "./image/img2.jpg";
import profile3 from "./image/img3.jpg";

const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello my name is Sarah, and I am live in Istanbul
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Alex'
                    date='Today at 5:00PM'
                    text='it is amazing'
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Jack' 
                    date='Today at 6:00PM'
                    text='Great job'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Sarah' 
                    date='Today at 7:00PM'
                    text='Thanks'
                    picture={profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)