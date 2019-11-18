

import React from "react";

import "./index.scss";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password:""
        }
    }

    onValueChange(e){
        let name = e.target.name,
            value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmitKeyUp(e){
        if (e.keyCode === 13){
            this.onSubmit();
        }
    }

    onSubmit(){
        let user = {
            userName: this.state.username.trim(),
            password: this.state.password.trim()
        };
    }
    login(){  

        console.log(this.state.name);
        console.log(this.state.pass);

            var info ={               
                "username":this.state.name.trim(),
                "password":this.state.pass.trim(),    
            }
            info = JSON.stringify(info);
            console.log(info);
            // fetch('http://localhost:8080/Demo01/LoginServlet?username=cxh&password=123456',{
            //     method: 'get',
            //     mode: 'cors',
            //     // body: info
            //     headers:{
            //         "Content-Type":"application/x-www-form-urlencoded"
            //     }
            //     }).then(res => res.text()).then(
            //     data => {
            //     this.setState(info) 
            //     }
            //     )
 
    }
    render(){
        return (
            <div data-reactroot="" className="row login">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">登录</h3>
                        </div>
                        <div className="panel-body">
                            <form role='form' method="get" action="http://localhost:8080/Demo01/LoginServlet">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="用户名" name="username"
                                        onChange={e => this.onValueChange(e)}
                                        onKeyUp={e => this.onSubmitKeyUp(e)}
                                        value={this.state.username} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="密码" name="password"
                                        onChange={e => this.onValueChange(e)}
                                        onKeyUp={e => this.onSubmitKeyUp(e)}
                                        value={this.state.password} />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block"
                                // onClick={ e => this.login(e)}
                                >登录</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
