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
                    <CardMedia style={{left: '50%'}}>
                        <img src={require('../../Resources/sharplogo.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            SharpCity is all about ushering social and environment change through a reward-based
                            interactive platform aiming to improve life quality of every citizen of every cities.
                            We offer a large range of solutions at the disposal of your soon-to-be smart city to promote
                            a greener, more relaxed and sustainable future.
                            How does the model work?
                            Your citizens get access to a wide array of social missions to pursue and as they do,
                            rewards directly related to their actions and choices will be available to them.
                            It's simple, the more reasons you give to your citizens to contribute the common good,
                            the better it gets for everyone's future.
                            Overall this is a win-win situation for all parties involved: a city become more attractive
                            and sustainable and its townfolks live in a provably better environment.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card className="card1">
                    <CardHeader
                        title="You’re a Citizen"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/people.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            If you register, you gain access to your own contribution tools. As a citizen you chose the
                            what kind of social pursuits you want to participate in, the progress you make toward them
                            and your future applicable rewards. Don’t worry, by default, other users can’t see any
                            private data that results from your implication!
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card className="card1">
                    <CardHeader
                        title="You’re a City/Organization"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/city.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            From a small town up to a big metropolitain city, there is no reason to pass up on
                            optimizing your living space for the future. We will help you build a robust action plan and
                            provide you with tools to apply them successfully. You will gain visibility while
                            advancing your long-term financial interests. Give back to the community and give back to
                            your futur self at the same time.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card className="card1">
                    <CardHeader
                        title="A typical usecase"
                    />
                    <CardMedia>
                        <Avatar
                            src={require('../../Resources/garnier.jpg')}
                            className="David"
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography type="headline" component="h2">
                            David Garnier
                        </Typography>
                        <Typography component="p">
                            David is studying Computer Engineering at Polytechnique Montreal and has subscribed to
                            SharpCity a year ago. He uses a bicycle-sharing service from a municipal non-profit
                            organization every day he possibly can to go to school. He can track his CO2 reducing
                            effort and rewards associated with it like rebates on its monthly pass, he helps the city
                            solve some of its overarching traffic and CO2 problems. On the organization's side,
                            BIXI Montreal gets to use abstract data unavailable to them until now and in a digestible
                            way. The data is converted into charts and graph to track the real-world impact of its
                            initiave. The new found information can be integrated in the organizations pricing model to
                            help adjust the pricing and discounts any product or service it may have.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card className="card1">
                    <CardHeader
                        title="Future goal"
                    />
                    <CardMedia>
                        <img src={require('../../Resources/goal.png')} className="David"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            Already having a good working product, we still continue on improving the
                            performance and usability of our platform, we are currently working on expanding the social
                            system to expose a simple API that will directly link any organization that wants to
                            use SharpCity and its functionalities.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
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
                <br/>
            </main>
        );
    }
}

export default LandingPage;
