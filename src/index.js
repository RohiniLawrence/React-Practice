import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                avatar={faker.image.avatar()}
                comment="Great Blog!"
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:35PM"
                avatar={faker.image.avatar()}
                comment="Nice Blog!"
            />
            <CommentDetail
                author="Jane"
                timeAgo="Today at 1:20PM"
                avatar={faker.image.avatar()}
                comment="Great Job!"
            />
        </div>
    );

};
ReactDOM.render(<App />, document.querySelector('#root'))