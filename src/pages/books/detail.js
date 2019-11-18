import React from "react"

import Styles from "./detail.module.scss";

class BooksDetail extends React.Component{
    
    render(){
        return (
            <div className={Styles.wrap}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">书的详情</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="form-wrap col-lg-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-2 control-label">书名称</label>
                                <div className="col-md-5">
                                    <p type="text" className="form-control-static">{this.props.match.params.name}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">书描述</label>
                                <div className="col-md-5">
                                    <p type="text" className="form-control-static">{"书籍是人类进步的阶梯"}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">书价格</label>
                                <div className="col-md-5">
                                    <div className="input-group">
                                        <span className="input-group-addon">￥</span>
                                        <input type="text" className="form-control" id="price" placeholder="商品价格" name="price" value={"12.34"} readOnly />
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
                                <label className="col-md-2 control-label">书详情</label>
                                <div className="col-md-10" dangerouslySetInnerHTML={{__html: "在复杂、多样的文化出版品中，书店自身主要想提供给顾客哪些类型的商品或是服务项目，毕竟，在现实环境中，实体书店想陈列所有的出版品、做到应有尽有是不可能的事，因此需要有所取舍。 确认书店定位后，接下来便是衡量书店卖场大小、格局、楼层数等空间上的条件，以便安排各商品区域的位置。 最后，商品的获利条件，例如销售毛利、销售比例、消费特性等，将决定这些商品会被摆设在卖场中的哪一个角落、占多少的空间。 目前的正版图书市场，赢利最大的就是特价书。所谓特价书，就是已经过了流行风头的畅销书。由于价格因素，这样的书是最畅销的。"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksDetail;