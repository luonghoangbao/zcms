import React from "react";
import styles from './index.module.scss'; 
import Link from 'next/link';
export default class Login extends React.Component<{},any> {
    constructor(props :any) {
        super(props);
        this.state  = { 
            username : '',
            password : '',
            loggedIn : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    handleChange(e:any){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onLogin(e:any){
        e.preventDefault();
        const{ username, password, loggedIn}:any = this.state
        //logic magic
        if(username === '' || password === ''){
            alert('Tên đăng nhập hoặc mật khẩu không được để trống');
        }
        if(username === 'bao' && password === 'baodaica123'){
            this.setState({
                loggedIn : !loggedIn
            })
        }
        else{
            alert('Tên đăng nhập hoặc mật khẩu sai. Mời bạn nhập lại');
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Link href="/chatbox"/>
        }
        return (
        <div className={`${styles.body}`}>
            <h1 className={`${styles.h1}`}>Login to your account</h1>
            <div className={`${styles.form}`}>
                <h1 className={`${styles.h2}`}>Login</h1>
                <div className="loginform">
                <form action="#" className={`${styles.formLog}`} method="post" >
                    <input type="email" name="username" placeholder="EMAIL" value={this.state.username} onChange={this.handleChange} required />
                    <input type="password" name="password" placeholder="PASSWORD" value={this.state.password} onChange={this.handleChange} required />
                    <ul className={`${styles.tick}`}>
                    <li>
                        <input type="checkbox" id="brand1" />
                        <label htmlFor="brand1"><span />Remember me</label>
                        <Link href="/forgotpassword">Forgot password?</Link>
                    </li>
                    </ul>
                    <div className={`${styles.btn}`}>
                    <Link href="/register">
                        <input type="button" value="REGISTER"/>
                    </Link>
                    <>
                    <input type="button" value="LOGIN" onClick={this.onLogin}/>
                    </>
                    
                    
                    </div>
                    <div className="clear" />
                </form>
                </div>
                {/* //for register popup */}
            </div>
            <div className={`${styles.footer}`}>
                <p> © 2020 Existing Login Form. All Rights Reserved | Design by Hoang Bao</p>
            </div>
        </div>
        );
    }
}