import * as React                                   from 'react';
import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Typography                                   from 'material-ui/Typography';
import Avatar                                       from 'material-ui/Avatar';

class LandingPage extends React.Component {
    render() {
        return (
            <main id="landpage">
                <Card className="card1">
                    <CardHeader
                        title="About SharpCity"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/sharplogo.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            SharpCity is an interactive platform aiming to improve the social environment of cities
                            around the
                            world through its contributors by using dividends. It offers a large range of solutions for
                            smart
                            cities that want to improve the population’s implication. On the other hand, the citizens
                            benefit
                            social rewards directly related to their actions and choices. The more you contribute the
                            easier it
                            gets to help the common well. Overall this is a win-win situation between the two
                            beneficiaries: a
                            town and its townsfolk.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card1">
                    <CardHeader
                        title="You’re a Citizen"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/people.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            If you register, you gain access to your own contribution tools. As a citizen you can choose
                            your
                            city and the categories you want to participate, the progress you are at, the current
                            progress and
                            the applicable rewards. Don’t worry, by default, other users can’t see any data that results
                            from
                            your implication!
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card1">
                    <CardHeader
                        title="You’re a City/Organization"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/city.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            With any kind of contribution, SharpCity will help you gain visibility and to advance in
                            your
                            financial goal. The optic is to make the organizations save money while they give back to
                            their
                            users in a form of social rewarding at an affordable price.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card1">
                    <CardHeader
                        title="Here is an example"
                    />
                    <CardMedia>
                        <Avatar
                            src={require('../../Resources/garnier.jpg')}
                            className="David"
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography type="headline" component="h2">
                            David
                        </Typography>
                        <Typography component="p">
                            David is studying Computer Engineering at Polytechnique Montreal and
                            subscribed to SharpCity a
                            year ago. He uses a BIXI from the non-profit organization every day possible to go to
                            school.
                            While he gains points and rewards like rebate on its monthly pass for doing so, he helps the
                            city
                            solve its traffic and CO2 problems. On the other side, BIXI Montreal can see the abstract
                            data
                            converted into charts and graph to help see the progress towards its goal. This data can be
                            projected to
                            help adjust the pricing and rebate to its product.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card1">
                    <CardHeader
                        title="Future goal"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/goal.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            We already have a good working product. While we continually work on improving the
                            performance and
                            the usability of our platform, we are currently working on expanding the extend of the
                            social system
                            to implement an API that will link directly to the organization that wants to implement
                            SharpCity
                            and use its functionalities.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card1">
                    <CardHeader
                        title="Who are we?"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/team.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            We are a small team who wants to innovate and create an intuitive and reactive product. We
                            have a
                            dynamic environment of thinking that aims into helping cities with their contemporary
                            problems so
                            that the urban life of tomorrow is one that is in continuous improvement.
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        );
    }
}

export default LandingPage;
