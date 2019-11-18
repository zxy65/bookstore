import React from 'react';
import { Link } from "react-router-dom";
import TableList from "./../../component/tableList/index.js";

import Styles from './index.module.scss';

class Category extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }

    componentWillMount() {
        let tmpList = [{
            id: 10001,
            name: "心理学"
        }, {
            id: 10001,
            name: "计算机"
        }
            , {
            id: 10001,
            name: "计算机"
        }, {
            d: 10001,
            name: "程序设计"
        }, {
            id: 10001,
            name: "哲学"
        }];

        this.setState({
            list: tmpList
        })
    }

    render() {
        let tableHeaders = [
            { name: '品类ID', width: '20%' },
            { name: '品类名称', width: '50%' },
        ];


        return (
            <div className={Styles.wrap}>
                  <div className="col-lg-12">
                        <h1 className="page-header">书的列表</h1>
                        <div className={Styles.pageHeaderRight}><Link to="/books/save"><button className="btn btn-primary">添加图书</button></Link></div>
                    </div>
                <div id="page-wrapper">
                    <div className="form-horizontal">
                        <div className="form-group">
                            <label className="col-md-3">当前品类分类ID:{this.state.parentCategoryId || 0}</label>
                        </div>
                    </div>
                    <TableList tableHeaders={tableHeaders}>
                        {
                            this.state.list.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{category.id}</td>
                                        <td>
                                            <p>{category.name}</p>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </TableList>
                </div>
            </div>
        );
    }
}

export default Category;