import React from "react";
import '../index.css';

export default function header(props){
    let menus = props.data;
    return(
        <>
            <div className="header">
                <div className="title header-item"><a href="./">{props.title}</a></div>
                <div className="menus header-item">
                    <ul>
                        {
                            menus.map((menu) => {
                                return <li key={menu.id}><a href={menu.url}>{menu.name}</a></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
