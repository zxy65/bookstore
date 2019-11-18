import React from 'react';
import {Link} from "react-router-dom";
import TableList from "./../../component/tableList/index.js";
import Pagination from "./../../component/pagination/index.js";

import Styles from "./index.module.scss";

class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: null,
            total:0,
            pageNum:0
        };
    }

    componentWillMount(){
        this.initilizeSingleBook();
    }

    onPageNumChange(pageNum){
        console.log(pageNum);
        this.setState({
            pageNum: pageNum
        })
    }

    initilizeSingleBook(){
    
        let tmpList = [];

        tmpList.push({
            title: "计算机",
            author: "andows",
            price: "￥39.98",
            image:'/assets/images/book-covers/c1.jpg',
            description: '爱普苏姆·多洛坐在那里，供奉着她。这是我的最爱。埃尼安马萨。这是一个典型的社会现象。',
            subDescription: '在马萨的后果。做过的蜈蚣藤、凤梨藤、脂球NEC、秃鹰、阿库',
            subsubDescription: '在恩尼姆胡斯托，朗库斯UT，非专利a，威尼斯履历，胡斯托。欧盟的判词是“欧盟踩踏动物”。整数转数.小鹰。维瓦穆斯·埃莱曼图姆我是一只秃鹰。埃尼昂利奥·利古拉，欧盟的porttor EU，结果是，埃尼霍斯AC，埃尼姆。',
            relatedProduct: [
                {
                    title: '汇编语言程序设计基础',
                    image: '/assets/images/book-covers/program_01.jpg',
                    author: 'weiro',
                    price: '￥28.93',
                },{
                    title: 'C#语言程序设计基础',
                    image: '/assets/images/book-covers/program_02.jpg',
                    author: 'dewsd',
                    price: '￥23.93',
                },{
                    title: 'xml语言程序设计基础',
                    image: '/assets/images/book-covers/program_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                },{
                    title: 'c++语言程序设计基础',
                    image: '/assets/images/book-covers/program_04.jpg',
                    author: 'swtor',
                    price: '￥69.93',
                }
            ]
        });

        tmpList.push({
            title: "心理学",
            author: "weiro",
            price: "￥39.98",
            image:'/assets/images/book-covers/c2.jpg',
            description: '真理惟一可靠的标准就是永远自相符合。',
            subDescription: '土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。',
            subsubDescription: '我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。',
            relatedProduct: [
                {
                    title: '积极心理',
                    image: '/assets/images/book-covers/ps_01.jpg',
                    author: 'anso',
                    price: '￥28.93',
                },{
                    title: '变态心理',
                    image: '/assets/images/book-covers/ps_02.jpg',
                    author: 'dewsd',
                    price: '￥23.93',
                },{
                    title: '焦虑心理',
                    image: '/assets/images/book-covers/ps_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                },{
                    title: '沟通心理',
                    image: '/assets/images/book-covers/ps_04.jpg',
                    author: 'swtor',
                    price: '￥69.93',
                }
            ]
        });


        tmpList.push({
            title: "哲学",
            author: "weiro",
            price: "￥39.98",
            image:'/assets/images/book-covers/c3.jpg',
            description: '时间是一切财富中最宝贵的财富。',
            subDescription: '世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。',
            subsubDescription: '过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。',
            relatedProduct: [
                {
                    title: '哲学家请回答',
                    image: '/assets/images/book-covers/ph_01.jpg',
                    author: 'anso',
                    price: '￥28.93',
                },{
                    title: '焦虑心理',
                    image: '/assets/images/book-covers/ps_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                },{
                    title: '哲学的迷途',
                    image: '/assets/images/book-covers/ph_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                },{
                    title: '哲学家都干了些什么',
                    image: '/assets/images/book-covers/ph_04.jpg',
                    author: 'swtor',
                    price: '￥69.93',
                }
            ]
        });

        tmpList.push({
            title: "其他",
            author: "weiro",
            price: "￥39.98",
            image:'/assets/images/book-covers/c4.jpg',
            description: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。',
            subDescription: '世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。',
            subsubDescription: '生活有度，人生添寿。',
            relatedProduct: [
                {
                    title: '哲学家请回答',
                    image: '/assets/images/book-covers/ph_01.jpg',
                    author: 'anso',
                    price: '￥28.93',
                },{
                    title: 'c++语言程序设计基础',
                    image: '/assets/images/book-covers/program_04.jpg',
                    author: 'swtor',
                    price: '￥69.93',
                },{
                    title: '哲学的迷途',
                    image: '/assets/images/book-covers/ph_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                },{
                    title: 'C#语言程序设计基础',
                    image: '/assets/images/book-covers/program_02.jpg',
                    author: 'dewsd',
                    price: '￥23.93',
                }
            ]
        });

        tmpList.push({
            title: "更多",
            author: "weiro",
            price: "￥39.98",
            image:'/assets/images/book-covers/c5.jpg',
            description: '时间是一切财富中最宝贵的财富。',
            subDescription: '世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。',
            subsubDescription: '过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。',
            relatedProduct: [
                {
                    title: '焦虑心理',
                    image: '/assets/images/book-covers/ps_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                }, {
                    title: '汇编语言程序设计基础',
                    image: '/assets/images/book-covers/program_01.jpg',
                    author: 'weiro',
                    price: '￥28.93',
                },{
                    title: '哲学的迷途',
                    image: '/assets/images/book-covers/ph_03.jpg',
                    author: 'swtor',
                    price: '￥49.93',
                },{
                    title: 'C#语言程序设计基础',
                    image: '/assets/images/book-covers/program_02.jpg',
                    author: 'dewsd',
                    price: '￥23.93',
                }
            ]
        });

        this.setState({
            list: tmpList,
            total: tmpList.length * 4
        });
        console.log(tmpList.length * 4);
    }

    randomGenrator(){
        return Math.floor(Math.random() * 5); // 0 ~ 5
    }

    render(){
        let tableHeaders = [
            {name: '书名', width: '20%'},
            {name: '图片', width: '20%'},
            {name: '作者', width: '20%'},
            {name: '价格', width: '20%'},
            {name: '操作', width: '20%'}
        ];

        let books = this.state.list[this.state.pageNum % 5].relatedProduct;
        
        console.log(books);

        return(
            <div className={Styles.wrap}>
                    <div className="col-lg-12">
                        <h1 className="page-header">书的列表</h1>
                        <div className={Styles.pageHeaderRight}><Link to="/books/save"><button className="btn btn-primary">添加图书</button></Link></div>
                    </div>
         
            <TableList tableHeaders={tableHeaders}>
                {
                    books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <p>{book.title}</p>
                                    <p>{book.title + "xxxxxxxx"}</p>
                                </td>
                                <td><img src={book.image} height="140px" width="120px"></img></td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>
                                    <Link className={Styles.opear} to={`/books/detail/${book.title}`}>详情</Link>
                                    <Link className={Styles.opear} to={`/books/save/${book.title}`}>编辑</Link>
                                </td>
                            </tr>
                        );
                     })
                }
            </TableList>
            <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}
                    pageSize = {4}/>
        </div>
        );
    }
}

export default Books;