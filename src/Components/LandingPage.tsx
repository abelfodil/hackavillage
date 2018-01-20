import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

class LandingPage extends React.Component {
    render() {
        return (
            <div id="landpage">
                <AppBar position="fixed">
                    <Toolbar>
                        <span id="landingPagetitle">Common Goal</span>
                        <Button id="register" color="contrast">Register</Button>
                    </Toolbar>
                </AppBar>
                <h2><strong> About Hackavillage </strong></h2>
                <p>Hackavillage is an interactive platform aiming to improve the social environment of cities around the
                    world through its contributors by using dividends. It offers a large range of solutions for smart
                    cities that want to improve the population’s implication. On the other hand, the citizens benefit
                    social rewards directly related to their actions and choices. The more you contribute the easier it
                    gets to help the common well. Overall this is a win-win situation between the two beneficiaries: a
                    town and its townsfolk.</p>
                <h2><strong>You’re a Citizen</strong></h2>
                <p>If you register, you gain access to your own contribution tools. As a citizen you can choose your
                    city and the categories you want to participate, the progress you are at, the current progress and
                    the applicable rewards. Don’t worry, by default, other users can’t see any data that results from
                    your implication!</p>
                <h2><strong>You’re a City/Organization</strong></h2>
                <p>With any kind of contribution, Hackavillage will help you gain visibility and to advance in your
                    financial goal. The optic is to make the organizations save money while they give back to their
                    users in a form of social rewarding at an affordable price.</p>
                <h2><strong>Here is an example</strong></h2>
                <img src={require('../Resources/garnier.jpg')} alt="David, un utilisateur quelconque"/>
                <p>David is studying Computer Engineering at Polytechnique Montreal and subscribed to Hackavillage a
                    year ago. He uses a BIXI from the non-profit organization every day possible to go to school. While
                    he gains points and rewards like rebate on its monthly pass for doing so, he helps the city solve
                    its traffic and CO2 problems. On the other side, BIXI Montreal can see the abstract data converted
                    into charts and graph to help see the progress towards its goal. This data can be projected to help
                    adjust the pricing and rebate to its product.</p>
                <h2><strong>Future goal</strong></h2>
                <p> We already have a good working product. While we continually work on improving the performance and
                    the usability of our platform, we are currently working on expanding the extend of the social system
                    to implement an API that will link directly to the organization that wants to implement Hackavillage
                    and use its functionalities.</p>
                <h2><strong>Who are we?</strong></h2>
                <p>We are a small team who wants to innovate and create an intuitive and reactive product. We have a
                    dynamic environment of thinking that aims into helping cities with their contemporary problems so
                    that the urban life of tomorrow is one that is in continuous improvement.</p>
            </div>
        );
    }
}

export default LandingPage;
