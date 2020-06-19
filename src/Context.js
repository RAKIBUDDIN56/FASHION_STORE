import React, {Component} from 'react';
import cates from './catdata'

const CategoryContext = React.createContext();
// <CategoryContext.Provider value={'hello'}

class CategoryProvider extends Component{
    state = {
        categories:[],
        loading: true
    };

    componentDidMount() {
        let categories = this.formatData(cates);
        this.setState({
            categories,
            loading:false
        })
    }

    formatData(cates){
        let tempcategories = cates.map(cate => {
            let id = cate.sys.id;
            let images = cate.fields.images.map(image => image.fields.file.url);

            let category = { ...cate.fields, images, id };
            return category;
        });
        return tempcategories;
    }

    render() {
        return (
            <CategoryContext.Provider value={{...this.state}}>
                {this.props.children}
            </CategoryContext.Provider>
        );
    }
}
const CategoryConsumer = CategoryContext.Consumer;

export {CategoryProvider,CategoryConsumer,CategoryContext};
