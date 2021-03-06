import React, { useEffect, useState } from 'react'
import { API_LINK_ACCOUNT_BY_ID, REACT_APP_UPLOADS_USER } from '../../api_link';

export default function Comment(props) {
    const comment = props.comment
    const [account, setAccount] = useState({});
    useEffect(() => {
        const fetchAccountComment = async (url, account_id) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ account_id: account_id }),
            });
            return response.json();
        }
        fetchAccountComment(API_LINK_ACCOUNT_BY_ID,comment.account_id )
        .then(result => setAccount(result[0]))
    }, [])
    return (
        <div className="form-comment" key={comment.id}>
            <div className="avatar">
                <img src={`${REACT_APP_UPLOADS_USER}/avatar.png`} width="50px" height="50px" alt="" />
            </div>
            <div className="contentAcc">
                <div className="nameDate">
                    <p className="nameAcc">{account.name}</p>
                    <p className="dateComment"><i className="far fa-clock"></i> {comment.created_at}</p>
                </div>
                <p className="content">{comment.content}</p>
            </div>
        </div>
    )
}
