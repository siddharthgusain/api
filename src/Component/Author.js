import React, { useEffect ,useState } from 'react';
import axios from 'axios';

export default function Author() {

    const [state, setState] = useState({});

    const getAuthor = () =>{
        axios.get('https://jsonmock.hackerrank.com/api/articles')
        .then((res) => {
            setState(res.data.data);
        })
    };

    console.log(state);
    useEffect(() => getAuthor(),[]);

    return (
        <div>
            {
                state.map((data) => {
                    return (
                        <li>{ data.author } </li>
                    )
                })
            }
        </div>
    )
}
