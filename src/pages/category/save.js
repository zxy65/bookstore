

import React from "react";
import Styles from "./save.module.scss"

class CategorySave extends React.Component{

    render(){
        return(
            <div className={Styles.wrap}>
                 <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">书的品类</h1>
                    </div>
                </div>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">所属品类</label>
                        <div className="col-md-3">
                            <select className="form-control cate-select"
                                    onChange={ e => this.onValueChange(e)}>
                                <option value="0">/所有</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">品类名称</label>
                        <div className="col-md-3">
                            <input type="text" className="form-control" ref="category-name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-3 ">
                            <button className="btn btn-xl btn-primary"
                                    >提交</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategorySave;