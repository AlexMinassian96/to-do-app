import React from "react";

interface Props {
    children: any
}


const TodoCards: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div>{props.children}</div>
    );
}

export default TodoCards;