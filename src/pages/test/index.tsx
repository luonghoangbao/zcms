import React from "react";

import styles from './index.module.scss'; 
import dynamic from "next/dynamic";

const Button = dynamic(() => import('../../components/common/Button'));

export default class Test extends React.Component<any> {
    render() {
        return (<div className={`red ${styles.bold}`}>This is test page <Button text="Submit"/></div>);
    }
}