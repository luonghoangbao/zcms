import React from "react";

import styles from './index.module.scss'; 

export default class Test extends React.Component {
    render() {
        return (<div className={`red ${styles.bold}`}>This is test page</div>);
    }
}