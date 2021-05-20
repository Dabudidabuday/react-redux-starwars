import React from 'react';

export default ({Component, hero}) => class TabItemHOC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hero: this.hero,
        }
    }

    componentDidMount() {
        console.log(hero)
    }


    render() {


        return <Component />;
    }
}