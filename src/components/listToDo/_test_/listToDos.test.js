import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ListToDos from '../ListToDos';
import styles from '../ListToDos.module.css'

configure({ adapter: new Adapter() });

describe("ListToDos tests", () => {

    //can have nested describe here

    it('should be only <div>Empty</div> displayed', () => {
        const wrapper = shallow(<ListToDos toDos={[]} ></ListToDos >)
        const empty = <div>Empty</div>
        expect(wrapper.contains(empty)).toEqual(true);
    });

    it('should not contain <ul></ul> if toDos prop is an empty array', () => {
        const wrapper = shallow(<ListToDos toDos={[]} ></ListToDos >)
        const ulList = <ul className={styles.todoList}></ul>;
        //console.log(wrapper.debug())
        expect(wrapper.contains(ulList)).toEqual(false);
    });

    it('should not  contain <div>Empty</div> if toDos prop is not empty array', () => {
        const wrapper = shallow(<ListToDos toDos={[{
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]}></ListToDos>);
        const empty = <div>Empty</div>;
        expect(wrapper.contains(empty)).toEqual(false);
    });

    it('should contain <ul></ul> if toDos prop is not empty array', () => {
        const wrapper = shallow(<ListToDos toDos={[{
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]}></ListToDos>);
        const ulList = wrapper.find('ul.todoList');
        expect(ulList).toBeTruthy();
    });
    it('should contain <h3></h3> if toDos prop is not empty array', () => {
        const wrapper = shallow(<ListToDos toDos={[{
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]}></ListToDos>);
        const ulList = wrapper.find('h3');
        expect(ulList).toBeTruthy();
    });
    it('should contain 2 <li></li> if toDos prop is not empty array', () => {
        const wrapper = shallow(<ListToDos toDos={[
            {
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "id": 2,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
        ]}></ListToDos>);
        const liItems = wrapper.find('li.todoItem');
        expect(liItems.length).toBe(2);
    });

})