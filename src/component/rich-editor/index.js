


import React        from 'react';
import WangEditor     from "wangeditor";
//富文本编辑器，依赖jquery
class RichEditor extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
         this.loadEditor();
    }
    componentWillReceiveProps(nextProps){
        if(this.props.defaultDetail !== nextProps.defaultDetail){
            this.wangEditor.txt.html(nextProps.defaultDetail);
        }
    }
    loadEditor(){
        let _this = this;
             this.wangEditor = new WangEditor("#div1");
            this.wangEditor.customConfig.uploadImgServer = "/manage/product/richtext_img_upload.do";
            this.wangEditor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
            this.wangEditor.customConfig.uploadImgMaxLength = 5;
            this.wangEditor.customConfig.uploadFileName = "upload_file";
             // 初始化富文本编辑器的事件
            this.wangEditor.customConfig.onchange = function(value){
                 _this.bindValueChangeEvent(value);
            };

            this.wangEditor.create();
    }

    bindValueChangeEvent(value){
        this.props.onValueChange(value);
    }
    render(){
        return (
            <div className="rich-editor" id = "div1">
            </div>
        );
    }
}

export default RichEditor;