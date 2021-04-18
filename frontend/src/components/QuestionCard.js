import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.author = props.author;
        this.content = props.content;
        this.detail = props.detail;
        this.style = props.style;
        this.classes = makeStyles({
            root: {
                minWidth: 275,
              },
              bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
              },
              title: {
                fontSize: 14,
                overflow: "ellipsis"
              },
              pos: {
                marginBottom: 12,
              },
        });
    }

    render() {
        return(
            <div style={this.style}>
                <Card className={this.classes.root}>
                    <CardContent>
                        <Typography className={this.classes.title} color="textSecondary" gutterBottom>
                        {this.title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        </Typography>
                        <Typography className={this.classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read...</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
};