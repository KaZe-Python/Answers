import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from '../components/QuestionCard';


const useStyles = makeStyles(theme => ({
    main: {
        position: "fixed",
        marginTop: "5.5rem",
        marginLeft:"5rem",
        fontFamily: "Roboto"
    }
}));

const Home = () => {
    const classes = useStyles();
    return(
    <div className={classes.main}>
        Lorem ipsum
        <QuestionCard 
            title="Hi" 
            author="me"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum dolor sed nibh semper ultrices. Nulla scelerisque volutpat nunc, ac tempor lacus sodales ac. Nullam pharetra vel elit non gravida. Fusce felis magna, vulputate eget dignissim vitae, placerat id risus. Sed nec vulputate mauris. Nam fermentum ultricies nunc, eu malesuada nulla cursus non. Nam euismod cursus erat eu blandit. Etiam dictum, velit nec vehicula tempus, metus odio sagittis mi, in fermentum neque lorem lacinia nunc. Etiam congue cursus est ornare laoreet.

            Phasellus vestibulum tellus pellentesque risus luctus laoreet. Curabitur eleifend purus ut neque imperdiet, in pretium leo laoreet. Ut semper maximus dolor, in consequat velit eleifend vel. Nunc eu metus eu ligula dictum consectetur eu in ex. Nulla ac neque id tortor eleifend convallis. Nulla pretium tristique tellus id iaculis. Maecenas eget pulvinar augue. Donec commodo pellentesque risus, at venenatis purus efficitur id. Nulla blandit vulputate risus, sit amet congue arcu ultrices iaculis. Nullam cursus risus ac blandit hendrerit. Aenean vestibulum sit amet libero ut volutpat. Integer vulputate placerat malesuada."
        />
    </div>
    );
};

export default Home;