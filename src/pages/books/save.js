import React from "react";
import RichEditor from"./../../component/rich-editor/index.js";

import Styles from "./save.module.scss";

class BookSave extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: null
        }
    }

    richEditorChanged(value){
        this.setState({
            value: value
        })
    }

    onValueChange(e){
        let name = e.target.name,
            value = e.target.value;
        this.setState({
            [name] : value
        });

    }

    render(){
        
        let paramsName = this.props.match.params.name; 

        return(
            <div className={Styles.wrap}>
                    <div className="col-lg-12">
                        <h1 className="page-header">书的编辑</h1>
                    </div>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">书名</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder="请输入商品名称" name="name"
                                    onChange={ e => this.onValueChange(e)}
                                    value={this.state.name}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">书的描述</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder="请输入商品描述" name="subTitle"
                                    onChange={ e => this.onValueChange(e)}
                                    value={this.state.subTitle} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">书的价格</label>
                        <div className="col-md-5">
                            <div className="input-group">
                                <span className="input-group-addon">￥</span>
                                <input type="number" className="form-control" id="price" placeholder="请输入商品价格" name="price"
                                        min="0"
                                        onChange={ e => this.onValueChange(e)}
                                        value={this.state.price}/>
                                <span className="input-group-addon">元</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">书的图片</label>
                        <div className="col-md-10">
                        {
                                <div className="img-con">
                                    <img src={"/assets/images/book-covers/program_04.jpg"} className="img"/>
                                </div>
                        }
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品详情</label>
                        <div className="col-md-10">
                            <RichEditor 
                                        onValueChange={ value => this.richEditorChanged(value)}
                                        defaultDetail={"在复杂、多样的文化出版品中，书店自身主要想提供给顾客哪些类型的商品或是服务项目，毕竟，在现实环境中，实体书店想陈列所有的出版品、做到应有尽有是不可能的事，因此需要有所取舍。 确认书店定位后，接下来便是衡量书店卖场大小、格局、楼层数等空间上的条件，以便安排各商品区域的位置。 最后，商品的获利条件，例如销售毛利、销售比例、消费特性等，将决定这些商品会被摆设在卖场中的哪一个角落、占多少的空间。 目前的正版图书市场，赢利最大的就是特价书。所谓特价书，就是已经过了流行风头的畅销书。由于价格因素，这样的书是最畅销的。"}                                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-2 submit-con">
                            <button className="btn btn-large btn-primary btn-block"
                                   >确认</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookSave;