import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Navigation from './Navigation';
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';


configure({ adapter: new Adapter() });

describe('<Navigation></Navigation>', () => {
    let wrapper;

    beforeEach(() => (wrapper = shallow(<Navigation />)))

    it('should render 3 <Link/> elements if not authenticated', () => {
        expect(wrapper.find(Link)).toHaveLength(3);
    });
    it('should render 4 <Link/> elements if authenticated', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(Link)).toHaveLength(4);
    });
    it('should contain <Link className={styles.link} to="/login">Login</Link> if not authenticated', () => {
        const loginLink = <Link className={styles.link} to="/login">Login</Link>;
        expect(wrapper.contains(loginLink)).toEqual(true);
    });
    it('should contain <Link className={styles.link} to="/logout">Logout</Link> if authenticated', () => {
        const logoutLink = <Link className={styles.link} to="/logout">Logout</Link>;
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(logoutLink)).toEqual(true);
    });
    it('should contain <Link className={styles.link} to="/profile">Profile</Link> if authenticated', () => {
        const profileLink = <Link className={styles.link} to="/profile">Profile</Link>;
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(profileLink)).toEqual(true);
    });

})